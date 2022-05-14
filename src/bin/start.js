#!/usr/bin/env node
'use strict';

import FileeeBackupDownloader from '../lib/index';

FileeeBackupDownloader.run().catch(error => {
    console.log(error);
    process.exit(1);
});
