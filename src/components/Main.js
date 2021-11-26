import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, onCardClick }) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar,setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    //Запрос к АПИ для получения инфы о пользователе
    React.useEffect( () => {
        api.getUserInfo()
        .then(data =>{
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
        .catch(err => {
            console.error(err);
        })
    })

    React.useEffect( () => {
        api.getCards()
        .then(data => {
            setCards(data)
        })
        .catch(err => {
            console.error(err);
        });
    }, []);

    return(
    <>
        <section className="profile">
            <div className="profile__content">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                    <button className="profile__avatar-edit" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__title">{userName}</h1>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                </div>
            </div>
            <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements">
            {
                cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} />)
            }
        </section>
    </>    
    );
}

export default Main;