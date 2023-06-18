function Card(props){
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <img className="element__image" alt="" src={props.card.link} onClick={handleClick}/>
      <h2 className="element__title">{props.card.name}</h2>
      <button className="element__like" type="button">0</button>
      <button className="element__delete" type="button"></button>
    </li>
  )
}
export default Card;
