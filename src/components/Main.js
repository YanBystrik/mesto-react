import React from "react";
import CurrentUserContext  from "../contexts/CurrentUserContext";
import Card from "./Card";


function Main({ 
    handleEditAvatarClick, 
    handleEditProfileClick, 
    handleAddPlaceClick, 
    onCardClick, 
    cards, 
    onCardLike, 
    onCardDelete 
}) {
    const currentUser = React.useContext(CurrentUserContext);
    
    return(
    <>
        <section className="profile">
            <div className="profile__content">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                    <button className="profile__avatar-edit" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                    <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                </div>
            </div>
            <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements">
            {
                cards.map(card => 
                <Card 
                    key={card._id} 
                    card={card} 
                    onCardClick={onCardClick} 
                    onCardLike={onCardLike} 
                    onCardDelete={onCardDelete} 
                />)
            }
        </section>
    </>  
    );
}

export default Main;