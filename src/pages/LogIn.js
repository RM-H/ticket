import icon from '../Icons/icon_brightness_38.png'
import {useState} from 'react'
import axios from "axios";
import {url} from "../services/services";
import {useDispatch} from "react-redux";
import {adduserinfo} from "../Slices/userSlice";
import {useNavigate, useParams} from "react-router-dom";
import {CircularProgress} from '@mui/material'
import {Formik, Form, Field, ErrorMessage} from 'formik'


import Countdown from 'react-countdown'
import * as Yup from "yup";


import CryptoJS from 'crypto-js'

const LogIn = () => {


    const {reference} = useParams()
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState('')
    const [codesent, setCodesent] = useState(false)
    const [loading, setLoading] = useState(false)

    let code


    const getCode = async (d) => {
        let formdata = new FormData();
        formdata.append("phone", d.phone)
        setPhoneNumber(d.phone)
        setLoading(true)

        const response = await axios.post(`${url}/phone`, formdata)
        setLoading(false)
        if (response.data.code === 1) {
            setCodesent(true)
        } else {
            alert(response.data.error)
        }
    }

    const getUserData = async (code, phone) => {
        let formdata = new FormData();
        formdata.append("code", code)
        formdata.append("phone", phone)
        setLoading(true)
        const response = await axios.post(`${url}/code`, formdata)
        setLoading(false)
        if (response.data.code === 1) {
            dispatch(adduserinfo(response.data))
            const Encrypt = CryptoJS.AES.encrypt(JSON.stringify(response.data), 'secret key').toString();
            localStorage.setItem('userinfo', Encrypt)

            if (reference) {
                nav(`/seating/${reference}`)
            } else {
                nav('/')
            }


        } else {
            alert(response.data.error)
        }
    }


    const render = ({seconds, completed}) => {


        if (completed) {
            setCodesent(false)

        } else {
            return (

                <>
                    <div style={{position: 'relative'}}>
                        <CircularProgress color='info' variant='determinate' value={seconds * 1.66}/>
                        <span style={{position: 'absolute', top: '20%', bottom: '50', right: '0', left: '0'}}>
                    {seconds}
                </span>


                    </div>

                </>


            )


        }


    }


    let content = <div className='myautodesktop wdith100'>


                               <span className='pinar clrtwo is-inline-block has-text-white p-3 borderrad1'
                                     style={{boxShadow: '0.3rem 0.3rem black'}}>
                         ورود / ثبت نام
                         </span>

        <Formik initialValues={{phone: ''}} validationSchema={Yup.object().shape({

            phone: Yup.string()
                .matches(/^[0-9]+$/, 'فقط عدد')
                .length(11, 'شماره درست وارد نشده است')
                .required('ضروری')

        })} onSubmit={(values) => getCode(values)}>
            {({errors, touched}) => (
                <Form>

                    <div className='mt-3'>
                        <label className="label yekan is-size-7 ">شماره موبایل</label>
                        <Field className='wdith100 yekan borderrad1 py-5' id="name" name="phone"
                               placeholder=" 09123456789" type='tel' style={{height: '3rem'}}/>
                        <ErrorMessage component='span' className='has-text-danger yekan' name='phone'/>


                    </div>

                    <button type='submit' disabled={loading}

                            className="button has-text-weight-bold borderrad1 clrone pinar my-3 mx-auto wdith100 py-5">

                        دریافت کد


                    </button>


                </Form>


            )}


        </Formik>


        {/*code confirmation*/}


    </div>

    if (codesent) {
        content = <div className='myautodesktop is-flex is-flex-direction-column'>


            <button onClick={() => setCodesent(false)}
                    className='button is-info pinar is-align-self-flex-end borderrad1 shadowone is-block mr-auto my-3'>
                تغییر شماره
            </button>
            <span className='pinar'>

                                یک پیام حاوی کد تایید به شماره


                                <span className='has-text-info'>
                                     {phoneNumber}
                                </span>



                                ارسال شد.





                            </span>


            <input onChange={(e) => code = e.target.value} className="input is-primary my-3 yekan borderrad1 py-5"
                   type="text"
                   placeholder="کد یکبار مصرف را وارد کنید"/>
            <button disabled={loading} onClick={() => getUserData(code, phoneNumber)}
                    className="button has-text-weight-bold borderrad1 clrone pinar my-3 wdith100 py-5">

                ارسال کد
            </button>

            <button disabled className='button wdith100 pinar borderrad1 clrone my-2 pt-3'>

                <Countdown date={Date.now() + 60000} renderer={render}/>

            </button>


        </div>

    }


    return (


        <>

            <div className='p-2' style={{
                width: '100vw',
                height: '100vh'


            }}>


                <div className='columns is-multiline  mx-auto my-auto containerwidth  ' style={{height: '100%'}}>


                    <div
                        className='column mx-0 is-12-mobile is-4-desktop  is-flex is-flex-direction-column  is-align-items-center  loginborderblack'
                        style={{height: '100%'}}
                    >


                        <div className='  is-hidden-desktop mb-3 has-text-centered'
                             style={{justifySelf: 'flex-start '}}>


                            <h1 onClick={() => nav('/')} className='pinar clronetext is-size-3'>
                                تیکت آنلاین
                            </h1>
                            <h2 className='pinar is-size-3'>
                                مرکز خرید بلیط برنامه های استـان آذربایجــان غربــی
                            </h2>


                        </div>


                        {
                            content
                        }


                    </div>


                    <div
                        className='column mx-0 is-12-mobile is-8-desktop loginborderblack is-flex is-align-items-center is-flex-direction-column pt-6 is-hidden-mobile '
                        style={{
                            backgroundImage: 'url(/images/login.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '100%'
                        }}>

                        <img src={icon} alt="icon"
                             style={{width: '30px', height: '30px', transform: 'translateX(6rem)'}}/>

                        <h1 onClick={() => nav('/')} className='pinar clronetext is-size-3'>
                            تیکت آنلاین
                        </h1>
                        <h2 className='pinar is-size-3 has-text-white'>
                            مرکز خرید بلیط برنامه های استـان آذربایجــان غربــی
                        </h2>

                    </div>


                </div>


            </div>


        </>
    )
}
export default LogIn;