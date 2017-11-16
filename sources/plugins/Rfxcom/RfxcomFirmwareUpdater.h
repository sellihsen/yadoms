#pragma once

#include "IRfxcomFirmwareUpdater.h"
#include <plugin_cpp_api/IPlugin.h>
#include "PicBoot.h"

// Shortcut to yPluginApi namespace
namespace yApi = shared::plugin::yPluginApi;

//--------------------------------------------------------------
/// \brief	Configuration of the plugin
//--------------------------------------------------------------
class CRfxcomFirmwareUpdater : public IRfxcomFirmwareUpdater
{
public:
   CRfxcomFirmwareUpdater(boost::shared_ptr<yApi::IYPluginApi> api,
                          boost::shared_ptr<yApi::IExtraQuery> extraQuery,
                          const std::string& serialPort);
   virtual ~CRfxcomFirmwareUpdater();

   // IRfxcomFirmwareUpdate implementation
   void update() override;
   // [END] IRfxcomFirmwareUpdate implementation

protected:
   void loadFile(const std::string& fileContent) const;
   static unsigned int hexStringToUInt(const std::string& hexString);
   static unsigned int computeLineChecksum(const std::string& line);
   static boost::shared_ptr<picConfigurations::IPicConfiguration> createPicConfiguration(const unsigned deviceId);
   static void checkFileCompatibility(const unsigned int deviceId,
                                      const std::string& fileName);
   static unsigned int rfxcomSwitchToBootloaderMode(boost::shared_ptr<CPicBoot> picBoot);
   static void rfxcomReadBootloaderVersion(boost::shared_ptr<CPicBoot> picBoot);
   static void rfxcomClearMemory(boost::shared_ptr<CPicBoot> picBoot);
   void rfxcomWritingMemory(boost::shared_ptr<CPicBoot> picBoot);
   void rfxcomVerifyMemory(boost::shared_ptr<CPicBoot> picBoot);
   static void rfxcomReboot(boost::shared_ptr<CPicBoot> picBoot);

private:
   const boost::shared_ptr<yApi::IYPluginApi> m_api;
   const boost::shared_ptr<yApi::IExtraQuery> m_extraQuery;
   const std::string m_serialPort;
};
