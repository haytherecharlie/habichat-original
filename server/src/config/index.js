import devConfig from 'config/app-services.development.json.js.js'
import prodConfig from 'config/app-services.production.json.js.js'
import globalConfig from 'config/app-services.global.json.js.js'

const configuration = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        ...globalConfig,
        ...devConfig
      }
    default:
      return {
        ...globalConfig,
        ...prodConfig
      }
  }
}

export default configuration()
