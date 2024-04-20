import {BoxCard} from '../../index'
import {useSelector} from "react-redux";
import {specialSelector} from "../../../Slices/ticketslice";
import {Stack, Skeleton} from '@mui/material'
import {baseurl} from "../../../services/services";


const Boxtwo = () => {

    const dataneeded = useSelector(specialSelector)
    const status = useSelector((state) => (state.ticket.status))


    let content
    if (status === 'done') {


        content = <BoxCard  key={dataneeded.id} image={`${baseurl}/${dataneeded.img}`} id={dataneeded.id}
                                singer={dataneeded.title}
                                time={dataneeded.date_text}
                                location={dataneeded.location} statusCode={dataneeded.active}
                                ts={dataneeded.date} city={dataneeded.city.name}/>
    } else {
        content = <Stack direction='column' alignItems='center'>
            <Skeleton variant='text' width='36%' height={50} className='concertwhiteborder'/>
            <Skeleton variant='rectangular' width='36%' height={100} className='concertwhiteborder'/>
            <Skeleton variant='rounded' width='36%' height={100} className='concertwhiteborder'/>
        </Stack>
    }


    return (
        <>

            <div className='columns is-flex flex-JCS-ACS m-0 navpadend150 ' style={{height: '100%'}}>

                    {content}




            </div>


        </>
    )
}
export default Boxtwo;