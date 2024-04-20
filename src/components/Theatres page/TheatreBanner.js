import icon from "../../Icons/icon_brightness_38.png";
import {useNavigate} from 'react-router-dom'

const TheatreBanner = () => {
    const nav = useNavigate()
    return (
        <>
            <div className="my-3 px-6 column is-12 is-flex is-align-items-center concertsheight" style={{
                backgroundImage: 'url(./images/theathre.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'

            }}>

                <div className="pinar  has-text-weight-bold is-hidden-mobile">
                    <img alt='icon' src={icon} style={{transform: 'translateX(2rem) translateY(1rem)'}}/>
                    <h1 className='is-size-3-desktop'>تئاتر </h1>
                    <span className='is-flex my-3 is-size-5'>
            <p style={{cursor: 'pointer'}} className='mx-2' onClick={() => nav('/')}> خانه</p>
            <p>/</p>
            <p className='mx-2'>تئاتر</p>
            </span>
                </div>
            </div>


        </>


    )
}
export default TheatreBanner