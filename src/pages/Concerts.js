import { ConcertsContainer , ConcertsBanner} from "../components";
import {useEffect} from 'react'


const Concerts = () => {

    useEffect(() => {
        // scroll to top when pagae is loaded
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            <main>
                <div className='columns is-multiline m-0 navpadend150 navpadstart150 padtopmobile'>
                    <ConcertsBanner/>
                    <ConcertsContainer/>


                </div>


            </main>


        </>
    )
}
export default Concerts;