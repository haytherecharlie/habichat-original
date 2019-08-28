import React, { Fragment } from 'react'
import Onboarding from 'components/Onboarding/Onboarding'
import EmailAndVerification from 'components/EmailAndVerification/EmailAndVerification'
import { useSelector } from 'react-redux'
import * as S from './styles/modal.style'

const Modal = ({}) => {
  const { showOnboardingModal, showSignInModal } = useSelector((s) => s.app)

  return (
    <Fragment>
      <S.Modal animationType="slide" transparent={true} visible={showOnboardingModal}>
        <S.ModalContainer>
          <Onboarding />
        </S.ModalContainer>
      </S.Modal>
      <S.Modal animationType="slide" transparent={true} visible={showSignInModal}>
        <S.ModalContainer>
          <EmailAndVerification />
        </S.ModalContainer>
      </S.Modal>
    </Fragment>
  )
}

export default Modal
