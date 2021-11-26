import React from "react";

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
      } 

    return (
        <div className="element">
            <button className="element__delete" type="button"></button>
            <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-box">
                        <button className="element__like" type="button"></button>
                        <p className="element__like-count">{card.likes.length}</p>
                    </div>
            </div>
        </div>
    );
}

export default Card;