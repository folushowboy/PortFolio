import style from './Button.module.css'
const Button = ({text, disable})=> {
    return(
      <>
      <button className={style.btn}>{text}</button>
      </>
    )
}
export default Button