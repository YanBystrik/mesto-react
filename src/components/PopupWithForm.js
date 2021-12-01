import React from "react";

function PopupWithForm({ name, title, buttonTitle = 'Сохранить', isOpened, onPopupClick, onClose, children, onSubmit }) {
    return (
      <div className={`popup popup_${name} ${isOpened ? 'popup_opened' : ''}`} onMouseDown={onPopupClick}>
        <button type="button" className="popup__close" onClick={onClose}></button>
        <div className="popup__container">
          <form className="popup__form" name="???" onSubmit={onSubmit}>
            <h2 className="popup__title">{title}</h2>
            {children}
            <button type="submit" className="popup__submit">{buttonTitle}</button>
          </form>
        </div>
      </div>
    )
  }

export default PopupWithForm;