import {getUserVideos} from '../../services/services'
import {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {userinfoSelector} from "../../Slices/userSlice";
import {LinearProgress} from "@mui/material";
import {Link} from "react-router-dom";
import {LiveTv} from "@mui/icons-material";
import {NumericFormat} from "react-number-format";
import {toast} from "react-toastify";


const DashboardUserVideos = () => {

    const [data,setData] = useState(false)
    const userinfo = useSelector(userinfoSelector)




    const getVideos = async () => {
        let config = {
            headers: {Authorization: `Bearer ${userinfo.user.token}`}
        };

        try {
            const response = await getUserVideos(config)
            if (response.data.code===1) {
               setData(response.data)

            } else {
                toast.error(response.data.error)
            }



        }catch (e) {
            toast.error('لطفا اتصال خود به اینترنت را بررسی کرده و صفحه را مجددا بارگزاری کنید.')
        }








    }

    useEffect(() => {

        getVideos()
    }, []);

    let content

    if (data!==false) {
        content =data.video_sells.map((item)=>(

            <tr key={item.video_sells.video_id}>
                <td> {item.video_sells.refid}</td>
                <td> {item.videos.title}</td>
                <td> {item.cities.name}</td>
                <td> <NumericFormat displayType='text' value={item.video_sells.amount} thousandSeparator=','/></td>
                <td> {new Date(item.video_sells.time * 1000).toLocaleDateString("fa-IR")}</td>
                <td>  <Link to={`/play/${item.video_sells.refid}`} target='_blank'>
                    <button className='button is-transparent py-0 borderrad1 scoialhover'><LiveTv/></button>
                </Link></td>


            </tr>

        ))
    } else {
        content = <LinearProgress variant='indeterminate' color='info'/>
    }



    return (
        <>
            <div className=' table-container mt-3 '>
                <div className='p-3 wdith100 cardboxborder' style={{overflowX:'auto'}}>
                    <table className="table is-bordered wdith100  ">
                        <thead className='clrtwo '>
                        <tr className='pinar  '>
                            <th className='clrsixtext has-text-centered'> شماره</th>
                            <th className='clrsixtext has-text-centered'>برنامه</th>
                            <th className='clrsixtext has-text-centered'>شهر</th>
                            <th className='clrsixtext has-text-centered'>مبلغ کل</th>
                            <th className='clrsixtext has-text-centered'>تاریخ رزرو</th>
                            <th className='clrsixtext has-text-centered'>مشاهده</th>
                        </tr>
                        </thead>
                        <tbody className='yekan has-text-centered'>
                        {content}
                        </tbody>
                    </table>
                </div>


            </div>

        </>
    )
}
export default DashboardUserVideos;