import React from "react";
import currentUserContext from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(currentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id;
// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `element__delete ${isOwn ? 'element__delete' : 'element__delete_hidden'}`
);

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);
// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = ( 
    `element__like ${isLiked ? 'element__like_active' : 'element__like'}`
    );

    //Обработчик клика по карточке
    function handleClick() {
        onCardClick(card);
      } 

    function handleLikeClick(){
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card._id);
    }

    return (
        <div className="element">
            <button className={cardDeleteButtonClassName}type="button" onClick={handleDeleteClick}></button>
            <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-box">
                        <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                        <p className="element__like-count">{card.likes.length}</p>
                    </div>
            </div>
        </div>
    );
}

export default Card;