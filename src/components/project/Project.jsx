import { ProjectData } from '../../../Data'
import Button from '../../layout/button/Button';
import Projectcard from '../projectcard/Projectcard'
import style from './Project.module.css';
const Project = () => {
    return (
        <section className={style.project_container}>
            <div className={style.project_content}>
                <h2>My Projects</h2>
                <Button text='Contact us'/>
            </div>
            <div className={style.project_card}>
                {ProjectData.map((item, index) => {
                    return (
                        <Projectcard
                            img={item.img}
                            title={item.title}
                            tagOne={item.tagOne}
                            tagTwo={item.tagTwo}
                            tagThree={item.tagThree}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    )
}
export default Project