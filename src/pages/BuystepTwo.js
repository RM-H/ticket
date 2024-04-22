import {BuyTwoBoxOne, SvgBox, SelectedSeatsCard, SvgHelp} from '../components'
import {useParams, useNavigate} from 'react-router-dom'
import {NumericFormat} from 'react-number-format'
import {LinearProgress} from "@mui/material";

import {getSeatinginfobyID} from '../services/services'
import {useEffect, useState} from "react";
import _ from 'lodash'
import {useDispatch, useSelector} from 'react-redux'
import {addtoCart, userExit, userinfoSelector} from '../Slices/userSlice'
import {buySeats} from "../services/services";


const BuystepTwo = () => {

    const nav = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(userinfoSelector)

    let {concertID} = useParams()


    const [dataneeded, setdataneeded] = useState(false)
    // ids of selected seats
    let [itemsselected, setItems] = useState([]);

    // getting a sanses pricing informoation when the componenet mounts and also adding his latest seat choices
    const fetchdataneeded = async () => {
        const resp = await getSeatinginfobyID(concertID)
        if (resp) {
            setItems([])
            setdataneeded(resp.data)


        }
    }
    useEffect(() => {


        fetchdataneeded();


        setTimeout(()=>  window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }),500)



    }, [])


    let content
    if (dataneeded !== false) {

        const spikes = _.sortBy(dataneeded.seats, ['price'])


        content =
            <BuyTwoBoxOne key={dataneeded.sans.id} singer={dataneeded.concerts.title} place={dataneeded.location.name}
                          date={dataneeded.sans.date_text}
                          pricerange={[spikes.at(-1), spikes.at(1)]} time={dataneeded.sans.time_stamp}/>


    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }


    let svg

    if (dataneeded !== false) {
        svg = <SvgBox itemsselected={itemsselected} setItems={setItems} map={dataneeded.location.svg}
                      seatinfo={dataneeded.seats}/>;

    } else {
        svg = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }


    let sel = itemsselected.map((i) => (
        Number(i)
    ))


    const filtered = sel.map((id) => (
        dataneeded.seats.filter((data) => data.id === id)

    ))
    const destructured = filtered.map((item) => (

        item[0]
    ))



    let cards
    if (destructured) {

        cards = destructured.map((item) => (

            <SelectedSeatsCard details={item} key={item.id} setitems={setItems} items={itemsselected}/>

        ))
    }


    // price calculation and display

    let price
    if (destructured) {
        const tot = destructured.reduce((previousValue, currentValue) => (
                previousValue + currentValue.price
            ), 0
        )
        price = <NumericFormat value={tot} displayType='text' thousandSeparator=',' prefix="       "
                               suffix='              تومان        '/>
    }


    // handle seats purchase
    const [loading,setLoading] = useState(false)
    const handlePurchase = async () => {

        let name = user.user.name
        let sans = concertID
        let seats = itemsselected


        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${user.user.token}`
            }
        }
        setLoading(true)


        const response = await buySeats(sans, name, seats, config)
        if (response.data.code === 1) {

            window.location = response.data.url;
            setLoading(false)

        } else if (response.data.code === 369) {
            alert(response.data.error)


           window.location.reload()
        } else {
            alert(response.data.error + '🤔')
            localStorage.clear()
            dispatch(userExit())
            nav('/')
        }


    }


    // caching users selected seats incase user is not logged in
    let islogged

    if (localStorage.getItem('userinfo')) {

        islogged =

            <button onClick={handlePurchase} disabled={(destructured.length <= 0 || loading )}
                    className='button clrone pinar has-text-weight-bold'>

                {

                    loading ?

                       'در حال انتقال به صفحه پرداخت'
                        :

                        'رزرو و خرید بلیط'
                }




            </button>


    } else {

        islogged =

            <button onClick={() => {
                nav(`/login/${concertID}`);
                dispatch(addtoCart(itemsselected))
            }}
                    className='button clrone pinar has-text-weight-bold'>

                ورود
            </button>


    }


    return (
        <>
            <main>
                <section>

                    <div className='columns mx-0 mb-6  is-multiline navpadend150 navpadstart150 padtopmobile'>
                        <div className='column is-12 has-text-centered mt-6 px-0'>
                            <img draggable={false} src="/images/buytwo.png" alt="schedule progress"/>

                        </div>

                        {


                            content
                        }


                        {svg}
                        <SvgHelp/>


                        <div className='column is-12'>
                            <div className='columns is-flex is-multiline'>


                                {
                                    cards
                                }


                            </div>

                        </div>


                        <div className='column is-12 cardboxborder shadowtwo'>
                            <div className='columns m-0 is-align-items-center'>
                                <div className='column is-10'>

                                    <p className='yekan'>

                                        {

                                            destructured.length

                                        }

                                        صندلی ،
                                        جمع کل :
                                        {

                                            price
                                        }
                                    </p>


                                </div>

                                <div className='column is-12-mobile has-text-centered-mobile  is-2-desktop'>

                                    {
                                        islogged
                                    }


                                </div>


                            </div>

                        </div>


                    </div>


                </section>


            </main>


        </>
    )
}

export default BuystepTwo;

