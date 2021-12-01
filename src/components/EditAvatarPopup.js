import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({onClose, isOpened, onPopupClick, onUpdateAvatar}) {
  const inputRef= React.useRef()

    function handleSubmit(e) {
        e.preventDefault();
        
        onUpdateAvatar({
          avatar: inputRef.current.value,
        });
        inputRef.current.value = ''
      }

    return (
    <PopupWithForm name="avatar" title="Обновить аватар" onSubmit={handleSubmit} onPopupClick={onPopupClick} onClose={onClose} isOpened={isOpened}>
        <label className="popup__form-field">   
            <input ref={inputRef} type="url" id="avatar" name="avatarUrl" placeholder="Ссылка" className="popup__input popup__input_text_avatar" required /> 
            <span id="avatar-error" className="error"></span>
        </label>
    </PopupWithForm>
    );
}

export default EditAvatarPopup;