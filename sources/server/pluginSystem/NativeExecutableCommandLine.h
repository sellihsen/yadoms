#pragma once
#include <shared/process/ICommandLine.h>

namespace pluginSystem
{
   //--------------------------------------------------------------
   /// \brief	Command line generator
   //--------------------------------------------------------------
   class CNativeExecutableCommandLine : public shared::process::ICommandLine
   {
   public:
      //--------------------------------------------------------------
      /// \brief	Constructor
      /// \param[in] executablePath    The Python executable path (without directory if in system path)
      /// \param[in] workingDirectory  From where to start Python
      /// \param[in] parameters        Command line arguments
      //--------------------------------------------------------------
      CNativeExecutableCommandLine(const boost::filesystem::path& executablePath,
                                   const boost::filesystem::path& workingDirectory,
                                   const std::vector<std::string> parameters);

      //--------------------------------------------------------------
      /// \brief	Destructor
      //--------------------------------------------------------------
      virtual ~CNativeExecutableCommandLine();

      // ICommandLine Implementation
      const boost::filesystem::path& executable() const override;
      const boost::filesystem::path& workingDirectory() const override;
      const std::vector<std::string>& args() const override;
      // [END] ICommandLine Implementation

   private:
      const boost::filesystem::path m_executablePath;
      const boost::filesystem::path m_workingDirectory;
      const std::vector<std::string> m_args;
   };
} // namespace pluginSystem


