import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import neighborhoodImage from 'assets/images/neighborhood.png'
import neighborsImage from 'assets/images/neighbors.png'
import privacyImage from 'assets/images/privacy.png'
import mailImage from 'assets/images/mail.png'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles/modal.style'

const Modal = ({ showOnboarding }) => {
  const { showModal } = useSelector((s) => s.app)
  const [onboarding, setOnboarding] = useState(false)
  const dispatch = useDispatch()
  return (
    <S.Modal animationType="slide" transparent={true} visible={showModal}>
      {/* White Modal Box */}
      <S.ModalContainer>
        {/* Modal Header */}
        <S.HeaderContainer>
          <S.CloseButton onPress={() => dispatch({ type: 'TOGGLE_MODAL' })}>
            <Ionicon name="ios-close-circle-outline" size={35} color="#191d38" />
            {/* <S.CloseText textAlignVertical="top">&times;</S.CloseText> */}
          </S.CloseButton>
        </S.HeaderContainer>
        {/* Modal Body */}
        <S.BodyContainer>
          {onboarding ? (
            <Swiper loop={false}>
              <S.SlideContainer>
                <S.SlideImage source={neighborhoodImage} />
                <S.SlideTitle>{`Welcome to the Neighborhood!`}</S.SlideTitle>
                <S.SlideText>{`Habichat is a private online message board for your condo.`}</S.SlideText>
                <S.SlideText>{`No private messages, \n everyone's included!`}</S.SlideText>
              </S.SlideContainer>
              <S.SlideContainer>
                <S.SlideImage source={neighborsImage} />
                <S.SlideTitle>{`Your Nighbors Make Life Better!`}</S.SlideTitle>
                <S.SlideText>{`Find dog walkers, babysitters, build a sports team, sell your stuff.`}</S.SlideText>
                <S.SlideText>{`There's so much more going on in your building than you realize.`}</S.SlideText>
              </S.SlideContainer>
              <S.SlideContainer>
                <S.SlideImage source={privacyImage} />
                <S.SlideTitle>{`No Akward Encounters`}</S.SlideTitle>
                <S.SlideText>{`No one likes an akward elevator ride, so share as much or as little ad you'd like about yourself. We care about your privacy.`}</S.SlideText>
                <S.SignInButton onPress={() => setOnboarding(false)}>
                  <S.SignInButtonText>{`Let's Go!`}</S.SignInButtonText>
                </S.SignInButton>
              </S.SlideContainer>
            </Swiper>
          ) : (
            <Swiper loop={false} showsPagination={false} scrollEnabled={false}>
              <S.SlideContainer>
                <S.SlideImage source={mailImage} />
                <S.SlideTitle>{`Enter Your Email`}</S.SlideTitle>
                <S.EmailInput autoCapitalize="none" autoCorrect={false} />
                <S.SignInButton
                  onPress={() => {
                    dispatch({ type: 'SIGN_IN' })
                    dispatch({ type: 'TOGGLE_MODAL' })
                  }}>
                  <S.SignInButtonText>{`Submit`}</S.SignInButtonText>
                </S.SignInButton>
              </S.SlideContainer>
              <S.SlideContainer>
                <S.SlideImage source={mailImage} />
                <S.SlideTitle>{`Enter Your Email`}</S.SlideTitle>
                <S.SignInButton>
                  <S.SignInButtonText>{`Enter Email`}</S.SignInButtonText>
                </S.SignInButton>
              </S.SlideContainer>
            </Swiper>
          )}
        </S.BodyContainer>
      </S.ModalContainer>
    </S.Modal>
  )
}

export default Modal
