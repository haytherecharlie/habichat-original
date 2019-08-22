import devConfig from 'config/app-services.development.json'
import prodConfig from 'config/app-services.production.json'
import globalConfig from 'config/app-services.global.json'

const environment = __DEV__ ? 'development' : 'production'
const configuration = () => {
  switch (environment) {
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
