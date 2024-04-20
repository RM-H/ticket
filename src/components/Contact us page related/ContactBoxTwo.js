import icon from "../../Icons/icon_brightness_38.png";
import {useSelector} from "react-redux";
import {infoselector} from "../../Slices/ticketslice";
import {LinearProgress} from "@mui/material";



const ContactBoxTwo = () => {
    const dataneeded = useSelector(infoselector)
    const status = useSelector((state) => (state.ticket.status))

    let content

    if (status==='done') {

        content = dataneeded.about
    } else {
      content=  <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }

    return (
        <>
            <div className='column is-12 mb-6'>
                <img src={icon} alt="icon" style={{transform: 'translateY(1rem) translateX(1.6rem)'}}/>
              <h2 className='pinar is-size-4-desktop is-size-4-mobile has-text-weight-bold'>
                  درباره تیکت آنلاین

              </h2>


              <article className='yekan justify is-size-6-desktop my-3'>

                  {
                     content
                  }



              </article>






          </div>




      </>


  )
}
export default ContactBoxTwo;