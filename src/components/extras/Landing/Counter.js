import Countdown from "react-countdown";

const Counter = ({timestamp}) => {

    const render = ({hours, minutes, seconds}) => {
        return (
            <>

                <div className='columns is-flex-mobile pinar has-text-centered mx-0 my-1'>
                    <div className='column is-3 concertwhiteborder'>
                <span>

                    {seconds}
                </span>
                    </div>

                    <div className='column '>
                        <span>:</span>
                    </div>

                    <div className='column is-3 concertwhiteborder'>
                <span>
                    {minutes}
                </span>
                    </div>

                    <div className='column '>
                        <span>:</span>
                    </div>



                    <div className='column is-3 concertwhiteborder'>
                <span>
                     {hours}
                </span>
                    </div>

                </div>



                <div className='columns is-flex-mobile yekan has-text-centered '>
                    <div className='column is-4'>
                <span>

                   ثانیه
                </span>
                    </div>
                    <div className='column is-4'>
                <span>
                   دقیقه
                </span>
                    </div>
                    <div className='column is-4'>
                <span>
                     ساعت
                </span>
                    </div>

                </div>





            </>
        )
    }
    return (
        <>
            <Countdown renderer={render} date={timestamp*1000}/>


        </>
    )
}
export default Counter;