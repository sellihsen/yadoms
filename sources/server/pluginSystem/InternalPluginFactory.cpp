#include "stdafx.h"
#include "InternalPluginFactory.h"
#include <shared/StringExtension.h>
#include <shared/exception/Exception.hpp>
#include "internalPlugin/Information.h"
#include "internalPlugin/System.h"

namespace pluginSystem
{
   CInternalPluginFactory::CInternalPluginFactory(boost::shared_ptr<automation::script::IDayLight> dayLightProvider)
      :m_libraryPath("internalPlugin/yadoms.plugin"), m_dayLightProvider(dayLightProvider)
   {
   }

   CInternalPluginFactory::~CInternalPluginFactory()
   {
   }


   shared::plugin::IPlugin* CInternalPluginFactory::construct() const
   {
      return new internalPlugin::CSystem(m_dayLightProvider);
   }

   const boost::filesystem::path& CInternalPluginFactory::getLibraryPath() const
   {
      //must use member, because returning reference
      return m_libraryPath;
   }

   boost::shared_ptr<const shared::plugin::information::IInformation> CInternalPluginFactory::getInformation() const
   {
      return boost::shared_ptr<const shared::plugin::information::IInformation>(new internalPlugin::CInformation());
   }

} // namespace pluginSystem
