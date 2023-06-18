import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props){
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=>{
    api.getMe().then(user=>{
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    });
    api.getCards().then(cards=>setCards(cards));
    return ()=>{};
  }, []);

  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="Аватарка профиля" src={userAvatar} />
          <button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button"  type="button" title="Редактировать данные"  onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button"  type="button" title="Добавить место"  onClick={props.onAddPlace}></button>
      </section>

      <section>
        <ul className="elements">
          {cards.map((card, i)=>(
            <Card card={card} onCardClick={props.onCardClick} key={card._id}/>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
