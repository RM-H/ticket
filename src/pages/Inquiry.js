import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as Yup from "yup";
import {url} from '../services/services'
import axios from "axios";
import {useState} from 'react'
import {CircularProgress} from '@mui/material'
import {NumericFormat} from "react-number-format";
import {baseurl} from '../services/services'
import {Inquirysvg, InquirySeatCard} from '../components'
import {
    FmdGoodOutlined,
    InsertInvitationOutlined,
    ScheduleOutlined,
    EventSeatOutlined,
    LocalAtmOutlined,
    PersonOutline,
    CalendarMonthOutlined,

} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {useEffect} from "react";


const Inquiry = () => {


    // scroll to top when pagae is loaded
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);


    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleinquiry = async (d) => {
        let form = new FormData()
        form.append('refid', d.refid)

        const endpoint = `${url}/pursue`
        setLoading(true)
        const response = await axios.post(endpoint, form)
        if (response.data.code === 1) {

            setData(response.data)
            setLoading(false)
        } else {
            setLoading(false)
            setData(false)
            alert(`${response.data.error} 🤔`)
        }

    }


    // showing spinner or data based on loading state
    let content
    if (loading) {
        content =
            <div className='has-text-centered cardboxborder p-3'>
                <CircularProgress/>
            </div>

    } else {
        if (data) {
            content =
                <>
                    <div className='columns p-3 m-0 is-multiline cardboxborder '>
                        <div className='column is-12 p-3 has-text-centered'>
                            <h2 className='pinar is-size-4-desktop has-text-weight-bold'>
                                {
                                    data.concerts.title
                                }
                            </h2>

                        </div>


                        <div className='column is-12'>

                            <div className='columns m-0'>


                                <div className='is-2'>

                                    <div className='columns m-0 is-multiline'>
                                        <div className='column is-12'>
                                            <img src={`${baseurl}/${data.concerts.img}`} alt=""/>
                                        </div>


                                        <div className='column is-12'>
                                            {
                                                data.reserves.map((item) => (
                                                    <InquirySeatCard key={item.id} seatNumber={item.id}
                                                                     seatPrice={item.price}/>


                                                ))


                                            }


                                        </div>


                                    </div>


                                </div>


                                <div className='column is-10'>

                                    <div className='columns m-0 is-multiline'>

                                        {/*row1*/}
                                        <div className='column is-3-desktop yekan'>
                                            <InsertInvitationOutlined/>

                                            <p>


                                                تاریخ :
                                                {
                                                    data.concerts.date_text
                                                }
                                            </p>

                                        </div>
                                        <div className='column is-3-desktop yekan'>
                                            <FmdGoodOutlined/>
                                            <p>

                                                سالن :
                                                {
                                                    data.locations.name
                                                }
                                            </p>

                                        </div>
                                        <div className='column is-3-desktop yekan'>
                                            <EventSeatOutlined/>
                                            <p>

                                                تعداد صندلی خریداری شده :
                                                {
                                                    data.orders.count
                                                }
                                            </p>

                                        </div>
                                        <div className='column is-3-desktop yekan'>
                                            <LocalAtmOutlined/>
                                            <p>
                                                مبلغ کل پرداختی :

                                                <NumericFormat className='mx-1' displayType='text' thousandSeparator=','
                                                               value={data.orders.amount}/>

                                                تومان
                                            </p>

                                        </div>


                                        {/*row 2*/}
                                        <div className='column is-3-desktop yekan'>
                                            <ScheduleOutlined/>
                                            <p>

                                                ساعت :
                                                {
                                                    new Date(data.sans_id.time_stamp).getHours()
                                                }


                                            </p>

                                        </div>
                                        <div className='column is-3-desktop yekan'>
                                            <PersonOutline/>
                                            <p>

                                                خریداری شده به نام :
                                                {
                                                    data.orders.name
                                                }


                                            </p>

                                        </div>
                                        <div className='column is-3-desktop yekan'>
                                            <CalendarMonthOutlined/>
                                            <p>

                                                تاریخ :
                                                {
                                                    new Date(data.orders.time).toLocaleDateString('fa-IR')

                                                }


                                            </p>

                                        </div>
                                        <div className='column is-3-desktop yekan'>

                                            <Link to={`/print/${data.orders.refid}`} target='_blank'>
                                                <button
                                                    className='button yekan borderrad1 clrone has-text-weight-bold wdith100'>
                                                    چاپ رسید
                                                </button>

                                            </Link>


                                        </div>


                                        {/*row 3*/}
                                        <div className='column is-12 cardboxborder'>
                                            {
                                                <Inquirysvg reservations={data.reserves} svg={data.locations.svg}/>
                                            }


                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>


                    </div>


                </>


        }


    }


    return (
        <>
            <main>
                <div className='columns is-multiline m-0 navpadstart150 navpadend150 padtopmobile'>
                    <div className='column is-12'>
                        <h1 className='yekan is-size-3-desktop'>
                            پیگیری خرید

                        </h1>
                        <div className='is-flex is-flex-direction-column flex-JCS-ACS cardboxborder p-3 mt-4 shadowtwo'>

                            <Formik onSubmit={(values) => handleinquiry(values)} initialValues={{refid: ''}}
                                    validationSchema={Yup.object().shape({

                                        refid: Yup.string()
                                            .matches(/^[0-9]+$/, 'فقط عدد')

                                            .required('ضروری')

                                    })}>
                                {({errors, touched}) => (
                                    <Form className='wdith100 has-text-centered'>

                                        <div className='mt-3  '>
                                            <label className="label yekan is-size-7 my-3  ">لطفا کد پیگیری را وارد
                                                کنید.</label>
                                            <Field className='yekan wdith100 has-text-centered ' id="refid" name="refid"
                                                   placeholder=" 123456789" type='tel' style={{height: '3rem'}} autoComplete="off"/>
                                            <ErrorMessage component='span' className='has-text-danger yekan'
                                                          name='phone'/>


                                        </div>

                                        <button type='submit'

                                                className="button has-text-weight-bold borderrad1 clrone pinar my-3 mx-auto"
                                                style={{outline: 'none'}} disabled={loading}>

                                            پیگیری


                                        </button>


                                    </Form>


                                )}


                            </Formik>


                        </div>


                    </div>


                    {/*content div*/}

                    <div className='column is-12'>
                        {content}
                    </div>
                </div>


            </main>


        </>
    )
}
export default Inquiry;