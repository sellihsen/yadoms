#include "stdafx.h"
#include "JsonResult.h"

namespace web { namespace rest { namespace json {


   std::string CJsonResult::m_resultFieldName = "result";
   std::string CJsonResult::m_errorMessageFieldName = "message";
   std::string CJsonResult::m_dataFieldName = "data";
   CJson CJsonResult::EmptyCJson = CJson();

   CJson CJsonResult::GenerateError(const std::string & errorMessage /*= shared::CStringExtension::EmptyString*/, const CJson & data /*= CJsonResult::EmptyCJson*/)
   {
      return GenerateInteral(false, errorMessage, data);
   }

   CJson CJsonResult::GenerateError(const std::exception & error, const CJson & data /*= CJsonResult::EmptyCJson*/)
   {
      return GenerateInteral(false, error.what(), data);
   }

   CJson CJsonResult::GenerateSuccess(const CJson & data /*= CJsonResult::EmptyCJson*/)
   {
      return GenerateInteral(true, shared::CStringExtension::EmptyString, data);
   }

   CJson CJsonResult::GenerateInteral(const bool result, const std::string & message, const CJson & data)
   {
      CJson error;
	  error.set(m_resultFieldName, result);
      error.set(m_errorMessageFieldName, message);

      error.setChild(m_dataFieldName, data);
      return error;
   }

   bool CJsonResult::isSuccess(const CJson & data)
   {
      if(data.hasValue(m_resultFieldName) )
         return data.get<bool>(m_resultFieldName);
      return false;
   }



} //namespace json
} //namespace rest
} //namespace web 

