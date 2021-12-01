import React from "react";

function ImagePopup({ card, onPopupClick, onClose }) {

    return (
        <div className={`popup popup_image ${card && "popup_opened"}`} onClick={onPopupClick}>
            <button className="popup__close popup__close_image" type="button" onClick={onClose}></button>
            <div className="popup__container popup__container_image">
            <img className="popup__viewer popup__viewer_image" src={card ? card.link : ''} alt={card ? card.name : ''} />
                <h2 className="popup__viewer popup__viewer_title">{card ? card.name : ''}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;