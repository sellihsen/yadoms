#include "stdafx.h"
#include "YadomsCPULoad.h"
#include <shared/exception/Exception.hpp>
#include <shared/plugin/yPluginApi/StandardCapacities.h>
#include <shared/plugin/yPluginApi/StandardUnits.h>

CYadomsCPULoad::CYadomsCPULoad(const std::string & device)
   :m_device(device), 
    m_keyword(boost::make_shared<yApi::historization::CLoad>("YadomsCPULoad"))
{
   FILE* file;
   struct tms timeSample;
   char line[128];


   lastCPU = times(&timeSample);
   lastSysCPU = timeSample.tms_stime;
   lastUserCPU = timeSample.tms_utime;


   file = fopen("/proc/cpuinfo", "r");
   numProcessors = 0;
   while(fgets(line, 128, file) != NULL)
   {
      if (strncmp(line, "processor", 9) == 0) numProcessors++;
   }
   fclose(file);
}

CYadomsCPULoad::~CYadomsCPULoad()
{}

void CYadomsCPULoad::declareKeywords(boost::shared_ptr<yApi::IYPluginApi> api, shared::CDataContainer details)
{
   // Declare associated keywords (= values managed by this device)
   if (!api->keywordExists( m_device, m_keyword))
      api->declareKeyword(m_device, m_keyword, details);
}

void CYadomsCPULoad::historizeData(boost::shared_ptr<yApi::IYPluginApi> api) const
{
   BOOST_ASSERT_MSG(api, "api must be defined");

   api->historizeData(m_device, m_keyword);
}

void CYadomsCPULoad::read()
{
   struct tms timeSample;
   clock_t now;
   float percent;


   now = times(&timeSample);
   if (now <= lastCPU || timeSample.tms_stime < lastSysCPU ||
      timeSample.tms_utime < lastUserCPU)
   {
      //Overflow detection. Just skip this value.
      percent = -1.0;
   }
   else
   {
      percent = (timeSample.tms_stime - lastSysCPU) +
         (timeSample.tms_utime - lastUserCPU);
      percent /= (now - lastCPU);
      percent /= numProcessors;
      percent *= 100;
   }
   lastCPU = now;
   lastSysCPU = timeSample.tms_stime;
   lastUserCPU = timeSample.tms_utime;

   m_keyword->set( percent );

   std::cout << "Yadoms CPU Load : " << m_keyword->formatValue() << std::endl;
}

boost::shared_ptr<yApi::historization::IHistorizable> CYadomsCPULoad::GetHistorizable() const
{
   return m_keyword;
}
