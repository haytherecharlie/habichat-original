import styled from 'styled-components'
import scale from 'lib/scale'

export const Onboarding = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

export const HeaderContainer = styled.View`
  flex: 0 0 70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
`

export const BodyContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
`

export const CloseButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
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

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: ${scale(30)};
  display: flex;
  align-items: center;
  margin: 10px;
  padding: ${scale(12)};
  background: #191d38;
  border: 1px solid #fff;
  margin-top: 20px;
`

export const SignInButtonText = styled.Text`
  font-size: ${scale(16)};
  font-weight: 500;
  color: #fff;
`

export const EmailInput = styled.TextInput`
  width: 100%;
  height: 35px;
  text-align: center;
  border: 1px solid #191d38;
`
