import * as S from './styles'
import useModal from './useModal'

interface Props {
  openModal: boolean
  images: string[]
  onClose: () => void
}

const Modal = ({ openModal, images, onClose }: Props) => {
  const { index, open, handleBack, handleForward, onShowOrHide } = useModal({
    openModal,
    images,
    onClose
  })
  return (
    open && (
      <S.Container>
        <S.IconButton onClick={onShowOrHide}>
          <S.CloseIcon />
        </S.IconButton>
        <S.ImgContainer>
          <S.ArrowBack onClick={handleBack} />
          <S.Image src={images[index]} alt="" />
          <S.ArrowForward onClick={handleForward} />
        </S.ImgContainer>
      </S.Container>
    )
  )
}

export default Modal
