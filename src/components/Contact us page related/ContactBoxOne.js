import {Phone, LocationOn, Share, Telegram, Instagram, WhatsApp} from '@mui/icons-material'
import {useSelector} from "react-redux";
import {infoselector} from "../../Slices/ticketslice";

import {url} from "../../services/services";
import {LinearProgress} from "@mui/material";
import axios from "axios";

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import {toast} from 'react-toastify'
import {useState} from "react";


const ContactBoxOne = () => {


    const dataneeded = useSelector(infoselector)
    const status = useSelector((state) => (state.ticket.status))
    const [sent,setSent] = useState()


    let phone
    let address

    if (status === 'done') {

        phone = dataneeded.phone
        address = dataneeded.address

    } else {
        address = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>;
        phone = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>

    }


    const handlesubmit = async (e) => {


        const form = new FormData();
        form.append("name", e.name);
        form.append("phone", e.phone);
        form.append("text", e.text);


        const response = await axios.post(`${url}/contact`, form)

        if (response.data.code === 1) {

            toast.success('پیام شما با موفقیت ارسال شد.')
            setSent(true)


        } else {
            toast.error(response.data.error)
        }
    }


    return (
        <>
            <div className='column  is-12'>
                <div className='columns is-multiline m-0'>
                    <div className='column is-4-desktop is-12-mobile is-12-tablet cardboxborder shadowtwo borderrad2 is-flex is-align-content-center'>
                        <div className='columns m-0 p-3 is-multiline'>
                            <div className='column is-12'>

                                <h3 className='pinar is-size-6-mobile is-size-5-desktop is-flex is-align-items-center'>

                                      <span
                                          className="has-text-white clrtwo  ml-3 my-auto p-2 borderrad1 is-flex flex-JCS-ACS">
                                   <Phone className=''/>
                                         </span>

                                    شماره تماس
                                </h3>
                                <p className='mt-3'>
                                    <a href={`tel: ${phone}`} className='yekan is-size-5-desktop'>


                                        {
                                            phone
                                        }


                                    </a>
                                </p>


                            </div>

                            <div className='column is-12'>
                                <h3 className='pinar is-size-6-mobile is-size-5-desktop is-flex is-align-items-center'>

                                      <span className="has-text-white clrtwo  ml-3 p-2 borderrad1 is-flex flex-JCS-ACS">
                                   <LocationOn/>
                                         </span>
                                    آدرس


                                </h3>

                                <address className='yekan is-size-6-desktop mt-3' style={{fontStyle: 'normal'}}>
                                    {
                                        <a className='has-text-black' href={`https://www.google.com/maps/@${dataneeded.lat},${dataneeded.lng},15z?entry=ttu}`} target='_blank'>{address}</a>

                                    }
                                </address>


                            </div>

                            <div className='column is-12'>
                                <h3 className='pinar is-size-6-mobile is-size-5-desktop is-flex is-align-items-center'>

                                      <span
                                          className="has-text-white clrtwo p-1 ml-3 p-2 borderrad1 is-flex flex-JCS-ACS">
                                   <Share/>
                                         </span>
                                   شبکه های اجتماعی


                                </h3>
                                <p className='mt-3 '>
                                    <a href={dataneeded.telegram}> <Telegram className='ml-2 scoialhover'/></a>
                                    <a href={dataneeded.instagram}> <Instagram className='mx-2 scoialhover'/></a>
                                    <a href={dataneeded.whatsapp}>  <WhatsApp className='mx-2 scoialhover'/></a>




                                </p>


                            </div>


                        </div>


                    </div>


                    <div className='column is-8-desktop is-12-mobile is-12-tablet shadowtwo borderrad2 clrthree p-5'>


                        <h2 className='pinar is-size-6-mobile is-size-5-desktop has-text-white mt-1'>
                            فرم ارتباط با ما
                        </h2>


                        <div className='columns m-0 p-3 is-multiline ' style={{height: '100%'}}>

                            <Formik initialValues={{
                                name: '',
                                phone: '',
                                text: ''
                            }} onSubmit={(values) => handlesubmit(values)}
                                    validationSchema={Yup.object().shape({
                                        name: Yup.string()
                                            .max(50, 'باید کمتر از 50 کاراکتر باشد')
                                            .required('ضروری'),
                                        phone: Yup.string()
                                            .matches(/^[0-9]+$/, 'فقط عدد')
                                            .length(11, 'شماره درست وارد نشده است')
                                            .required('ضروری'),
                                        text: Yup.string()
                                            .max(200, 'باید کمتر از 200 کاراکتر باشد')
                                            .required('ضروری'),
                                    })}


                            >
                                {({errors, touched}) => (

                                    <Form className='wdith100 columns m-0 is-multiline '>


                                        <div className='column p-1 is-6'>
                                            <label className="label has-text-white yekan is-size-6 ">نام و نام
                                                خانوادگی</label>
                                            <Field
                                                className='wdith100 px-4 has-text-white yekan clrfour noborder borderrad1 is-size-6 has-text-weight-bold'
                                                id="name" name="name"
                                                placeholder=" نام" style={{height: '3rem'}}/>


                                            <ErrorMessage component='span' className='yekan has-text-danger'
                                                          name='name'/>


                                        </div>


                                        <div className='column p-1 is-6'>

                                            <label className="label has-text-white yekan is-size-6">شماره تماس</label>
                                            <Field
                                                className='wdith100 px-4 has-text-white  yekan clrfour noborder borderrad1 is-size-6 has-text-weight-bold '
                                                type='tel' id="phone" name="phone"
                                                placeholder="0912345678" style={{height: '3rem'}}/>
                                            <ErrorMessage component='span' className='has-text-danger yekan'
                                                          name='phone'/>


                                        </div>


                                        <div className='column p-1 is-12'>
                                            <label className="label has-text-white yekan is-size-6">پیغام شما</label>
                                            <Field
                                                id="text"
                                                name="text"
                                                placeholder="متن پیام "
                                                type="text"
                                                as='textarea'
                                                rows='5'
                                                className='wdith100 px-4 has-text-white  yekan clrfour noborder borderrad1 is-size-6 has-text-weight-bold'
                                            />
                                            <ErrorMessage component='span' className='has-text-danger yekan'
                                                          name='text'/>


                                        </div>


                                        <div className='mb-3 has-text-centered'>

                                            {

                                                sent ? <p className='clronetext yekan has-text-centered' > پیام شما دریافت شد !</p> : <button
                                                    className='button clrone pinar borderrad1 mx-auto mt-1 has-text-weight-bold'
                                                    type="submit">ارسال پیام
                                                </button>


                                            }

                                        </div>


                                    </Form>
                                )}

                            </Formik>


                        </div>


                    </div>


                </div>


            </div>


        </>


    )
}
export default ContactBoxOne;