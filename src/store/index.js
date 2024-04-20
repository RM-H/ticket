import {configureStore} from '@reduxjs/toolkit'
import ticketslice , {fetchinfo} from "../Slices/ticketslice";
import UserSlice from "../Slices/userSlice";

export const store=configureStore({
    reducer : {

        ticket:ticketslice ,
        userinfo:UserSlice,

    } ,

})
store.dispatch(fetchinfo());