import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    //Стейты состояния модалок, для открытия и закрытия
    const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false);
    const [isCreatePopupOpened, setIsCreatePopupOpened] = React.useState(false);
    const [isAvatarPopupOpened, setIsAvatarPopupOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleCardClick(card){
        setSelectedCard(card)
    }

    //Функционал закрытия модалок на ESC
    function closeAllPopups() {
        setIsProfilePopupOpened(false);
        setIsCreatePopupOpened(false);
        setIsAvatarPopupOpened(false);
        setSelectedCard(null);
    }

    
    //Закрытие модалки на ESC
    React.useEffect(() => {
        if (isProfilePopupOpened || isCreatePopupOpened || isAvatarPopupOpened) {
    
          function handleEsc(event) {
            if (event.key === 'Escape') {
              closeAllPopups()
            }
          }
    
          document.addEventListener("keydown", handleEsc)
    
          return () => {
            document.removeEventListener("keydown", handleEsc)
          }
        }
      }, [isProfilePopupOpened, isCreatePopupOpened, isAvatarPopupOpened])
    
      //Закрытие модалки кликом на оверлей
      function handlePopupClick(event) {
        if (event.target.classList.contains("popup")) {
          closeAllPopups()
        }
      }

    //Отрисовка приложения
    return (
    <div className="page">
        <Header />

        <Main 
            handleEditAvatarClick={ () =>
                setIsAvatarPopupOpened(true)
            }
            handleEditProfileClick={ () =>
                setIsProfilePopupOpened(true)
            }
            handleAddPlaceClick={ () =>
                setIsCreatePopupOpened(true)
            }
            onCardClick={ 
                handleCardClick}
        />
        <Footer />

        <PopupWithForm name="profile" title="Редактировать профиль" onPopupClick={handlePopupClick} onClose={closeAllPopups} isOpened={isProfilePopupOpened}>
            <label className="popup__form-field">
                <input type="text" id="name" value="" name="name" placeholder="Имя" className="popup__input popup__input_text_name" required minLength="2" maxLength="40" />
                <span id="name-error" className="error"></span>
            </label> 
            <label className="popup__form-field">   
                <input type="text" id="job" value="" name="about" placeholder="Вид деятельности" className="popup__input popup__input_text_job" required minLength="2" maxLength="200" />
                <span id="job-error" className="error"></span>
            </label> 
        </PopupWithForm>

        <PopupWithForm name="create" title="Новое Место" onPopupClick={handlePopupClick} onClose={closeAllPopups} isOpened={isCreatePopupOpened}>
            <label className="popup__form-field">
                <input type="text" id="place" placeholder="Название" name="cardName" className="popup__input popup__input_text_place" minLength="2" maxLength="30" required />
                 <span id="place-error" className="error"></span>
            </label>
            <label className="popup__form-field">
                <input type="url" id="link" placeholder="Ссылка" name="cardUrl" className="popup__input popup__input_text_url" required />
                <span id="link-error" className="error"></span>
            </label>
        </PopupWithForm>
        
       <PopupWithForm name="avatar" title="Обновить аватар" onPopupClick={handlePopupClick} onClose={closeAllPopups} isOpened={isAvatarPopupOpened}>
       <    label className="popup__form-field">   
                <input type="url" id="avatar" value="" name="avatarUrl" placeholder="Ссылка" className="popup__input popup__input_text_avatar" required /> 
                <span id="avatar-error" className="error"></span>
            </label>
       </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
       
        <div className="popup popup_delete">
            <button className="popup__close popup__close_delete" type="button"></button>
            <div className="popup__container popup__container_delete">
                <h2 className="popup__title">Вы уверены?</h2>
                <form className="popup__form"  name="delete">
                    <button type="submit" className="popup__submit popup__submit_delete popup__submit_valid">Да</button>
                </form> 
            </div>
        </div>
    </div>
  );
}

export default App;