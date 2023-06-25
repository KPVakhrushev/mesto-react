import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props){
  const [name, setName]  = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name, link });
  }
  return (
    <PopupWithForm name="add-card" title="Новое место"  submitTitle="Создать"  onSubmit={handleSubmit} {...props} >
      <input className="popup__text-input" name="name" id="input-card-name" placeholder="Название" type="text"  minLength="2" maxLength="30" required  value={name} onChange={(e)=>setName(e.target.value)}/>
      <span  className="input-card-name-error popup__error"></span>
      <input className="popup__text-input" name="link"  id="input-card-src"  placeholder="Ссылка на картинку" type="url" required  value={link} onChange={(e)=>setLink(e.target.value)}/>
      <span  className="input-card-src-error popup__error"></span>
    </PopupWithForm>
  )
}
export default AddPlacePopup;
