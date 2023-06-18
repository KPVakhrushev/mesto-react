
function ImagePopup(props){
  //console.log(counter++);
  return (
    <div className={`popup popup_blackout_strong popup_content_image ${props.card?'popup_opened':''}`}>
      <div className="popup__container popup__container_content_image">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <img className="popup__image" alt="" src={props.card.link}/>
        <h2  className="popup__image-title"></h2>
      </div>
    </div>
  )
}
export default ImagePopup;
