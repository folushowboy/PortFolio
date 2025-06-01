import Skillcard from "../skillscard/skillcard"
import style from './Skill.module.css'
const Skill = ()=> {
    return(
        <section className={style.skill_container}>
            <Skillcard title='HTML' text='2 Years Expereince'/>
            <Skillcard title='CSS' text='2 Years Expereince'/>
            <Skillcard title='Javascript' text='2 Years Expereince'/>
            <Skillcard title='Accessibility' text='2 Years Expereince'/>
            <Skillcard title='React' text='1 Years Expereince'/>
            <Skillcard title='Sass' text='1 Years Expereince'/>
        </section>
    )
}
export default Skill