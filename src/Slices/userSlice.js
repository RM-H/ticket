
import {createSlice, createDraftSafeSelector} from '@reduxjs/toolkit'



const initialstate = {
    items: [],
    cart:[],
    status: ''
}




const userSlice = createSlice({
    name: 'user',
    initialState: initialstate,
    reducers: {
        adduserinfo(state,action){
            state.items=action.payload;
            state.status='done'
        },
        userExit(state) {
            state.items=[] ;
                state.status=''

        }
        ,
        userOrdersADD(state,action) {
            state.items.orders=action.payload;


        } ,
        updateUser(state,action){
            state.items.user=action.payload
        }
        ,
        addtoCart(state,action){
            state.cart=action.payload
        }
    },

})


export const {adduserinfo , userExit , userOrdersADD,updateUser,addtoCart}=userSlice.actions
export default userSlice.reducer;


// // ---------------------------------Selectors-----------------------------
export const userinfoSelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.userinfo.items
)
export const userOrdersSelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.userinfo.items.orders
)

export const cartSelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.userinfo.cart
)

