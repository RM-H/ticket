import icon from "../../Icons/icon_brightness_38.png";
import Accardion from "../extras/Landing/Accardion";
import {useSelector} from "react-redux";
import {faqSelector} from "../../Slices/ticketslice";
import {LinearProgress} from "@mui/material";

const Bottombox = () => {

    const status = useSelector((state)=>state.ticket.status)
    const dataneeded = useSelector(faqSelector)
    let content
    if (status==='done') {

        content = dataneeded.map((d)=>(
            <Accardion key={d.id} a={d.answer} q={d.q} id={d.id}/>
        ))


    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }




    return (
        <>
            <section>
                <div className='columns mx-0 is-multiline navpadend150 navpadstart150  mb-6'>



                            <div className='column is-12 '>

                                <img src={icon} alt="icon" style={{transform: 'translateY(1rem) translateX(1.6rem)'}}/>
                                <h3 className='is-size-4-mobile is-size-4 has-text-weight-bold pinar mb-3'>
                                    سوالات متداول

                                </h3>
                            </div>

                            {content}










                </div>


            </section>


        </>

    )
}
export default Bottombox