import {useState} from 'react'
import {citySelector} from "../../Slices/ticketslice";
import {useSelector} from "react-redux";
import {ArrowDropDown} from '@mui/icons-material'



const NavbarDropDown = () => {






    const [show, setShow] = useState(false)


    // getting data from redux and displaying cities
    const dataneeded = useSelector(citySelector)
    const status = useSelector((state) => (state.ticket.status))


    let citiesList
    if (status === 'done') {
        citiesList = dataneeded.map((item) => (

            <button key={item.id} onClick={() => {
                localStorage.setItem('city', JSON.stringify(item));
                setShow(false)
                window.location.reload()
            }} className="button noborder wdith100 clrseven pinar is-block navbardropwdownhover has-text-white">
                {item.name}
            </button>
        ))

    } else {
        citiesList = <p className='has-text-white'>...</p>
    }


    let Selectedcity
    if (localStorage.getItem('city')) {
        Selectedcity = JSON.parse(localStorage.getItem('city')).name


    }else {
        Selectedcity=
            <>

                همه شهر ها       <ArrowDropDown/>
            </>
    }


    return (
        <>


            <div className={`dropdown ${show && 'is-active'}`}>
                <div className="dropdown-trigger">
                    <button onClick={() => setShow(!show)} className="button pinar clrseven has-text-white"
                            aria-haspopup="true" aria-controls="dropdown-menu3" style={{borderRadius:0}}>
                        <span>{Selectedcity}</span>

                    </button>
                </div>
                <div className="dropdown-menu " id="dropdown-menu3" role="menu">
                    <div className="dropdown-content clrseven">


                        <button onClick={() => {
                            localStorage.removeItem('city')
                            setShow(false)
                            window.location.reload()
                        }}
                                className="button noborder wdith100 clrseven pinar is-block navbardropwdownhover has-text-white">
                            همه شهر ها

                        </button>

                        {
                            citiesList
                        }

                    </div>
                </div>
            </div>

        </>

    )
}
export default NavbarDropDown;