import style from './Projectcard.module.css'


const Projectcard = ({img, title, tagOne, tagTwo, tagThree})=> {
    return(
        <div className={style.project_card}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className={style.Project_tags}>
                <p>{tagOne}</p>
                <p>{tagTwo}</p>
                <p>{tagThree}</p>
            </div>
        </div>
    )
}
export default Projectcard