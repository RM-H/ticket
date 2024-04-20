import {LocationOn, Payment} from '@mui/icons-material'
import {baseurl, url, buyVideos} from '../../services/services'
import {NumericFormat} from "react-number-format";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userExit, userinfoSelector} from "../../Slices/userSlice";
import axios from "axios";


const CurrentlyplayingCard = ({title, location, price, id, img, singer, city}) => {


    // handleing buy video
    // will check for token validity first and if token is not valid, user will be signed out

    const requrl = `${url}/user/orders`
    const nav = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(userinfoSelector)


    const videoPay = async (idinput) => {

        const config = {
            headers: {
                Authorization: `Bearer ${user.user.token}`
            }
        }

        const response = await buyVideos(idinput, user.user.name, config)
        if (response.data.code === 1) {
            window.location = response.data.url;
        } else {
            alert(response.data.error)
        }
    }


    const handleVideobuy = async () => {


        if (localStorage.getItem('userinfo')) {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.user.token}`
                }
            }
            const response = await axios.get(requrl, config)
            if (response.data.code === 1) {
                videoPay(id)


            } else if (response.data.code === 401) {
                localStorage.clear();
                dispatch(userExit());
                alert('توکن معتبر نیست !🤔 مجددا وارد شوید ')
                nav('/')

            }
        } else {
            alert('برای خرید ویدیو ها ابتدا وارد سیستم شوید.')
        }


    }


    return (
        <>


            <div className='column is-4 '>

                <div className="card borderrad1 ">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={`${baseurl}/${img}`} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content" style={{

                        borderBottomRightRadius: '1rem',
                        borderBottomLeftRadius: '1rem'

                    }}>
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4 pinar">
                                    {title}</p>
                                <p className="pinar">
                                    {singer}</p>
                                <p className="subtitle is-6 yekan mt-1">
                                    <LocationOn/>
                                    {location}

                                    -

                                    <span>
                                        {city}
                                    </span>


                                </p>
                            </div>
                        </div>

                        <div className="content">
                            <p className='yekan clrtwotext'>
                                <Payment/>
                                <NumericFormat value={price} thousandSeparator=',' className='mx-1' displayType='text'/>
                                تومان
                            </p>
                        </div>


                        <button onClick={handleVideobuy}
                                className='button clrtwo borderrad1 has-text-white pinar has-text-weight-bold w wdith100 '>
                            خرید بلیط پخش زنده

                        </button>

                    </div>
                </div>

            </div>


        </>
    )
}
export default CurrentlyplayingCard;

