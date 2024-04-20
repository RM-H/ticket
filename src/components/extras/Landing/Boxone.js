import arrowicon from '../../../Icons/icon_arrow_88.png'
import {useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux";
import {infoselector} from "../../../Slices/ticketslice";
import { motion } from 'framer-motion'

const Boxone = () => {

const nav = useNavigate()

    const dataneeded = useSelector(infoselector)
    const status = useSelector((state)=>(state.ticket.status))


  return (
      <>
          <div className='columns'>
              <div className='column is-9 mt-6'>
                  <h1 className='pinar is-size-3 has-text-weight-bold'>
                      {status==='done'? dataneeded.h1:'...'}
                  </h1>


              </div>





          </div>

          <div className='columns is-multiline'>
              <div className='column is-12 '>
                  <article className='yekan justify is-size-5'>
                      {
                          status==="done"? dataneeded.subtitle:'...'
                      }
                  </article>
              </div>

              <div className='column is-12 my-3  '>
                  <button  className="button pinar clrone borderrad1 has-text-weight-semibold  " onClick={()=>nav('/concerts')}>
                      <span>مشاهده همه کنسرت ها</span>
                  </button>

                  <motion.img className='pr-3 ' draggable='false' src={arrowicon} alt="arrow"  animate={{opacity: 1, x: [-300,0,] , y:16.18 , rotate:360}} transition={{duration: 1.1}} />

              </div>

          </div>


      </>
  )
}
export default Boxone