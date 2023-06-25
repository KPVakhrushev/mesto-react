import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditAvatarPopup(props){
  const avatarRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState('');


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({...currentUser, avatar: avatarRef.current.value});
  }
  React.useEffect(() => {
    if(currentUser.avatar) setAvatar(currentUser.avatar);
  }, [currentUser]);
  return (
    <PopupWithForm name="avatar" title="Обновить аватар"  submitTitle="Сохранить" {...props} onSubmit={handleSubmit}>
      <input className="popup__text-input" name="avatar"  id="input-avatar-src"  placeholder="Ссылка на картинку аватара" type="url" required  ref={avatarRef} value={avatar}  onChange={(e)=>setAvatar(e.target.value)}/>
      <span className="input-avatar-src-error popup__error"></span>
    </PopupWithForm>
  )
}
export default EditAvatarPopup;
