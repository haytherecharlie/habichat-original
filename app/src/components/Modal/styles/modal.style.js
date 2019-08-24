import styled from 'styled-components'
import scale from 'lib/scale'

export const Modal = styled.Modal``

export const ModalContainer = styled.View`
  flex: 1;
  margin: 40px 20px 20px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background: #fff;
`

export const HeaderContainer = styled.View`
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
`

export const BodyContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
`

export const CloseButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #191d38;
  height: 30px;
  width: 30px;
  border-radius: 15px;
`

export const CloseText = styled.Text`
  color: #191d38;
  font-weight: 500;
  font-size: ${scale(20)};
  text-align: center;
  margin-top: -4px;
  margin-right: -2px;
`

export const SlideContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SlideImage = styled.Image`
  height: 300px;
  width: 300px;
`

export const SlideTitle = styled.Text`
  font-size: 30px;
  font-family: habichat;
  text-align: center;
  color: #191d38;
  margin-bottom: 20px;
`

export const SlideText = styled.Text`
  font-size: 15px;
  color: #191d38;
  text-align: center;
  padding: 10px 45px;
`
