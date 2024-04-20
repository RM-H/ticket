import {createSlice, createAsyncThunk, createDraftSafeSelector} from '@reduxjs/toolkit'
import axios from "axios";
import {url} from '../services/services'


const initialstate = {
    items: [],
    status: ''
}
const choice = JSON.parse(localStorage.getItem('city'));
export const fetchinfo = createAsyncThunk('info/fetch', async () => {
    try {

        // checking for city in localstorage
        let options
        if (choice) {
            options = {
                params: {city_id: choice.id}
            }
        } else {
            options = {
                params: {city_id: ''}
            }
        }

        const response = await axios.get(`${url}/splash`,options)
        return response.data
    } catch (e) {
        console.log(e)
    }
})


const ticketSlice = createSlice({
    name: 'tickets',
    initialState: initialstate,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchinfo.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'done'
            }
        )
            .addCase(
                fetchinfo.pending, (state) => {
                    state.status = 'pending'
                }
            )
    }
})

export default ticketSlice.reducer;


// ---------------------------------Selectors-----------------------------
export const infoselector = createDraftSafeSelector(
    (state) => state,
    (state) => state.ticket.items.info
)

export const specialSelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.ticket.items.special
)

export const concertSelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.ticket.items.concerts

)

export const faqSelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.ticket.items.faq

)

export const citySelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.ticket.items.cities

)

export const singersSelector = createDraftSafeSelector(
    (state) => state,
    (state) => state.ticket.items.singers

)