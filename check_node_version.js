const { engines } = require('./package.json')
const installedVersion = process.version.substring(
  process.version.indexOf('v') + 1
)
const version = engines.node

if (installedVersion !== version) {
  throw new Error(
    `
    *************************************************************************************
    *                                                                                   *
    *  The current node version ${process.version} installed on your system does not satisfy the   *
    *  project's required version v${version}                                              *
    *                                                                                   *
    *************************************************************************************
    `
  )
}
