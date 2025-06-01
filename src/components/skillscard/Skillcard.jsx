import style from './Skillcard.module.css'
const Skillcard = ({ title, text })=> {
    return(
        <div className={style.skill_card}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
export default Skillcard