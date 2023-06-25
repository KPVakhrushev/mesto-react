import React from 'react';
function PopupWithForm (props){
  const [isFormDisabled, setFormDisabled] = React.useState(props.disabled);
  return (
    <div className={`popup popup_content_${props.name} ${props.isOpen?'popup_opened':''}`}>
      <div className="popup__container popup__container_content_form">
        <button className="popup__close-button" type="button" title="Закрыть форму без сохранения данных" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" id={`form-${props.name}`} name={props.name} action="" method="post" onSubmit={props.onSubmit?props.onSubmit:()=>{}}>
          {props.children}
          <button type="submit" className={`popup__save-button ${isFormDisabled&&'popup__save-button_disabled'}`} title={props.submitTitle} disabled={isFormDisabled}>{props.submitTitle}</button>
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm;
