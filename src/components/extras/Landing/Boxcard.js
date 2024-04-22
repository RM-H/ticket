// <motion.div animate={{opacity: 1, x: [-300, 0,], y: 16.18, rotate: 360, scale: [2, 1]}} transition={{duration: 0.693}}
//             className='card p-3 mx-auto is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-end  backgroundadj borderradtopleft '
//             style={{width: '20rem', height: '20rem', backgroundImage: `url(${image})`}}>

import Counter from "./Counter";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


const BoxCard = ({id, singer, time, location, statusCode, ts, image, city}) => {


    let content
    if (statusCode === 0) {
        content = (

            <button disabled className='button is-danger mx-auto clrsix pinar noborder wdith100 concertcardbutton '
                    style={{borderRadius: '1.3rem'}}>
                متاسفانه تمام شد.
            </button>
        )
    } else if (statusCode === 2) {
        content = (<Counter timestamp={ts}/>)
    } else {
        content = <Link to={`/schedule/${id}`}>

            <button

                className='button is-align-self-flex-end mx-auto clrsix pinar noborder wdith100 concertcardbutton has-text-weight-bold '
                style={{borderRadius: '1.3rem'}}>
                خرید بلیط
            </button>
        </Link>
    }


    return (
        <>

            <motion.div animate={{opacity: 1, x: [-800, 0,], y: [-500,0], rotate: 360, scale: [2, 1]}}
                        transition={{duration: 0.693}} className='column is-12-mobile is-10-tablet  is-5-desktop'
                        variants={{
                            hidden: {scale: 0},
                            visible: {scale: 1, opacity: 1}
                        }}>
                <div
                    className='card px-1 mx-auto is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-end  is-align-content-center  borderrad1  backgroundadj  '
                    style={{height: '24rem', backgroundImage: `url(${image})`}}>


                    {/*soldout banner*/}

                    {
                        statusCode === 0 &&
                        (
                            <div
                                className='is-flex is-justify-content-center is-align-items-center cardbackground wdith100'
                                style={{height: '40%'}}>
                                <p className='pinar textred is-size-3 has-text-weight-bold '>
                                    فروخته شد
                                    <span className='clronetext'>
                                          :(
                                      </span>
                                </p>
                            </div>
                        )


                    }


                    <div
                        className='content p-4  has-text-white  mr-1 mb-3 is-align-self-flex-end cardbackground cardboxborder mx-auto  '
                        style={{width: '90%'}}>


                        <p className='pinar has-text-white is-size-4 mb-1 '>
                            {singer}

                            {statusCode === 2 && (
                                <span className='clrtwo borderrad1 yekan is-size-7 ml-1 p-1 my-auto'
                                      style={{float: 'left'}}>
                                  به زودی
                              </span>
                            )}
                        </p>
                        <span className='yekan is-block my-2'>
                      <i className="bi bi-geo-alt ml-1"></i>
                            {location}
                            -
                            <span>
                                {city}
                            </span>

                  </span>

                        <span className='yekan is-block my-2 '>
                      <i className="bi bi-calendar2-week ml-1"></i>
                            {time}
                  </span>


                        {/*Button sold or unsold*/}

                        {content}


                    </div>


                </div>

            </motion.div>


        </>
    )
}

export default BoxCard;