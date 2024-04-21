import {FuturelivesList} from '../index'

import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {citySelector} from "../../Slices/ticketslice";
import {LinearProgress} from "@mui/material";


const Futurelives = () => {

    const [futueliveCityID, setLiveCityID] = useState('')

    useEffect(() => {
        const choice =JSON.parse(localStorage.getItem('city'));
        if(choice){
            setLiveCityID(choice.id)
        }

    }, []);


    // getting the cities andsingers from redux

    const cities = useSelector(citySelector)

    const status = useSelector((state) => (state.ticket.status))
    let city
    if (status === 'done') {
        city = cities.map((item) => (
            <label key={item.id+2} className="radio filter1 yekan my-1 mx-0">
                {item.id === futueliveCityID ?
                    <input checked={true} onClick={() => setLiveCityID(item.id)} className='ml-4' type="radio" id={item.id}
                           name='futurelive'/>
                    :
                    <input onClick={() => setLiveCityID(item.id)} className='ml-4' type="radio" id={item.id} name='futurelive'/>
                }

                {item.name}
            </label>


        ))


    } else {
        city = <LinearProgress variant='indeterminate' color='info'/>
    }

    return (
        <>
            <div className='column is-12'>
                <div className="columns is-multiline m-0">


                    <div className='column is-2'>

                        <div className="is-flex is-flex-direction-column is-justify-content-flex-start p-4 borderrad1 shadowtwo"
                             style={{position: 'sticky', border: '0.1618rem solid #601FEB'}}>
                            <h4 className='pinar has-text-weight-bold my-2'>فیلتر براساس شهر</h4>

                            <div className='control is-flex is-flex-direction-column' style={{position: 'sticky'}}>

                                <label className="radio filter1 yekan my-1 mx-0">
                                    <input checked={!futueliveCityID} id='initial' onClick={() => setLiveCityID('')}
                                           className='ml-4' type="radio"
                                           name='futurelive'/>
                                    همه !
                                </label>

                                {
                                    city
                                }

                            </div>


                        </div>


                    </div>

                    <div className='column is-10'>

                        <FuturelivesList cityid={futueliveCityID}/>

                    </div>


                </div>

            </div>


        </>

    )
}
export default Futurelives;