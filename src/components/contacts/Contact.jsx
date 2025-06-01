import Button from '../../layout/button/Button'
import style from './Contact.module.css'
const Contact = () => {
    return (
        <section className={style.contact_container}>
            <div className={style.contact_wrapper}>
                <div className={style.contact_content}>
                    <h2>Contact</h2>
                    <p>I would love to hear about your project and
                        how i could be of help to fill the forms,
                        and i will get back to you as soon as possible
                    </p>
                </div>

                 <form action="">
                <label htmlFor="">
                    <input type="text" name="" placeholder='Name'/>
                </label>
                <label htmlFor="">
                    <input type="email" name="" placeholder='Email' />
                </label>
                <label htmlFor="">
                    <textarea name="" id="" rows={4}></textarea>
                </label>
                <div className={style.contact_btn}>
                    <Button text="Contact us"/>
                </div>
             
            </form>
            </div>
           
        </section>

    )
}
export default Contact