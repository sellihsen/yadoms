#include "stdafx.h"
#include "DeviceRemoved.h"


namespace plugin_cpp_api
{
   CDeviceRemoved::CDeviceRemoved(const plugin_IPC::toPlugin::DeviceRemoved& msg)
      : m_device(msg.device()),
        m_details(msg.details())
   {
   }

   CDeviceRemoved::~CDeviceRemoved()
   {
   }

   const std::string& CDeviceRemoved::device() const
   {
      return m_device;
   }

   const shared::CDataContainer& CDeviceRemoved::details() const
   {
      return m_details;
   }
} // namespace plugin_cpp_api	


