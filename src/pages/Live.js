import {Futurelives, LiveArchived} from '../components'
import icon from "../Icons/icon_brightness_38.png";
import {useEffect} from "react";


const Live = () => {
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
                <section>
                    <div className='columns m-0  is-multiline navpadend150 navpadstart150 padtopmobile'>


                        <div className='column is-12'>
                            <img src={icon} alt="icon" style={{transform: 'translateY(-0.3rem) translateX(1.6rem)'}}
                            />
                            <h2 className='pinar is-size-4 has-text-weight-bold'>
                                برنامه های آینده
                            </h2>
                        </div>


                        <Futurelives/>


                        <div className='column is-12'>
                            <img src={icon} alt="icon" style={{transform: 'translateY(-0.3rem) translateX(1.6rem)'}}
                            />
                            <h3 className='pinar is-size-4 has-text-weight-bold'>
                                آرشیو برنامه های پخش شده
                            </h3>
                        </div>

                        <LiveArchived/>


                    </div>


                </section>


            </main>


        </>
    )
}
export default Live;