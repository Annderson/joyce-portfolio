import Menu from '@/presentation/components/Menu'
import TextIconGrid from '@/presentation/components/TextIconGrid'
import { Colors } from '@/styles'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { HiOutlineMail } from 'react-icons/hi'

import background from '@assets/img/contact4.jpeg'

import * as S from './styles'

const Contact = () => (
  <Menu color={Colors.brown35}>
    <S.Container>
      {<S.BackgroundImg src={background} />}
      <S.CardContact>
        <S.InfoContainer>
          <S.SubTitle>
            Para duvidas, trabalhos, sugestões, entre em contato ou envie uma
            mensagem, assim que possivel irei retornar
          </S.SubTitle>

          <div>
            <S.ContentContainer>
              <TextIconGrid Icon={IoLogoWhatsapp} text="Celular / WhatsApp:" />
              <S.TextInfo>19 97171-9759</S.TextInfo>
            </S.ContentContainer>
            <S.ContentContainer>
              <TextIconGrid Icon={HiOutlineMail} text="E-mail:" />
              <S.TextInfo>joycepontes.career@gmail.com</S.TextInfo>
            </S.ContentContainer>
          </div>
        </S.InfoContainer>
        <S.FormContainer>
          <S.SubTitle>{'Envie uma mensagem'.toUpperCase()}</S.SubTitle>
          <div>
            <S.Input placeholder="Nome completo" />
            <S.Input placeholder="Celular / WhatsApp" />
            <S.Input placeholder="E-mail" />
            <S.Textarea placeholder="Mensagem" />
          </div>
          <S.SendButton>ENVIAR</S.SendButton>
        </S.FormContainer>
      </S.CardContact>
    </S.Container>
  </Menu>
)

export default Contact
