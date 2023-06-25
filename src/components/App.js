import React from 'react';
import api from '../utils/Api.js';
import Header from  './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from  './AddPlacePopup.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';


function App() {
  const handleError = function(error){
    console.log(error);
  }
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
  const handleCardDelete = function(card){
    api.deleteCard(card._id)
      .then(()=>setCards(cards.filter(item=>item._id!==card._id)))
      .catch(handleError);
  }
  const handleCardLike = function (card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => setCards((items)=> items.map((c) => c._id === card._id ? newCard : c)))
      .catch(handleError);
  }
  const handleUpdateUser = function (user){
    api.updateMe(user).then(()=>{
      setCurrentUser(user);
      closeAllPopups();
    }).catch(handleError);
  }
  const handleAddPlaceSubmit = function(card){
    api.addCard(card).then((newCard)=>{
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch(handleError)
  }

  const [currentUser,            setCurrentUser]          = React.useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen,    setAddPlacePopupOpen]    = React.useState(false);
  const [isEditAvatarPopupOpen,  setEditAvatarPopupOpen]  = React.useState(false);
  const [isImagePopupOpen,       setImagePopupOpen]       = React.useState(false);

  const [selectedCard,           setSelectedCard]         = React.useState({});
  const [cards,                  setCards]                = React.useState([]);

  React.useEffect(()=>{
    api.getMe().then(user=> setCurrentUser(user)).catch(handleError);
    api.getCards().then(cards=>setCards(cards)).catch(handleError);
  }, []);


  return (
  <CurrentUserContext.Provider value={currentUser}>
    <Header />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
      cards={cards}
    />
    <Footer />

    <div className="popups">
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} disabled={false} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup  isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups} disabled={false} onUpdateUser={handleUpdateUser} />
      <AddPlacePopup    isOpen={isAddPlacePopupOpen}    onClose={closeAllPopups} disabled={false} onAddPlace  ={handleAddPlaceSubmit} />

      <PopupWithForm name="confirm" title="Вы уверены?"isOpen={false} submitTitle="Да" disabled={false}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
