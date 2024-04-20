import {NumericFormat} from "react-number-format";


const InquirySeatscard = ({seatNumber, seatPrice}) => {
    return (
        <>
            <div className='is-flex flex-JCS-ACS my-1'>


                <div
                    className='is-flex is-align-items-center  is-justify-content-center is-size-7 py-3 clrten has-text-white has-text-centered selectedcardborderright '
                    style={{width: '50%', height: '100%'}}>
                    <p className='yekan '>
                        <NumericFormat className='mx-1' displayType='text' thousandSeparator=',' value={seatPrice}/>
                        تومان
                    </p>

                </div>


                <div className='is-flex  p-2 cardboxborder2 ' style={{width: '30%', height: '100%'}}>
                    <p className='yekan is-size-7'>
                        صندلی شماره : {seatNumber}
                    </p>
                </div>


            </div>


        </>
    )
}


export default InquirySeatscard;