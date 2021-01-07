const FileeeBackupDownloader = require('../fileee-backup-downloader');
FileeeBackupDownloader.run().catch(error => {
    console.log(error);
    process.exit(1);
});
