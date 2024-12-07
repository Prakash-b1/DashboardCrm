import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, isClosable = true, children }) => {

    const [isVis, setIsVis] = useState(show);

    useEffect(() => {
        setIsVis(show);
    }, [show]);


    if (!isVis) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {/* {isClosable && !onClose && <span className={styles.modalClose} onClick={() => { setIsVis(false) }}>&times;</span>} */}
                {/* {isClosable && onClose && <span className={styles.modalClose} onClick={onClose}>&times;</span>} */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
