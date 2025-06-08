import style from './Projectcard.module.css'


const Projectcard = ({ img, title, tagOne, tagTwo, tagThree, link }) => {
    return (
        <div className={style.project_card}>
            <a href={link} target='_blank'>
                <img src={img} alt={title} />
                <h3>{title}</h3>
            </a>

            <div className={style.Project_tags}>
                <p>{tagOne}</p>
                <p>{tagTwo}</p>
                <p>{tagThree}</p>
            </div>
        </div>
    )
}
export default Projectcard