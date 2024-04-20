import Mainlayout from "../Layouts/Mainlayout";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Landing from '../pages/Landing'

import {
    createBrowserRouter

} from "react-router-dom";

import {LogIn,BuystepOne ,BuystepTwo,Errorpage,Contact,Live,Dashboard,Concerts,Results,Confrences,Theatre , Inquiry,Print,LiveVideo} from '../components'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        errorElement:<Errorpage/>,
        children: [
            {
                path: '/',
                element:<Landing/>


            } ,

            {
                path: '/schedule/:concertID' ,
                element: <BuystepOne/>

            } ,

            {
                path: '/seating/:concertID' ,
                element: <BuystepTwo/>

            },



            {
                path: '/contact' ,
                element: <Contact/>

            },

            {
                path: '/concerts' ,
                element: <Concerts />

            },
            {
                path: '/conference' ,
                element: <Confrences />

            },
            {
                path: '/theatre' ,
                element: <Theatre />

            },
            {
                path: '/inquiry' ,
                element: <Inquiry />

            },


            {
                path: '/live' ,
                element: <Live />

            },


            {
                path: '/play/:refid' ,
                element: <LiveVideo />

            },
            {
                path: '/Dashboard' ,
                element: <Dashboard />

            },
            {
                path: '/Results/:QParams' ,
                element: <Results />

            }



        ] ,


    } ,
    {

        path:'/login/:reference' ,
        element: <LogIn/>
    },
    {

        path:'/login' ,
        element: <LogIn/>
    },
    {
        path: '/print/:Ref' ,
        element: <Print />

    }
])