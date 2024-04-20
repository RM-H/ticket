
import {NumericFormat} from 'react-number-format'
import {FmdGoodOutlined,InsertInvitationOutlined,ScheduleOutlined,MoneyOutlined} from '@mui/icons-material'


const BuystepTwoBoxOne = ({time, date, pricerange, place, singer}) => {

    let datecalcultaed = new Date(time).getHours()
    return (
        <>
            <div className='column is-12'>
                <div className='columns'>


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
                                    <li className=' is-flex is-align-items-center my-1'>

                                                 <span className='clrone p-2 borderrad1'>
                                                      <FmdGoodOutlined/>
                                                     </span>

                                        <span className='yekan my-auto mx-3'>
                                            محل اجرا : {place}
                                        </span>


                                    </li>

                                    <li className=' is-flex is-align-items-center my-1'>

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
                            <div className='column  is-6'>

                            <ul>
                                <li className='is-flex is-align-items-center my-1'>
                                              <span className='clrone p-2 borderrad1'>
                                                      <ScheduleOutlined/>
                                                     </span>

                                    <span className='yekan my-auto mx-3'>
                                            ساعت اجرا : {datecalcultaed}
                                        </span>

                                </li>

                                <li className='is-flex is-align-items-center my-1'>
                                       <span className='clrone p-2 borderrad1'>
                                                      <MoneyOutlined/>
                                                     </span>

                                    <span className='yekan my-auto mx-3'>
                                            بها بلیط :


                                            <NumericFormat displayType='text' thousandSeparator=','
                                                           suffix='       تومان  ' value={pricerange[1].price}/>


                                            تا
                                             <NumericFormat displayType='text' thousandSeparator=',' prefix='   '
                                                            suffix='       تومان  ' value={pricerange[0].price}/>


                                        </span>

                                </li>

                            </ul>

                            </div>


                        </div>

                    </div>

                </div>


            </div>


        </>


    )
}
export default BuystepTwoBoxOne;