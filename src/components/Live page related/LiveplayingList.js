import Flash from "react-reveal/Flash";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";
import {url} from "../../services/services";
import {LiveCArd} from '../index'
import {LinearProgress} from "@mui/material";


const LiveplayingList = ({cityid}) => {


    const [data, setData] = useState(false)


    // search param for input
    const [search, setSearch] = useState('')


    // loading spinner for when request is pending
    const [loading, setLoading] = useState(true);


    // the actual data grab function
    let endpoint = `${url}/videos`

    const getdata = async (page) => {


        const options = {


            params: {page: page, take: 4, live: 1, city_id: cityid, search: search}
        };
        setLoading(true)

        const response = await axios.get(endpoint, options)
        if (response.data.code === 1) {
            setData(response.data)
            setLoading(false)

        } else {
            alert(response.data.error)
        }

    }


    useEffect(() => {

        const choice = JSON.parse(localStorage.getItem('city'));

        const getdatabegin = async (city) => {
            const options = {
                params: {take: 4, live: 1, search: search, city_id: city}
            };
            setLoading(true)
            const response = await axios.get(endpoint, options)
            if (response.data.code === 1) {

                setData(response.data)
                setLoading(false)
            } else {
                alert(response.data.error)
            }
        }

        if (choice) {
            getdatabegin(choice.id)
        } else {
            getdatabegin()
        }


    }, []);
// fires when search statae is updated
    useEffect(() => {


        getdata(1)


    }, [cityid, search]);

    let content
    if (loading === false) {
        content = data.items.map((item) => (
            <LiveCArd key={item.videos_view.id} location={item.videos_view.location_name} price={item.videos_view.price}
                      title={item.videos_view.title} img={item.videos_view.cover} id={item.videos_view.id}
                      singer={item.singers.name} city={item.cities.name}/>
        ))
    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }


    return (
        <>

            <section>


                <div className='columns mx-0  is-multiline navpadstart150 my-3 '>
                    <div className='column is-12'>


                        <div className="field has-addons yekan ">
                            <div className="control wdith100">
                                <input className="input"
                                       onChange={(event) => setTimeout(() => setSearch(event.target.value), 1600)}
                                       type="text" placeholder="نام سالن، خواننده، شهر یا کنسرت"/>
                            </div>
                            <div className="control">
                                <a className="button borderrad1 pinar has-text-weight-bold  " disabled>
                                    یافت شده :


                                    <Flash spy={data}>


                                        {data && data.paginator.total}

                                    </Flash>


                                </a>
                            </div>
                        </div>
                    </div>


                    <div className='column is-12'>
                        <div className='columns'>
                            <div className='column  is-12'>
                                <div className='columns is-flex is-multiline'>

                                    {
                                        content
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {data &&
                    <div className='morecard'>


                        {/*before page with tick*/}
                        {
                            data.paginator.beforePage < data.paginator.currentPage && (

                                <button onClick={() => getdata(data.paginator.beforePage)} className='button'>
                                    <NavigateNext/>
                                </button>
                            )


                        }


                        {/*map beforePages*/}
                        {data.paginator.beforePages.length > 0 &&

                            <>
                                {data.paginator.beforePages.map((item, index) =>
                                    <button onClick={() => getdata(item)} key={index}>
                                        {item}
                                    </button>
                                )}
                            </>

                        }


                        {/*active*/}

                        {
                            data.paginator.total > 0 &&
                            <button className='clrtwo has-text-white'>{data.paginator.currentPage}</button>


                        }


                        {/*map nextPages*/}
                        {data.paginator.nextPages.length > 0 &&
                            <>
                                {data.paginator.nextPages.map((item, index) =>
                                    <button onClick={() => getdata(item)} key={index}>
                                        {item}
                                    </button>
                                )}
                            </>

                        }


                        {/*next page with tick*/}
                        {

                            data.paginator.nextPage > data.paginator.currentPage && (

                                <button onClick={() => getdata(data.paginator.nextPage)} className='button is-transparent'>
                                    <NavigateBefore/>
                                </button>
                            )


                        }


                    </div>
                }


            </section>

        </>
    )
}
export default LiveplayingList;