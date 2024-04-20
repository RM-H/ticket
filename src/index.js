import React from 'react';
import ReactDOM from 'react-dom/client';


import Mainlayout from "./Layouts/Mainlayout";
import reportWebVitals from './reportWebVitals';
import {

    RouterProvider
} from "react-router-dom";
import {router} from './routes/routes'
import {store} from "./store";
import {Provider} from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>


        <RouterProvider router={router}>


            <Mainlayout>

            </Mainlayout>



        </RouterProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
