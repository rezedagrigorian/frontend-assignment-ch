import React, { ReactElement } from 'react';
import { HiX } from 'react-icons/hi';
import styles from './Modal.module.css';

interface IModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactElement[] | ReactElement;
}

const Modal: React.FC<IModalProps> = ({ show = false, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <button type="button" className={styles.modal_bg} aria-label="close" onClick={onClose} />
      <div className={styles.modal_content}>
        <button type="button" onClick={onClose}>
          <HiX />
        </button>
        { children }
      </div>
    </>
  );
};

export default Modal;
