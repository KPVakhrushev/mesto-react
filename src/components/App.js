import React from 'react';
import Header from  './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const handleEditAvatarClick = function(){
    setEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = function(){
    setEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = function(){
    setAddPlacePopupOpen(true);
  }
  const closeAllPopups = function(){
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  const handleCardClick = function(card){
    setSelectedCard(card);
  }
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen,    setAddPlacePopupOpen]    = React.useState(false);
  const [isEditAvatarPopupOpen,  setEditAvatarPopupOpen]  = React.useState(false);
  const [selectedCard,           setSelectedCard]         = React.useState({});

  return (
  <>
    <Header />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
    />
    <Footer />

    <div className="popups">
      <PopupWithForm name="edit-profile" title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitTitle="Сохранить" disabled={true}>
        <input className="popup__text-input" name="name"    id="input-profile-title"    type="text" minLength="2" maxLength="40" required placeholder="Введите ваше имя" />
        <span className="input-profile-title-error popup__error"></span>
        <input className="popup__text-input" name="about" id="input-profile-subtitle" type="text" minLength="2" maxLength="200" required placeholder="Расскажите немного о себе" />
        <span className="input-profile-subtitle-error popup__error"></span>

      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen}  onClose={closeAllPopups} submitTitle="Создать" disabled={true}>
        <input className="popup__text-input" name="name" id="input-card-name" placeholder="Название"           type="text"  minLength="2" maxLength="30" required />
        <span className="input-card-name-error popup__error"></span>
        <input className="popup__text-input" name="link"  id="input-card-src"  placeholder="Ссылка на картинку" type="url" required />
        <span className="input-card-src-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups}  submitTitle="Сохранить" disabled={true}>
        <input className="popup__text-input" name="avatar"  id="input-avatar-src"  placeholder="Ссылка на картинку аватара" type="url" required />
        <span className="input-avatar-src-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?"isOpen={false} submitTitle="Да" disabled={false} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  </>
  );
}

export default App;
