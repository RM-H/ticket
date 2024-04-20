import {TheosPlayer} from "@aka_theos/react-hls-player";
import {useParams} from 'react-router-dom'
import CryptoJS from "crypto-js";
import {useEffect, useState} from 'react'

import {getUserVideos} from "../services/services";
import {LinearProgress} from "@mui/material";


const LiveVideoPlay = () => {

    const {refid} = useParams()

    const [data, setData] = useState(false)


    let repeat = false;

    // let repeat= setInterval(()=>getVideos(),3000)

    // finding the vide based on the refid and token


    const getVideos = async () => {

        if (localStorage.getItem('userinfo')) {
            const decrypt = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('userinfo'), 'secret key').toString(CryptoJS.enc.Utf8));
            let config = {
                headers: {Authorization: `Bearer ${decrypt.user.token}`}
            };

            try {
                const response = await getUserVideos(config)

                if (repeat) {
                    clearInterval(repeat);
                    repeat = setInterval(() => getVideos(), 3000)
                }
                if (response.data.code === 1) {

                    // filtering data for refid
                    let filtered = response.data.video_sells.filter((item) => (
                        item.video_sells.refid === refid
                    ))
                    setData(filtered)
                } else {
                    alert(response.data.error)
                }


            } catch (e) {
                alert('لطفا اتصال خود به اینترنت را بررسی کرده و صفحه را مجددا بارگزاری کنید.')
            }

        } else {
            alert('ابتدا وارد حساب کاربری خود شوید.')
        }


    }


    useEffect(() => {

        setInterval(() => getVideos(), 2000)


    }, []);


    // const render = ({seconds, completed}) => {
    //
    //
    //
    //
    //
    //         return (
    //
    //             <>
    //                 <div className='my-4 yekan'>
    //                     <CircularProgress color='info' variant='determinate'/>
    //
    //
    //                     نیازی به بارگداری مجدد صفحه نیست !
    //
    //                     <p>
    //                           <span className='mx-1 has-text-info'>
    //                     {seconds}
    //
    //                               ثانیه
    //                       </span>
    //                     </p>
    //
    //                     تا بررسی خودکار برای شروع برنامه.
    //
    //
    //                 </div>
    //
    //             </>
    //
    //
    //         )
    //
    //
    // }

    // live 0 = archived
    // live 1 = live
    // play 0 = unplayable
    // play 1 = playable
    let content
    if (data !== false) {

        // archived video
        if (data[0].videos.live === 0) {
            content = <div className='column is-12'>
                <video controls>
                    <source src={data[0].videos.link}/>
                </video>
            </div>

            // live and ready to be played
        } else if (data[0].videos.live === 1 && data[0].videos.play === 1) {

            content = <div className='column is-12'>
                <TheosPlayer
                    src={data[0].videos.link}
                    autoPlay={true}
                    width={'100%'}
                    color={'#B9E901'}

                />
            </div>

        } else if (data[0].videos.live === 1 && data[0].videos.play === 0) {


            content = <div className='column is-12 has-text-centered'>

                <h2 className='pinar my-3'>
                    پخش زنده هنوز شروع نشده است.
                </h2>
                <p className='yekan my-3'>
                    نیازی به بارگذاری مجدد صفحه نیست و در زمان شروع برنامه، بخش زنده به شکل خودکار شروع خواهد شد.
                </p>


                <LinearProgress variant='indeterminate' color='info'/>

            </div>
        }


    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }


    return (

        <>


            <div className='columns is-flex flex-JCS-ACS m-0 navpadstart150 navpadend150 my-4'
                 style={{minHeight: '50vh'}}>
                {
                    content
                }

            </div>


        </>
    )
}
export default LiveVideoPlay;