import {Dispatch, FC, SetStateAction, useCallback, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { ModalBackground, ModalCloseButton, ModalContent } from './Modal.style';

export const Modal: FC<IModalProps> = ({children, isOpen, onClose}) => {
    const hideModal = useCallback(() => {
        onClose(false);
    }, [onClose])

    const hideModalViaEscapeButton = useCallback(
        (e: KeyboardEvent) => {
          if (e.key === 'Escape') hideModal()
        },
        [hideModal],
      )

    useEffect(() => {
        document.addEventListener('keydown', hideModalViaEscapeButton)
    return () => {
        document.removeEventListener('keydown', hideModalViaEscapeButton)
    }
  }, [hideModalViaEscapeButton])
  
    return ReactDOM.createPortal(
        <ModalBackground onClick={hideModal} isOpen={isOpen}>
            <ModalContent isOpen={isOpen} onClick={(event) => event.stopPropagation()}>
                <ModalCloseButton onClick={hideModal}>✕</ModalCloseButton>
                {
                    children
                }
            </ModalContent>
        </ModalBackground>
        , document.getElementById('portal') as Element)
    ;
}

export interface IModalProps {
    children: React.ReactNode,
    isOpen: boolean,
    onClose: Dispatch<SetStateAction<boolean>>;
}