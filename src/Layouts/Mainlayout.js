import {Nav, Footer} from '../components'
import CryptoJS from 'crypto-js'

import {Outlet} from 'react-router-dom'
import {useDispatch} from "react-redux";
import React from "react";
import {adduserinfo} from "../Slices/userSlice";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Mainlayout = ({children}) => {


    // checking to see if user exists or not in localstorage
    const dispatch = useDispatch()


    if (localStorage.getItem('userinfo')) {

        let decrypt = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('userinfo'), 'secret key').toString(CryptoJS.enc.Utf8));


        dispatch(adduserinfo(decrypt))


    }


    return (
        <>
            <div className='is-flex is-flex-direction-column is-align-items-center mx-auto'>


                <div className='containerwidth '>
                    <Nav/>
                    <Outlet/>


                    {children}


                </div>

                <Footer/>

            </div>
            <ToastContainer position="top-right"
                            autoClose={4200}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"/>
        </>
    )
}
export default Mainlayout