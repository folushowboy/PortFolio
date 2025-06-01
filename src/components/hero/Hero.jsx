import Button from '../../layout/button/Button'
import style from './Hero.module.css'
import hero_image from '../../assets/images/hero_image.svg'
const Hero = () => {
    return (
        <section className={style.hero_container}>
            <div className={style.hero_content}>
                <h1>Nice to meet you! <br />
                <span> I'm Odusina Tolu.</span> 
                </h1>
                <p>Based in Nigeria. 
                   I'm a frontend developer 
                   passionate about accessible 
                   web apps that users love.
                </p>
                <Button text="contact me"/>
            </div>
            <div className={style.hero_image}>
                <img src={hero_image} alt="" /> 
            </div>
        </section>
    )
}
export default Hero