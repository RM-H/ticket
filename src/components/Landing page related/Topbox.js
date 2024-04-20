
import {BoxTwo,BoxOne} from '../index'
import bg from "../../wallpaper/backgrond_pattern.png";

const Topbox = () => {
    return (
        <>
            <section>


                <div className='columns mx-0 mt-3 is-multiline   '>

                    <div className='column padtopmobile is-12-mobile is-5-desktop mb-4 blackborder   py-6  navpadstart150 shadowone'>

                        <BoxOne/>


                    </div>

                    <div className='column padtopmobile py-6 is-12-mobile is-7-desktop mb-4 borderradmobile1  clrthree blackborder navpadend150' style={{
                        backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                    }}>
                        <BoxTwo/>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Topbox;