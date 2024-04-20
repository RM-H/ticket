
import {Map} from '../../components'
import {FmdGoodOutlined,InsertInvitationOutlined,ScheduleOutlined} from '@mui/icons-material'

const BuysteponeBoxOne = ({place, time, date, image, singer, gps}) => {


    return (
        <>

            <div className='column is-12'>

                <div className='columns is-multiline is-flex'>

                    <div className='column is-12-mobile is-2-desktop has-text-centered-mobile'>

                        <img src={image} alt="singer"/>


                    </div>


                    <div className='column is-12-mobile is-10-desktop is-fullheight'>

                        <div className='columns m-0 is-multiline ' style={{height: '100%'}}>
                            <div className='column is-12'>

                                <div className='columns is-multiline'>
                                    {/*box1*/}

                                    <div className='column is-12'>
                                        <h1 className='is-size-4 pinar has-text-weight-bold'>
                                            {singer}
                                        </h1>
                                    </div>
                                    <div className='column is-6'>

                                        <ul>
                                            <li className=' is-flex my-3 is-align-items-center '>

                                                     <span className='clrone p-2 borderrad1'>
                                                      <FmdGoodOutlined/>
                                                     </span>

                                                <span className='yekan my-auto mx-3'>
                                            محل اجرا : {place}
                                              </span>


                                            </li>

                                            <li className=' is-flex mt-3 is-align-items-center '>

                                              <span className='clrone p-2 borderrad1'>
                                                      <InsertInvitationOutlined/>
                                                     </span>

                                                <span className='yekan my-auto mx-3'>
                                            تاریخ اجرا : {date}
                                        </span>


                                            </li>

                                        </ul>


                                    </div>

                                    {/*box2*/}
                                    <div className='column is-6'>

                                        <ul>
                                            <li className='is-flex my-4 is-align-items-center'>
                                               <span className='clrone p-2 borderrad1'>
                                                      <ScheduleOutlined/>
                                                     </span>

                                                <span className='yekan my-auto mx-3'>
                                            ساعت اجرا : {time.map((t,index) => (
                                                    <span key={index} className='tag is-medium mx-1'>
                                                    {t}
                                                </span>
                                                ))}
                                                 </span>

                                            </li>

                                        </ul>

                                    </div>


                                </div>

                            </div>


                            {/*map*/}


                            <div className='column is-12  mt-auto p-0 ' style={{height: '10rem'}}>

                                <Map place={place} gps={gps}/>

                            </div>


                        </div>


                    </div>


                </div>


            </div>


        </>

    )
}
export default BuysteponeBoxOne;