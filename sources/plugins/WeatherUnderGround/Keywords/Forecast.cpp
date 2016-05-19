#include "stdafx.h"
#include "Forecast.h"
#include <boost/lexical_cast.hpp>
#include "KeywordException.hpp"

// Shortcut to yPluginApi namespace
namespace yApi = shared::plugin::yPluginApi;

CForecast::CForecast(std::string PluginName,
                     std::string KeyWordName,
                     const weatherunderground::helper::EPeriod& Period)
   : m_PluginName(PluginName),
     m_forecast(new yApi::historization::CForecastHistorizer(KeyWordName, yApi::EKeywordAccessMode::kGet, Period))
{
}

void CForecast::Initialize(boost::shared_ptr<yApi::IYPluginApi> api,
                           shared::CDataContainer details) const
{
   if (!api->keywordExists(m_PluginName, m_forecast))
      api->declareKeyword(m_PluginName, m_forecast, details);
}

CForecast::~CForecast()
{
}

void CForecast::AddUnit(const std::string& UnitName,
                        const std::string& UnitValue) const
{
   m_forecast->AddUnit(UnitName, UnitValue);
}

void CForecast::AddPeriod(const shared::CDataContainer& ValueContainer,
                          const std::string& filterYear,
                          const std::string& filterMonth,
                          const std::string& filterDay,
                          const std::string& filterWeatherCondition,
                          const std::string& filterTempMax,
                          const std::string& filterTempMin,
                          const std::string& filterMaxWind,
                          const std::string& filterAveWind,
                          const std::string& filterAveWindDegrees,
                          const std::string& filterAveHumidity,
                          const std::string& filterRainDay,
                          const std::string& filterSnowDay) const
{
   std::string WeatherIconTemp;

   weatherunderground::helper::EnumValuesNames::const_iterator it = weatherunderground::helper::EEnumTypeNames.find(ValueContainer.get<std::string>(filterWeatherCondition));
   if (it != weatherunderground::helper::EEnumTypeNames.end())
   {
      WeatherIconTemp = static_cast<yApi::historization::EWeatherCondition>(it->second).toString();
   }
   else
      throw CKeywordException("Value " + ValueContainer.get<std::string>(filterWeatherCondition) + " could not be set");

   m_forecast->AddPeriod(ValueContainer.get<std::string>(filterYear),
                         ValueContainer.get<std::string>(filterMonth),
                         ValueContainer.get<std::string>(filterDay),
                         WeatherIconTemp,
                         ValueContainer.get<std::string>(filterTempMax),
                         ValueContainer.get<std::string>(filterTempMin),
                         boost::lexical_cast<std::string>(ValueContainer.get<double>(filterMaxWind) / 3.6), // Transform from Km/h -> m/s
                         boost::lexical_cast<std::string>(ValueContainer.get<double>(filterAveWind) / 3.6), // Transform from Km/h -> m/s
                         ValueContainer.get<std::string>(filterAveWindDegrees),
                         ValueContainer.get<std::string>(filterAveHumidity),
                         ValueContainer.get<std::string>(filterRainDay),
                         boost::lexical_cast<std::string>(ValueContainer.get<double>(filterSnowDay) * 10)); // Transform from cm -> mm
}

void CForecast::ClearAllPeriods() const
{
   m_forecast->ClearAllPeriods();
}

void CForecast::SetCityName(const std::string& CityName) const
{
   m_forecast->SetCityName(CityName);
}

boost::shared_ptr<yApi::historization::IHistorizable> CForecast::GetHistorizable() const
{
   return m_forecast;
}

