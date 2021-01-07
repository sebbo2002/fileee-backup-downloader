[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

## 🧐 What's this?

This `fileee-backup-downloader` is a hastily hacked script that logs into [Fileee](https://www.fileee.com/) with
[pupperteer](https://developers.google.com/web/tools/puppeteer/) and downloads a full backup archive. I use the script
to create my own backup of my documents at regular intervals. Just to be sure.

<br />

## 🎉 Features
- Login to [Fileee](https://www.fileee.com/) using username and password (no 2-Factor supported)
- Download ZIP archive in a temporary folder
- Move archive to given destination

<br />

## 🔧 Usage

| Environment Variable | Description                                                                  |
|:-------------------- |:---------------------------------------------------------------------------- |
|FILEEE_USERNAME       | Username to use to login into Fileee web app                                 |
|FILEEE_PASSWORD       | Password to use to login                                                     |
|BACKUP_DESTINATION    | Full destination path (folder + name), uses `~/fileee-backup.zip` if not set |

<br />

## 📱 Screenshot
![Screenshot of a terminal running the script](https://d.sebbo.net/screenshot-3j3cfHIb10luztGF1Llflg5qgOIVDCg9BNk5GdKo1dK98DaIaYGPex8YLotZeyAaIvmZLc7qeVzPXecIejkcuczcLY0Bvsaioq98.png)

<br />

## 👩‍⚖️️ Legal Stuff

- This tool was created out of private interest and is not affiliated with Fileee or the company behind it
- Licensed under the [MIT license](LICENSE)
