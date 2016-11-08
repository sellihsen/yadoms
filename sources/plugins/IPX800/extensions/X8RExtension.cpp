#include "stdafx.h"
#include "X8RExtension.h"
#include <shared/DataContainer.h>
#include "../specificHistorizers/inputOutput.h"

static const std::string Model("X-8R");

namespace extensions
{

   CX8RExtension::CX8RExtension(boost::shared_ptr<yApi::IYPluginApi> api,
                                const std::string& device,
                                const int& position):
      m_deviceName(device),
      m_slotNumber(position)
   {
      shared::CDataContainer details;
      details.set("provider", "IPX800");
      details.set("shortProvider", "ipx");
      details.set("type", "X24-D");
      details.set("position", boost::lexical_cast<std::string>(position));

      // Relay Configuration
      for (int counter = 0; counter<X8R_RELAY_QTY; ++counter)
      {
         std::stringstream name, hardwareName;
         name << "R" << std::setfill('0') << std::setw(2) << boost::lexical_cast<int>(counter + 1);
         hardwareName << "R" << boost::lexical_cast<int>(position * 8 + counter + 1);
         boost::shared_ptr<specificHistorizers::CInputOuput> temp = boost::make_shared<specificHistorizers::CInputOuput>(name.str(),
                                                                                                                         hardwareName.str(),
                                                                                                                         yApi::EKeywordAccessMode::kGetSet);
         m_keywordList.push_back(temp);
      }

      std::vector<boost::shared_ptr<const yApi::historization::IHistorizable> > keywordsToDeclare;
      keywordsToDeclare.insert(keywordsToDeclare.end(), m_keywordList.begin(), m_keywordList.end());

      //Déclaration of all IOs
      api->declareDevice(device, Model, keywordsToDeclare, details);
   }

   std::string CX8RExtension::getDeviceName() const
   {
      return m_deviceName;
   }

   int CX8RExtension::getSlot() const
   {
      return m_slotNumber;
   }

   void CX8RExtension::updateFromDevice(boost::shared_ptr<yApi::IYPluginApi> api, 
                                        shared::CDataContainer& values) const
   {
      std::vector<boost::shared_ptr<specificHistorizers::CInputOuput> >::const_iterator diIterator;
      std::vector<boost::shared_ptr<const yApi::historization::IHistorizable> > keywordsToHistorize;

      for (diIterator = m_keywordList.begin(); diIterator != m_keywordList.end(); ++diIterator)
      {
         std::cout << "Set IO : " << (*diIterator)->getHardwareName() << std::endl;
         bool newValue = values.get<bool>((*diIterator)->getHardwareName());

         //historize only for new value
         if ((*diIterator)->get() != newValue)
         {
            (*diIterator)->set(newValue);
            keywordsToHistorize.push_back((*diIterator));
         }
      }

      api->historizeData(m_deviceName, keywordsToHistorize);
   }

   CX8RExtension::~CX8RExtension()
   {}
}// namespace extensions