import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props){
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({...currentUser, name, about});
  }
  React.useEffect(() => {
    if(currentUser.name)  setName(currentUser.name);
    if(currentUser.about) setAbout(currentUser.about);

  }, [currentUser]);
  return (
  <PopupWithForm name="edit-profile" title='Редактировать профиль' submitTitle="Сохранить" onSubmit={handleSubmit} {...props} >
    <input className="popup__text-input" name="name"    id="input-profile-title"    type="text" minLength="2" maxLength="40" required placeholder="Введите ваше имя" value={name} onChange={(e)=>setName(e.target.value)}/>
    <span className="input-profile-title-error popup__error"></span>

    <input className="popup__text-input" name="about" id="input-profile-subtitle" type="text" minLength="2" maxLength="200" required placeholder="Расскажите немного о себе"  value={about}  onChange={(e)=>setAbout(e.target.value)}/>
    <span className="input-profile-subtitle-error popup__error"></span>
  </PopupWithForm>
  )
}
export default EditProfilePopup;
