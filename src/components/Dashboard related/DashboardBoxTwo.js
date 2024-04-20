import {motion} from 'framer-motion'


import { Link} from 'react-router-dom'
import { useSelector} from "react-redux";
import { userOrdersSelector} from "../../Slices/userSlice";
import {DashboardTable, DashboardUserInfo,DashboardUserVideos} from '../index'
import {NumericFormat} from "react-number-format";
import {LinearProgress} from "@mui/material";
import {Downloading} from '@mui/icons-material'


const DashboardBoxTwo = ({active, setActive}) => {












    // getting users orders form redux
    const dataneeded = useSelector(userOrdersSelector)
    let tabledata
    if (dataneeded) {
        tabledata = dataneeded.map((data) => (


            <>

            <tr key={data.orders.id}>
                <td>{data.orders.refid}</td>
                <td>{data.concerts.title}</td>
                <td>{data.orders.count}</td>
                <td><NumericFormat displayType='text' value={data.orders.amount} thousandSeparator=','/></td>
                <td>{new Date(data.orders.time * 1000).toLocaleDateString("fa-IR")}</td>
                <td>
                    <Link to={`/print/${data.orders.refid}`} target='_blank'>
                        <button className='button is-transparent py-0 borderrad1'><Downloading/></button>
                    </Link>

                </td>


            </tr>

            </>
    ))
    } else {
        tabledata = <LinearProgress variant='indeterminate' color='info'/>
    }


    let content
    if (active === 1) {
        content =
            <>

                <motion.h3 animate={{opacity: 1, x: [-500, 0]}} transition={{duration: 0.3}}
                           className='pinar is-size-4-desktop has-text-weight-bold py-3 '
                           style={{borderBottom: '1px solid black'}}>
                    بلیط های من
                </motion.h3>

                <DashboardTable>
                    {
                        tabledata
                    }

                </DashboardTable>
            </>


    } else if (active===2) {

        content =
            <>
                <motion.h3 animate={{opacity: 1, x: [-501, 0]}} transition={{duration: 0.3}}
                           className='pinar is-size-4-desktop has-text-weight-bold py-3 '
                           style={{borderBottom: '1px solid black'}}>
                    مشخصات کاربری
                </motion.h3>
                <DashboardUserInfo/>


            </>


    } else {

        content = <>
            <motion.h3 animate={{opacity: 1, x: [-502, 0]}} transition={{duration: 0.3}}
                       className='pinar is-size-4-desktop has-text-weight-bold py-3 '
                       style={{borderBottom: '1px solid black'}}>
                ویدیو های خریداری شده
            </motion.h3>

            <DashboardUserVideos/>


        </>


    }


    return (
        <>
            <div className='column ps-6 is-9 '>


                {content}


            </div>


        </>
    )
}
export default DashboardBoxTwo;