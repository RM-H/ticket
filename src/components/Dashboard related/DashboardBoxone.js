import {Button} from "@mui/material";
import {ConfirmationNumber, PersonPin, ExitToApp,OndemandVideo} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userExit} from "../../Slices/userSlice";
import {toast} from "react-toastify";

const DashboardBoxone = ({active, setActive}) => {


    const nav = useNavigate()
    const dispatch = useDispatch()

    const handleExit = () => {
        dispatch(userExit());
        localStorage.clear();
        toast.success('با موفقیت از حسابتان خارج شدید ! 😊');
        nav('/');


    }


    const handleContent = (n) => {
        setActive(n)
    }


     let items = <>


            <li>
                <Button onClick={() => handleContent(1)}
                        className={`button yekan has-text-white is-size-6-desktop dashboardhover wdith100 is-justify-content-flex-start ${active===1 && 'clrtwo'} `} style={{height:'4rem'}} >
                    <ConfirmationNumber className='ml-1'/>
                    بلیط های من

                </Button>
            </li>

            <li>
                <Button onClick={() => handleContent(2)}
                        className={`button yekan has-text-white is-size-6-desktop dashboardhover wdith100 is-justify-content-flex-start ${active===2 && 'clrtwo'} `} style={{height:'4rem'}}>
                    <PersonPin className='ml-1'/>
                    مشخصات کاربری

                </Button>
            </li>


            <li>
                <Button onClick={() => handleContent(3)}
                        className={`button yekan has-text-white is-size-6-desktop dashboardhover wdith100 is-justify-content-flex-start ${active===3 && 'clrtwo'} `}  style={{height:'4rem'}}>
                    <OndemandVideo className='ml-1'/>
                    ویدیو های خریداری شده

                </Button>
            </li>


            <li>
                <Button
                    className='button yekan has-text-white is-size-6-desktop  dashboardhover wdith100 is-justify-content-flex-start '
                    onClick={handleExit} style={{height:'4rem'}}>
                    <ExitToApp className='ml-1'/>
                    خروج از حساب

                </Button>
            </li>
        </>



    return (
        <>
            <div
                className='column is-3 clrthree has-text-white is-flex is-flex-direction-column is-align-items-center borderrad1 navpadstart150'>

                <h2 className='pinar is-size-3-desktop'>
                    تیکت آنلاین
                </h2>

                <ul className='wdith100 '>
                    {

                        items
                    }


                </ul>


            </div>


        </>
    )
}
export default DashboardBoxone;