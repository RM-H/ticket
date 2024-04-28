import {BuyOneBoxOne, TicketBuyRules, TicketTimecard} from '../components'
import {useParams} from 'react-router-dom'

import {LinearProgress} from '@mui/material'
import {getSansinfobyID,baseurl} from '../services/services'


import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const BuystepOne = () => {

    //--------------------------- fetching sans with concert id and populatin sans component
    let {concertID} = useParams()
    const [parham, setparham] = useState(false)
    const [readlaw,setreadlaw] = useState(false)

    useEffect(() => {

        const dataneeded = async () => {
            const resp = await getSansinfobyID(concertID)
            if (resp) {
                setparham(resp.data)



            }
        }

        dataneeded();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });


    }, []);


    let cards

    if (parham !== false) {


        cards = parham.sans.map((item) => (
            <TicketTimecard key={item.id} times={item} law={readlaw} />
        ))

    } else {
        cards = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }


// -------------------getting concerts data and finding the one with params received----------


    let content
    if (parham !== false) {

        let concerttimes = parham.sans.map((sans)=>(
            `${new Date(sans.time_stamp*1000).getHours()} `
        ))




        content =(
            <BuyOneBoxOne  singer={parham.concert.title} place={parham.location.name}
                          date={parham.concert.date_text}
                          image={`${baseurl}/${parham.concert.img}`}
                          gps={[parham.location.lat, parham.location.lng]} time={concerttimes}/>
        )


    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }


    return (

        <>
            <main>
                <section>

                    <div className='columns mx-0  is-multiline navpadend150 navpadstart150 padtopmobile'>

                        <div className='column is-12 has-text-centered mt-6 px-0'>
                            <img draggable={false} src="/images/buyone.png" alt="schedule progress"/>

                        </div>


                        {
                            content
                        }


                    </div>

                </section>


                <section>
                    <div className='columns mb-6 mx-0 is-multiline navpadend150 navpadstart150'>



                        <div className='column pinar is-12 mt-6'>

                            <p>

                                <input className='ml-2' type="checkbox" onClick={()=>setreadlaw(!readlaw)}/>
                                <span className='clrtwotext' onClick={()=>window.open('/rules' ,"100","width=430,height=932")}>
                                    قوانین و مقررات
                                </span>
                                {' '}



                                را خوانده و قبول میکنم.

                            </p>


                        </div>


                        <div className='column is-12'>
                            <div className='columns is-multiline'>


                                {
                                    cards

                                }

                            </div>

                        </div>


                    </div>


                </section>


            </main>


        </>
    )
}

export default BuystepOne;