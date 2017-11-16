#pragma once
#include "task/ITask.h"
#include "database/IDataBackup.h"
#include "IPathProvider.h"

namespace task
{
   namespace backup
   {
      //------------------------------------------
      ///\brief   Backup task (db, scripts, data)
      //-----------------------------------------
      class CBackup : public ITask
      {
      public:
         //------------------------------------------
         ///\brief   Constructor
         //------------------------------------------
         explicit CBackup(boost::shared_ptr<const IPathProvider> pathProvider, boost::shared_ptr<database::IDataBackup> dataBackupInterface);

         //------------------------------------------
         ///\brief   Destructor
         //------------------------------------------
         virtual ~CBackup();

         // ITask implementation
         const std::string& getName() const override;
         void doWork(TaskProgressFunc pFunctor) override;
         // [END] ITask implementation

      private:
         //------------------------------------------
         ///\brief   Internal progress handler 
         ///\param [in] remaining   The remaining count (between 0 and total) for current operation
         ///\param [in] total       The total count for current operation
         ///\param [in] currentPart The current total progression
         ///\param [in] totalPart   The final progression when current operation ends
         //------------------------------------------
         void OnProgressionUpdatedInternal(int remaining, int total, float currentPart, float totalPart, const std::string& message = std::string()) const;

         //------------------------------------------
         ///\brief   The path provider instance
         //------------------------------------------
         boost::shared_ptr<const IPathProvider> m_pathProvider;

         //------------------------------------------
         ///\brief   The task name
         //------------------------------------------
         static std::string m_taskName;

         //------------------------------------------
         ///\brief   The backup data interface
         //------------------------------------------
         boost::shared_ptr<database::IDataBackup> m_dataBackupInterface;

         //------------------------------------------
         ///\brief   The function pointer for reporting progression
         //------------------------------------------
         TaskProgressFunc m_reportRealProgress;
      };
   } //namespace backup
} //namespace task

