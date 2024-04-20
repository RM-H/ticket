import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {baseurl, url} from '../services/services'
import axios from "axios";
import {ConcertCard} from "../components";
import {LinearProgress} from "@mui/material";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";


const SearchResults = () => {

    const {QParams} = useParams()
    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(true)


    // to be fired at search
    const endpoint = `${url}/concerts`
    // handling search
    const handleSearch = async (value) => {

        let userCity = JSON.parse(localStorage.getItem('city'))

        let cityID
        if (userCity) {

            cityID = userCity.id

        }

        const options = {


            params: {page: 1, take: 4, search: value, city_id: cityID}
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


    // used for handling pagination
    const getdata = async (page) => {


        const options = {


            params: {page: page, take: 4, search: QParams}
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


    // handling search when coming form other pages
    useEffect(() => {
        handleSearch(QParams)
    }, []);


    // search on search page and hcanging what is being searched
    useEffect(() => {
        handleSearch(QParams)
    }, [QParams]);


    // showing results in users selected city
    // actual city id qparam is added in handle search
    let userCity = localStorage.getItem('city')
    let resultsText
    if (userCity) {

        resultsText = `  در ${JSON.parse(userCity).name}`
    } else {
        userCity = ''
    }


    // when data is grabbed we map it into cards
    let content


    if (loading === false) {

        if (data.items.length > 0) {
            content = data.items.map((item, index) => (
                <>

                    <ConcertCard image={`${baseurl}/${item.concerts.img}`}
                                 id={item.concerts.id} singer={item.concerts.title}
                                 time={item.concerts.date_text}
                                 location={item.locations_view.name} statusCode={item.concerts.active}
                                 ts={item.concerts.date} key={index}/>

                </>

            ))
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
            <main>


                <div className='columns m-0 is-multiline m-0 navpadstart150 navpadend150 padtopmobile  '>
                    <div className='column is-12 yekan  '>
                        <h2>


                            نمایش نتایج برای :

                            <span className='has-text-link mx-1'>
                                 {QParams}
                            </span>


                            <span className='mx-1'>


                                 {resultsText}
                            </span>


                        </h2>


                    </div>


                    <div className='column is-12 cardboxborder p-3'>
                        <div className='columns m-0'>

                            {
                                content
                            }


                        </div>

                    </div>


                    <div className='column is-12'>
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

                                        <button onClick={() => getdata(data.paginator.nextPage)}
                                                className='button is-transparent'>
                                            <NavigateBefore/>
                                        </button>
                                    )


                                }


                            </div>
                        }
                    </div>

                </div>


            </main>


        </>
    )
}
export default SearchResults