import icon from '../../Icons/icon_brightness_38.png'
import {motion} from 'framer-motion'
import {baseurl} from '../../services/services'


import {useSelector} from 'react-redux'
import {concertSelector} from '../../Slices/ticketslice'
import {ConcertCard} from '../index'
import {LinearProgress} from "@mui/material";


const Midbox = () => {

    const status=useSelector(state => state.ticket.status);
    const dataNeeded=useSelector(concertSelector)



    // changing the city shown based on the city selected by the user
    const choice = JSON.parse(localStorage.getItem('city'));



    let content
    if (status === 'done') {



        if (dataNeeded.length > 0) {

            content = dataNeeded.map((item, index) => (


                <ConcertCard key={index} image={`${baseurl}/${item.concerts.img}`} id={item.concerts.id}
                             singer={item.concerts.title}
                             time={item.concerts.date_text}
                             location={item.locations_view.name} statusCode={item.concerts.active}
                             ts={item.concerts.date} remain={item.concerts.remain} city={item.cities.name}/>

            ))
        } else {
            content = <div className='column is-12'>
                <p className='yekan has-text-centered is-size-4-desktop'>
                    در شهر انتخاب شده برنامه ای جهت نمایش وجود ندارد.
                </p>
            </div>
        }


    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }

    return (
        <>
            <section>


                <div className='columns mx-0  is-multiline navpadend150 navpadstart150 my-6 '>
                    <div className='column is-12'>
                        <motion.img src={icon} alt="icon" style={{transform: 'translateY(1rem) translateX(1.6rem)'}}
                                    initial={{opacity: 0}} animate={{opacity: 1, x: [200, 0]}}
                                    transition={{duration: 0.8}}/>
                        <h2 className='is-size-4-mobile is-size-4-desktop pinar has-text-weight-bold mb-6'>

                             برنامه های پیش رو در
                            {
                                choice ?
                                    <span className='mx-1'>


                                        {choice.name}


                                    </span>

                                    : <span className='mx-1'>
                                    کل شهر ها
                                    </span>
                            }
                        </h2>

                        <div className='columns'>
                            <div className='column  is-12 '>
                                <motion.div className='columns is-flex is-multiline' initial='hidden' animate='visible'
                                            variants={{
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: {
                                                        delayChildren: 0.2,
                                                        staggerChildren: 0.3,
                                                        duration: 0.963

                                                    },
                                                },
                                                hidden: {
                                                    opacity: 1, scale: 0

                                                },
                                            }}>


                                    {content}


                                </motion.div>


                            </div>
                        </div>


                    </div>


                </div>
            </section>

        </>
    )
}
export default Midbox