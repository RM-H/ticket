import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from "yup";

import {useDispatch, useSelector} from "react-redux";
import {userinfoSelector, updateUser} from "../../Slices/userSlice";

import axios from "axios";
import {url} from '../../services/services'
import {useState} from "react";
import CryptoJS from "crypto-js";
import {toast} from 'react-toastify'


const DashboardUserInfo = () => {

    const dispatch = useDispatch()


    const userinfo = useSelector(userinfoSelector)






    const [loading,setloading]=useState(false)
    const handleUpdate = async (d) => {


        const form = new FormData();
        form.append("name", d.name);
        form.append("email", d.email);
        let config = {
            headers: {Authorization: `Bearer ${userinfo.user.token}`}
        };

        const endpoint = `${url}/user/editprofile`

        const response = await axios.post(endpoint, form, config)
        if (response.data.code === 1) {

            const updateuser = async () => {

                const endpoint = `${url}/user/profile`


                setloading(true)

                const data = await axios.get(endpoint, {
                    headers: {Authorization: `Bearer ${userinfo.user.token}`}
                })

                if (data.data.code === 1) {

                    setloading(false)
                    dispatch(updateUser(data.data.user))
                    const Encrypt = CryptoJS.AES.encrypt(JSON.stringify(data.data), 'secret key').toString();
                    localStorage.setItem('userinfo', Encrypt)
                    toast.success('اطلاعات با موفقیت بروز شد 👌')

                } else {
                    toast.error('خطایی پیش آمده 🤔')
                }


            }
            updateuser()


        } else {
            toast.error(response.data.error)
        }


    }


    return (
        <>

            <Formik onSubmit={(values) => handleUpdate(values)}
                    initialValues={{name: userinfo.user.name, email: userinfo.user.email, phone: userinfo.user.phone}}
                    validationSchema={Yup.object().shape({

                        name: Yup.string()
                            .max(50, 'باید کمتر از 50 کاراکتر باشد')
                            .required('ضروری'),

                        email: Yup.string()
                            .email('ایمیل را وارد کنید')
                            .required('ضروری'),

                    })}>
                {({errors, touched}) => (
                    <Form>
                        <div className='columns is-flex is-multiline mt-3'>
                            <div className='column is-12-mobile is-6-desktop '>

                                <Field className='wdith100 yekan borderrad1' id="name" name="name"
                                       placeholder=" نام و نام خانوادگی" type='text' style={{height: '3rem'}}/>
                                <ErrorMessage component='span' className='has-text-danger yekan' name='name'/>

                            </div>


                            <div className='column is-6-desktop is-12-mobile '>

                                <Field disabled className='wdith100 yekan borderrad1' id="name" name="phone"
                                       placeholder=" 123456" type='tel' style={{height: '3rem'}}/>


                            </div>


                            <div className='column is-6-desktop is-12-mobile'>

                                <Field className='wdith100 yekan borderrad1' id="email" name="email"
                                       placeholder=" this@that.com" type='email' style={{height: '3rem'}}/>
                                <ErrorMessage component='span' className='has-text-danger yekan' name='email'/>


                            </div>

                            <div className='column is-12 has-text-left borderrad1 '>

                                <button  type='submit' disabled={loading} className='button clrone has-text-weight-bold pinar p-4 m-1 borderrad1'>
                                    ثبت اطلاعات
                                </button>
                            </div>
                        </div>


                    </Form>


                )}


            </Formik>


        </>
    )
}
export default DashboardUserInfo;