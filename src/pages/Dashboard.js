import {DashboardBoxOne, DashboardBoxTwo} from '../components'
import {useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userExit, userinfoSelector, userOrdersADD} from "../Slices/userSlice";
import {url} from "../services/services";
import axios from "axios";
import {toast} from "react-toastify";


const Dashboard = () => {

    // dynamic button and h2 to show where user is
    const [Active , setActive] = useState(1)


    // getting users orders history when component mounts

    const nav = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(userinfoSelector)



    const getData = async (token) => {

        const requrl = `${url}/user/orders`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(requrl, config)

        if (response.data.code === 401) {

            localStorage.clear();
            dispatch(userExit());
            toast.error('توکن معتبر نیست !🤔 مجددا وارد شوید ')
            nav('/')
        } else {
            dispatch(userOrdersADD(response.data.orders))
        }


    }
    useEffect(() => {
        if (user.user) {
            getData(user.user.token);

        } else {

            toast.error('لطفا وارد حساب کاربری شوید.');
            nav('/');

        }
    }, []);




    return (
        <>
            <main>
                <section>

                    <div className='columns mx-0 my-3 is-multiline navpadend150 padtopmobile  '>



                        <DashboardBoxOne active={Active} setActive={setActive}/>
                        <DashboardBoxTwo active={Active} setActive={setActive}/>




                    </div>


                </section>


            </main>


        </>

    )
}

export default Dashboard;
