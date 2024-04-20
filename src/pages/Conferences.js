import {ConfrenceBanner,ConferanceContainer}  from '../components'
import {useEffect} from "react";


const Conferences = () => {
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
              <div className='columns m-0 is-multiline navpadstart150 navpadend150 padtopmobile'>
                  <ConfrenceBanner/>
                  <ConferanceContainer/>

              </div>





          </main>



      </>

  )
}

export default Conferences;