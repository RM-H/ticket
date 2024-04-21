import ConcertsList from "./ConcertsList"
import {useSelector} from "react-redux";
import {citySelector,singersSelector} from "../../Slices/ticketslice";
import {LinearProgress} from "@mui/material";
import {useState,useEffect} from "react";


export default function ConcertsFilter() {



    // search params for concert_search api
    const [cityID, setCityID] = useState('')
    const [singerID, setSingerID] = useState('')


    useEffect(() => {
        const choice =JSON.parse(localStorage.getItem('city'));
        if(choice){
            setCityID(choice.id)
        }

    }, []);







    // getting the cities andsingers from redux

    const cities = useSelector(citySelector)
    const singers = useSelector(singersSelector)
    const status = useSelector((state) => (state.ticket.status))
    let city
    if (status === 'done') {
        city = cities.map((item) => (
            <label key={item.id} className="radio filter1 yekan my-1 mx-0">
                {item.id === cityID ?
                    <input checked={true} onClick={() => setCityID(item.id)} className='ml-4' type="radio" id={item.id} name='concerts'/>
                    :
                    <input onClick={() => setCityID(item.id)} className='ml-4' type="radio" id={item.id} name='concerts'/>
                }

                {item.name}
            </label>


        ))


    } else {
        city = <LinearProgress variant='indeterminate' color='info'/>
    }
    let singer
    if (status === 'done') {



        // filtering for singer type 1
        const filtered = singers.filter((item)=>(
            item.singer_type===1
        ))
        singer = filtered.map((item) => (
            <label key={item.id} className="radio filter1 yekan my-1 mx-0">
                <input onClick={() => setSingerID(item.id)} className='ml-4' type="radio" id={item.id} name='singers'/>
                {item.name}
            </label>


        ))
    } else {
        singer = <LinearProgress variant='indeterminate' color='info'/>
    }








    return (
        <>
            <div className='column is-12'>
                <div className="columns is-multiline m-0">

                    <div className='column is-12-tablet is-2-desktop'>

                        <div className="is-flex is-flex-direction-column is-justify-content-flex-start p-4 borderrad1 shadowtwo"
                             style={{position: 'sticky', border: '0.1618rem solid #601FEB'}}>
                            <h4 className='pinar has-text-weight-bold my-2'>فیلتر براساس شهر</h4>

                            <div className='control is-flex is-flex-direction-column'>

                                <label className="radio filter1 yekan my-1 mx-0">
                                    <input checked={cityID === ''} id='initial' onClick={() => setCityID('')}
                                           className='ml-4' type="radio"
                                           name='concerts'/>
                                    همه !
                                </label>

                                {
                                    city
                                }

                            </div>


                        </div>

                        <div
                            className="is-flex is-flex-direction-column is-justify-content-flex-start p-4 borderrad1 my-3 shadowtwo"
                            style={{position: 'sticky',border: '0.1618rem solid #601FEB'}}>
                            <h4 className='pinar has-text-weight-bold my-2'>فیلتر براساس خواننده</h4>


                            <div className='control is-flex is-flex-direction-column'>


                                <label className="radio filter1 yekan my-1 mx-0">
                                    <input onClick={() => setSingerID('')} className='ml-4' type="radio"
                                           name='singers'/>
                                    همه !
                                </label>


                                {
                                    singer
                                }


                            </div>

                        </div>

                    </div>

                    <div className='column  is-10-desktop'>
                        <ConcertsList cityid={cityID} singerid={singerID}/>

                    </div>


                </div>

            </div>


        </>
    )
}