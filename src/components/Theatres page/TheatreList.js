import Flash from "react-reveal/Flash";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {baseurl, url} from "../../services/services";
import axios from "axios";
import {ConcertCard} from "../index";
import {LinearProgress} from "@mui/material";


const TheatreList = ({cityid,singerid}) => {


    const [data, setData] = useState(false)


    // search param for input
    const [search, setSearch] = useState('')


    // loading spinner for when request is pending
    const [loading, setLoading] = useState(true)


    // the actual data grab function
    let endpoint = `${url}/concerts`
    const getdata = async (page) => {


        const options = {


            params: {page: page, take: 4, type: 3, singer_id: singerid, city_id: cityid, search: search}
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
        const choice =JSON.parse(localStorage.getItem('city'));
        if (choice) {

            const getdata2 = async (page) => {


                const options = {


                    params: {page: page, take: 4,type:3, singer_id: singerid, city_id: choice.id, search: search}
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
            getdata2()

        } else {
            getdata(1)
        }





    }, []);




    useEffect(() => {


        getdata(1)


    }, [singerid, cityid, search]);


    // when data is grabbed we map it into cards
    let content


    if (loading === false) {

        if (data.items.length > 0) {
            content = data.items.map((item) => (
                <>

                    <ConcertCard key={item.concerts.id} image={`${baseurl}/${item.concerts.img}`}
                                 id={item.concerts.id} singer={item.concerts.title}
                                 time={item.concerts.date_text}
                                 location={item.locations_view.name} statusCode={item.concerts.active}
                                 ts={item.concerts.date}/>

                </>))
        } else {
            content = <p className='yekan'>متاسفانه چیزی برای نمایش وجود ندارد ...</p>
        }


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
export default TheatreList;