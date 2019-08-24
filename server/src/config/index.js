import devConfig from 'config/app-services.development.json'
import prodConfig from 'config/app-services.production.json'
import globalConfig from 'config/app-services.global.json'

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
