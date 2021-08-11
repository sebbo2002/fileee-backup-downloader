# [2.0.0-develop.9](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.8...v2.0.0-develop.9) (2021-08-11)


### Features

* Allow to use the beta environment ([ed486d0](https://github.com/sebbo2002/fileee-backup-downloader/commit/ed486d0e765d7bb1a02eb7e4dfb5b5e12273d0ec))
* Throw error if server responses with error download ([a4398a6](https://github.com/sebbo2002/fileee-backup-downloader/commit/a4398a6f7c24de1d8cbaeeb84a6f8ae18c54f1fa))


### Reverts

* Revert "fix: Downgrade to puppeteer@9" ([ed53437](https://github.com/sebbo2002/fileee-backup-downloader/commit/ed534375cb506e804dcf3d209cc227ca7da95b4b))

# [2.0.0-develop.8](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.7...v2.0.0-develop.8) (2021-08-11)


### Bug Fixes

* Downgrade to puppeteer@9 ([eb4eb52](https://github.com/sebbo2002/fileee-backup-downloader/commit/eb4eb52f38a46c6e359d5c455f5d14195954615e))

# [2.0.0-develop.7](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.6...v2.0.0-develop.7) (2021-08-03)


### Bug Fixes

* Do not use "fs/promises" as it's unavailable in node@12 ([6ecedde](https://github.com/sebbo2002/fileee-backup-downloader/commit/6ecedde29d3a3d920c135f2168f95775fe7a7a05))

# [2.0.0-develop.6](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.5...v2.0.0-develop.6) (2021-08-02)


### Bug Fixes

* Fallback to Promise.race if Promise.any is unavailable (node.js < 15) ([084c8f7](https://github.com/sebbo2002/fileee-backup-downloader/commit/084c8f7dcb5116e8767a3730fca3b3d30bf97030))

# [2.0.0-develop.5](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.4...v2.0.0-develop.5) (2021-08-02)


### Bug Fixes

* Update selectors / open download instead of business upgrade ([ccc9d45](https://github.com/sebbo2002/fileee-backup-downloader/commit/ccc9d452ca2059956f42fe049d1ba95d210ba483))

# [2.0.0-develop.4](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.3...v2.0.0-develop.4) (2021-08-02)


### Bug Fixes

* Fix "ENOENT: no such file or directory, chmod" on install ([990eab4](https://github.com/sebbo2002/fileee-backup-downloader/commit/990eab4ec00ecb2cd75794daef024245ccb5d263))

# [2.0.0-develop.3](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.2...v2.0.0-develop.3) (2021-08-02)


### Bug Fixes

* Ignore error on password modal if second promise is pending ([9d7a606](https://github.com/sebbo2002/fileee-backup-downloader/commit/9d7a60648190d40e1dea274ad379457fc9faa25c))

# [2.0.0-develop.2](https://github.com/sebbo2002/fileee-backup-downloader/compare/v2.0.0-develop.1...v2.0.0-develop.2) (2021-08-02)


### Bug Fixes

* Ignore error on password modal if second promise is pending ([9fc5ccc](https://github.com/sebbo2002/fileee-backup-downloader/commit/9fc5ccc6637d73927192511321438cec83d86e2d))

# [2.0.0-develop.1](https://github.com/sebbo2002/fileee-backup-downloader/compare/v1.0.1...v2.0.0-develop.1) (2021-07-29)


### chore

* Remove node.js 10 Support ([2b910c0](https://github.com/sebbo2002/fileee-backup-downloader/commit/2b910c09bc8a41085fc4472159494d8738d5521e))


### BREAKING CHANGES

* Removed support for node.js v10

## [1.0.1](https://github.com/sebbo2002/fileee-backup-downloader/compare/v1.0.0...v1.0.1) (2021-06-04)


### Bug Fixes

* Repair bin path in package.json ([af570f6](https://github.com/sebbo2002/fileee-backup-downloader/commit/af570f6b10c05acc548cf87ccb2c6b6f22b33621))

## [1.0.1-develop.2](https://github.com/sebbo2002/fileee-backup-downloader/compare/v1.0.1-develop.1...v1.0.1-develop.2) (2021-06-03)


### Bug Fixes

* Repair bin path in package.json ([af570f6](https://github.com/sebbo2002/fileee-backup-downloader/commit/af570f6b10c05acc548cf87ccb2c6b6f22b33621))

## [1.0.1-develop.1](https://github.com/sebbo2002/fileee-backup-downloader/compare/v1.0.0...v1.0.1-develop.1) (2021-06-02)

# 1.0.0 (2021-05-25)


### Bug Fixes

* Update code for redesign ([dc38469](https://github.com/sebbo2002/fileee-backup-downloader/commit/dc3846942530de95271b539698a54309babe05db))


### Features

* FILEEE_NO_LOG ([992f685](https://github.com/sebbo2002/fileee-backup-downloader/commit/992f685928466690b2e409c313870282065c3a58))
* first commit 👋🏼 ([9aefef6](https://github.com/sebbo2002/fileee-backup-downloader/commit/9aefef684565870c1ce10951d11b1c9a6089d8b2))

# 1.0.0-develop.1 (2021-05-25)


### Bug Fixes

* Update code for redesign ([dc38469](https://github.com/sebbo2002/fileee-backup-downloader/commit/dc3846942530de95271b539698a54309babe05db))


### Features

* FILEEE_NO_LOG ([992f685](https://github.com/sebbo2002/fileee-backup-downloader/commit/992f685928466690b2e409c313870282065c3a58))
* first commit 👋🏼 ([9aefef6](https://github.com/sebbo2002/fileee-backup-downloader/commit/9aefef684565870c1ce10951d11b1c9a6089d8b2))

# [1.0.0-develop.3](https://github.com/sebbo2002/js-template-test/compare/v1.0.0-develop.2...v1.0.0-develop.3) (2021-05-08)


### Bug Fixes

* **CI:** Fix npm github release ([8355e8b](https://github.com/sebbo2002/js-template-test/commit/8355e8b3658b534ad359d03147d6b6d559de3340))

# [1.0.0-develop.2](https://github.com/sebbo2002/js-template-test/compare/v1.0.0-develop.1...v1.0.0-develop.2) (2021-05-08)


### Bug Fixes

* Docker Tags ([7d8dcd5](https://github.com/sebbo2002/js-template-test/commit/7d8dcd579f3d796e6a07d77e7da8700eb44a4ce0))

# 1.0.0-develop.1 (2021-05-08)


### Bug Fixes

* Cannot read property 'env' of undefined ([7f64b7a](https://github.com/sebbo2002/js-template-test/commit/7f64b7a9c3b8f42dd3f608be0251fa1fdaad32d8))
* **CI:** Fix docker build ([7da7438](https://github.com/sebbo2002/js-template-test/commit/7da74380621eed1134a87d0c01d4da8b45e58525))


### Features

* test ([2008ee5](https://github.com/sebbo2002/js-template-test/commit/2008ee563dab2203ac6c51d55e06631af86b58b2))

# 1.0.0-develop.1 (2021-05-07)


### Features

* test ([2008ee5](https://github.com/sebbo2002/js-template-test/commit/2008ee563dab2203ac6c51d55e06631af86b58b2))
