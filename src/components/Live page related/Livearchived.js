import { LiveArchivedList} from '../index'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {citySelector, singersSelector} from "../../Slices/ticketslice";
import {LinearProgress} from "@mui/material";


const Livearchived = () => {


    const [cityID, setCityID] = useState('')
    const [singerID, setSingerID] = useState('')
    useEffect(() => {
        const choice = JSON.parse(localStorage.getItem('city'));
        if (choice) {
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
                    <input checked={true} onClick={() => setCityID(item.id)} className='ml-4' type="radio" id={item.id}
                           name='cities'/>
                    :
                    <input onClick={() => setCityID(item.id)} className='ml-4' type="radio" id={item.id} name='cities'/>
                }

                {item.name}
            </label>


        ))


    } else {
        city = <LinearProgress variant='indeterminate' color='info'/>
    }


    let singer
    if (status === 'done') {


        // showing all singers

        singer = singers.map((item) => (
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
                <div className='columns m-0 is-multiline'>

                    <div className='column is-2'>

                        <div className="is-flex is-flex-direction-column is-justify-content-flex-start p-4 borderrad1 shadowtwo"
                             style={{position: 'sticky', border: '0.1618rem solid #601FEB'}}>
                            <h4 className='pinar has-text-weight-bold my-2'>فیلتر براساس شهر</h4>

                            <div className='control is-flex is-flex-direction-column' style={{position: 'sticky'}}>

                                <label className="radio filter1 yekan my-1 mx-0">
                                    <input checked={!cityID} id='initial' onClick={() => setCityID('')} className='ml-4'
                                           type="radio"
                                           name='cities'/>
                                    همه !
                                </label>

                                {
                                    city
                                }

                            </div>


                        </div>


                        <div
                            className="is-flex is-flex-direction-column is-justify-content-flex-start p-4 borderrad1 shadowtwo my-3"
                            style={{position: 'sticky', border: '0.1618rem solid #601FEB'}}>
                            <h4 className='pinar has-text-weight-bold my-2'>فیلتر براساس مجری</h4>


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

                    <div className='column is-10'>

                        <LiveArchivedList cityid={cityID} singerid={singerID}/>

                    </div>


                </div>
            </div>


        </>
    )
}
export default Livearchived;