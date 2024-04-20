import bar from '../../Icons/barcodeicon.png'
import {useNavigate} from 'react-router-dom'





const TicketScheduleCard = ({times,law}) => {





    const nav = useNavigate()

    let datecalcultaed = new Date(times.time_stamp*1000).getHours()


    let content

        content =
            <>
                <div className=' is-flex  cardboxborder ' style={{width:'30%', height:'100%'}}>
                    <img className=' my-auto' src={bar} alt="barcode"/>
                </div>



                <div className='is-inline-block is-size-7 p-3 clrseven has-text-white has-text-centered borderrad1 has-text-right' style={{width:'70%'}}>
                    <p className='yekan'>
                        {times.date_text}
                    </p>
                    <p className='yekan my-1'>
                        ساعت :  {datecalcultaed}
                    </p>
                    <p className='yekan clronetext'>
                        <span className='has-text-white'> وضعیت :</span>
                        موجود است
                    </p>
                    {
                        !law ?
                            <button disabled={!law}
                                    className='button mt-2 pinar clrone is-size-7 has-text-weight-bold'
                                    style={{width: '100%'}}>
                               ابتدا قوانین را مطالعه کنید.
                            </button>

                            :

                            <button disabled={!law} onClick={() => nav(`/seating/${times.id}`)}
                                    className='button mt-2 pinar clrone is-size-7 has-text-weight-bold'
                                    style={{width: '100%'}}>
                                خرید بلیط
                            </button>

                    }

                </div>


            </>


    return (
        <>

            <div className='column is-12-mobile is-3-desktop is-flex is-align-items-center'>


                {content}


            </div>






        </>

    )
}
export default TicketScheduleCard;