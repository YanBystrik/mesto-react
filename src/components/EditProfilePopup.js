import React  from "react";
import PopupWithForm from "./PopupWithForm";
import currentUserContext from "../contexts/CurrentUserContext";


function EditProfilePopup({ isOpened, onClose, onPopupClick, onUpdateUser}) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(currentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleChangeName(e) {
        setName(e.target.value);
      }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name,
          about: description,
        });
      }

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" onSubmit={handleSubmit} isOpened={isOpened} onClose={onClose} onPopupClick={onPopupClick}>
            <label className="popup__form-field">
                <input type="text" id="name" value={name || ''} onChange={handleChangeName} name="name" placeholder="Имя" className="popup__input popup__input_text_name" required minLength="2" maxLength="40" />
                <span id="name-error" className="error"></span>
            </label> 
            <label className="popup__form-field">   
                <input type="text" id="job" value={description || ''} onChange={handleChangeDescription} name="about" placeholder="Вид деятельности" className="popup__input popup__input_text_job" required minLength="2" maxLength="200" />
                <span id="job-error" className="error"></span>
            </label> 
        </PopupWithForm>
    );
}

export default EditProfilePopup;