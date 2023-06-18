function PopupWithForm (props){
  return (
    <div className={`popup popup_content_${props.name} ${props.isOpen?'popup_opened':''}`}>
      <div className="popup__container popup__container_content_form">
        <button className="popup__close-button" type="button" title="Закрыть форму без сохранения данных" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" id={`form-${props.name}`} name={props.name} action="" method="post">
          {props.children}
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm;
