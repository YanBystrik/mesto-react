import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onPopupClick, onClose, isOpened, onAddPlace }){
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        
        onAddPlace({
          name: nameRef.current.value,
          link: linkRef.current.value,
        });
        nameRef.current.value = '';
        linkRef.current.value = '';
      }

    return (
        <PopupWithForm name="create" title="Новое Место" onSubmit={handleSubmit} onPopupClick={onPopupClick} onClose={onClose} isOpened={isOpened}>
            <label className="popup__form-field">
                <input ref={nameRef} type="text" id="place" placeholder="Название" name="cardName" className="popup__input popup__input_text_place" minLength="2" maxLength="30" required />
                <span id="place-error" className="error"></span>
            </label>
            <label className="popup__form-field">
                <input ref={linkRef} type="url" id="link" placeholder="Ссылка" name="cardUrl" className="popup__input popup__input_text_url" required />
                <span id="link-error" className="error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;