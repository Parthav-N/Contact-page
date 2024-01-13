import React from 'react'
import styles from './ContactForm.module.css';
import {Buttons} from 'D:/Full Stack/contact-us-page/src/components/Buttons/Buttons.jsx';
import { MdMessage, MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";


export const ContactForm = () => {
    
    const isClicked = (text) => {
        console.log(text, "is chosen");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Buttons onClick = {() => isClicked("Via Chat")} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" /> } />
                    <Buttons onClick = {() => isClicked("Via Call")} text="VIA CALL" icon={<MdCall fontSize="24px" />} />
                </div>
                <Buttons onClick = {() => isClicked("Via Email")} isOutline={true} text="VIA EMAIL FORM" icon={<IoMail fontSize="24px" />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name='email' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name='text' rows={8} />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'center',
                    }}>
                        <Buttons  type="submit" text="SUBMIT" />
                    </div>
                </form>
                
                
            </div>

            <div className={styles.contact_image}>
                <img src="/images/service.jpg" alt="Service image" />
            </div>
        </section>
    )
}
