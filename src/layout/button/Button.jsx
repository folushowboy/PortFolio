import style from './Button.module.css'
const Button = ({text, disable})=> {
    return(
      <>
      <a href="https://wa.me/+2349077867875" target='_blank'><button className={style.btn}>{text}</button></a>
      </>
    )
}
export default Button