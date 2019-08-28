import React from 'react'
import Swiper from 'react-native-swiper'
import neighborhoodImage from 'assets/images/neighborhood.png'
import neighborsImage from 'assets/images/neighbors.png'
import privacyImage from 'assets/images/privacy.png'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import * as S from './styles/onboarding.style'

const Onboarding = () => {
  const dispatch = useDispatch()
  return (
    <S.Onboarding>
      {/* Modal Header */}
      <S.HeaderContainer>
        <S.CloseButton onPress={() => dispatch({ type: 'TOGGLE_ONBOARDING_MODAL' })}>
          <Ionicon name="ios-close-circle-outline" size={35} color="#191d38" />
        </S.CloseButton>
      </S.HeaderContainer>
      {/* Modal Body */}
      <S.BodyContainer>
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
            <S.SignInButton onPress={() => dispatch({ type: 'TOGGLE_ONBOARDING_MODAL' })}>
              <S.SignInButtonText>{`Okay, got it!`}</S.SignInButtonText>
            </S.SignInButton>
          </S.SlideContainer>
        </Swiper>
      </S.BodyContainer>
    </S.Onboarding>
  )
}

export default Onboarding
