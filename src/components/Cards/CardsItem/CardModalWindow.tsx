import React, { useEffect } from 'react';
import style from "./CardsItem.module.css";

type PropsType = {
    url : string | undefined
    onClose : () => void
    visible : boolean
}

const CardModalWindow : React.FC<PropsType> = ({url, onClose, visible}) => {
    useEffect(()=>{
        const onKeydown = ({key} : KeyboardEvent) => {
            switch(key){
                case 'Escape':
                    onClose();
                    break;
            }
        }

        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown)
    }, [onClose])

    if (!visible) return null
    return <div className={style.modal} onClick={onClose}>
    <div className={style.modalContent} onClick={e => e.stopPropagation()}>
      <div className={style.modalBody}>
        <img src={url} alt="" />
      </div>
    </div>
  </div>
}

export default CardModalWindow