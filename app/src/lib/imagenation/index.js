import { launchImageLibraryAsync } from 'expo-image-picker'
import { askAsync, CAMERA_ROLL } from 'expo-permissions'

const imageOptions = {
  allowsEditing: true,
  quality: 0.2,
  base64: true,
  exif: true
}

const imagenation = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { status } = await askAsync(CAMERA_ROLL)
      if (status === 'granted') {
        const image = await launchImageLibraryAsync(imageOptions)
        return resolve(!image.cancelled ? image : false)
      }
      return resolve(false)
    } catch (err) {
      return reject(err)
    }
  })

export default imagenation
