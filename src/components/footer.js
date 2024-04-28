import {AnimatedType} from '../components'

import {
    TheaterComedy,
    NestCamWiredStand,
    MusicNote,
    Phone,
    LocationOn,
    WhatsApp,
    Telegram,
    Instagram,
    CalendarMonthOutlined
} from '@mui/icons-material'
import {Tooltip} from '@mui/material'
import {useSelector} from "react-redux";
import {infoselector} from "../Slices/ticketslice";
import {Link} from 'react-router-dom'


const Footer = () => {
    const dataneeded = useSelector(infoselector)
    const status = useSelector((state) => (state.ticket.status))

    return (
        <>
            <footer
                className='clrthree smallwidth is-flex is-flex-direction-column is-justify-content-center is-align-items-center  '
                style={{width: '100%', marginTop: '10rem'}}>
                <div style={{transform: 'translateY(-10rem)'}}>


                    <div className='columns  mx-0  pt-6 navpadend150 navpadstart150 '>


                        <div className='column is-12 clrtwo borderrad2 shadowtwo'>
                            <div className='columns p-4 is-flex '>

                                <div
                                    className='column is-12-mobile is-8-desktop is-flex is-flex-direction-column is-align-items-start is-justify-content-center'>
                                    <h4 className='pinar is-size-4 has-text-white has-text-weight-bold my-3 has-text-centered'>
                                        از این به بعد بهترین صندلی <AnimatedType/> برای توست!
                                    </h4>

                                    <article className='yekan justify has-text-white my-3'>
                                        {
                                            status === 'done' ? dataneeded.footer_blue : '...'
                                        }

                                    </article>





                                </div>

                                <div className='column is-hidden-touch is-4-desktop' style={{height: '14rem'}}>
                                    <img draggable={false} src='/images/logo-vertical.svg' alt="coupon"
                                         style={{transform: 'translateY(-5rem) '}}/>


                                </div>
                            </div>


                        </div>


                    </div>

                </div>


                <div className='containerwidth'>


                    <div className='columns is-flex  is-multiline m-0   navpadend150 navpadstart150 '>

                        <div className='column is-12-mobile is-4-desktop'>
                            <h5 className='pinar has-text-weight-bold is-size-5 has-text-white mb-3'>تیکت آنلاین</h5>
                            <article className='yekan has-text-white is-size-6 mb-1' style={{textAlign: "justify"}}>
                                {
                                    status === "done" ? dataneeded.footer_black : '...'
                                }
                            </article>




                            {/*footer images*/}
                         <div className='is-flex is-justify-content-flex-start'>

                             <a
                                 target="_blank"
                                 href="https://trustseal.enamad.ir/?id=483768&Code=AkTTB3TQGvPPj0ZfNEUgS6PjG3HYUUZs"
                                 style={{ width:'50%' , marginTop:'0.5rem'}}
                             >
                                 <img
                                     referrerPolicy="origin"
                                     src="https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777"
                                     alt=""
                                     style={{ cursor: "pointer" , backgroundColor:'white' , borderRadius:'0.3rem'   }}
                                     code="AkTTB3TQGvPPj0ZfNEUgS6PjG3HYUUZs"
                                 />
                             </a>

                             <img

                                 src="/images/logo-vertical.svg"
                                 alt=""
                                 className='is-hidden-desktop'
                                 style={{  borderRadius:'0.3rem' , width:'40%'  }}

                             />


                         </div>




                        </div>

                        <div className='column is-6-mobile is-2-desktop '>
                            <h5 className='pinar has-text-weight-bold is-size-5 has-text-white mb-3'>خریـد بلیط</h5>
                            <aside className='menu'>
                                <ul className=" yekan ">
                                    <li className='my-2'><Link to={'/concerts'}
                                              className='clrsixtext footerhover '><MusicNote/> کنسرت</Link></li>
                                    <li className='my-2'><Link to={'/conference'}
                                              className='clrsixtext footerhover '><NestCamWiredStand/> همایش</Link>
                                    </li>
                                    <li className='my-2'><Link to={'/theatre'}
                                              className='clrsixtext footerhover '><TheaterComedy/> تئاتــر</Link>
                                    </li>
                                    <li className='my-2'><Link to={'/live'}
                                              className='clrsixtext footerhover '><CalendarMonthOutlined/> آرشیو ویدیوها</Link>
                                    </li>
                                </ul>

                            </aside>
                        </div>

                        <div className='column is-6-mobile is-2-desktop '>
                            <h5 className='pinar has-text-weight-bold is-size-5 has-text-white mb-3'>لینک های سریع</h5>

                            <aside className='menu'>
                                <ul className=" yekan ">
                                    <li className='my-4'><Link to={'/inquiry'} className='clrsixtext footerhover my-1 '> پیگیری
                                        خرید</Link></li>

                                    <li className='my-4'><Link to={'/contact'} className='clrsixtext footerhover my-1 '>
                                       ارتباط با ما
                                    </Link></li>


                                </ul>

                            </aside>
                        </div>

                        <div className='column is-12-mobile is-4-desktop'>
                            <h5 className='pinar has-text-weight-bold is-size-5 has-text-white mb-3'>ارتباط با مــا</h5>

                            <aside className='menu'>
                                <ul className=" yekan ">
                                    <li><a className='clrsixtext footerhover'> <Phone/>
                                        {
                                            status === "done" ? dataneeded.phone : '...'
                                        }
                                    </a></li>
                                    <li><a className='clrsixtext footerhover is-size-6'><LocationOn/>
                                        {
                                            status === 'done' ? dataneeded.address : '...'
                                        }

                                    </a></li>

                                </ul>

                            </aside>
                        </div>

                        <div className='column m-0 is-12 has-text-grey'>
                            <p className='yekan is-inline-block '>
                                تمامی حقوق مادی و معنوی این وب سایت


                                متعلق


                                به بیلیتیم می باشد
                                <Tooltip title='


                            < Coded By : Ramin Hasani />






                            '
                                >

                                        .


                                </Tooltip>
                            </p>

                            <div className='is-inline-block has-text-centered-mobile has-text-white' style={{float: 'left'}}>
                                <WhatsApp className='footerhover mx-2'/>
                                <Telegram className='footerhover mx-2'/>
                                <Instagram className='footerhover mx-2'/>
                            </div>

                        </div>


                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer;