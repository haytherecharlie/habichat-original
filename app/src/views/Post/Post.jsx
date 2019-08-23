import React, { useState } from 'react'
import { Button } from 'react-native'
import imagenation from 'lib/imagenation'
import * as S from './styles/post.style'

const Post = ({ navigation }) => {
  const [image, setImage] = useState(false)

  const chooseImage = async () => {
    const uploadedImage = await imagenation()
    if (uploadedImage) setImage(uploadedImage)
  }

  const uploadImage = async () => {
    console.log('uploading')
  }

  return (
    <S.Post onPress={() => navigation.navigate('Community')}>
      <S.BackTouchableOpacity onPress={() => navigation.navigate('Community')}>
        <S.BackText>[Post] Go Back</S.BackText>
      </S.BackTouchableOpacity>
      <Button onPress={() => chooseImage()} title="Select Image" />
      {image && <S.ImagePlaceholder source={image} />}
      <Button onPress={() => uploadImage()} title="upload" />
    </S.Post>
  )
}

export default Post
