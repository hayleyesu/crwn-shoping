import './button.styles.scss'
const Button_type_classes={
    google:'google-sign-in',
    inverted:'inverted'
}



const Button =({children,button_types}, ...otherProps)=>{
    return(
        <button className={`button-container ${Button_type_classes[button_types]}`} {...otherProps}>
            {children}
        </button>
    )
}
export default Button;