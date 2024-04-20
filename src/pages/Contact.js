import icon from "../Icons/icon_brightness_38.png";
import {ContactBoxOne,ContactBoxTwo,ContactMap} from '../components'
import {useEffect} from "react";


const Contact = () => {


    useEffect(() => {
        // scroll to top when pagae is loaded
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);


    return (
        <>
            <main>

                <div className='columns navpadstart150 navpadend150 is-multiline mx-0 padtopmobile'>


                    <div className='column is-12 mt-6'>

                        <img src={icon} alt="icon" style={{transform: 'translateY(1rem) translateX(1.6rem)'}}/>

                        <h1 className='pinar is-size-4-desktop is-size-4-mobile has-text-weight-bold'>
                            ارتباط با ما


                        </h1>

                        <p className='pinar my-3'>

                            جهت ارتباط با مجموعه تیکت آنلاین میتوانید از راه های ارتباطی زیر استفاده کنید.

                        </p>


                    </div>

                    <ContactBoxOne/>
                    <ContactMap/>
                    <ContactBoxTwo/>






                </div>


            </main>


        </>

    )
}
export default Contact;