import icon from '../../Icons/icon_brightness_38.png'
import {useNavigate} from 'react-router-dom'

const ConcertInfo = () => {
    const nav=useNavigate();




    const conhome = "خانه"
    const con = "کنسرت"
    return (
        <div className="my-3 px-6 column is-12 is-flex is-align-items-center concertsheight" style={{backgroundImage:'url(./images/archive.png)' , backgroundSize:'cover' , backgroundRepeat:'no-repeat' }}>

        <div className="pinar has-text-weight-bold is-hidden-mobile">
            <img alt='banner' src={icon} style={{transform:'translateX(2rem) translateY(1rem)'}}/>
            <h1 className='is-size-3-desktop'>کنسرت ها</h1>
            <span className='is-flex my-3 is-size-5'>
            <p style={{cursor:'pointer'}} className='mx-2' onClick={()=>nav('/')} > {conhome}</p>
            <p>/</p>
            <p className='mx-2'>{con}</p>
            </span>
        </div>
        </div>
    )
}

export default ConcertInfo;