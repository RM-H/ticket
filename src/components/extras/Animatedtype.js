import Typed from 'typed.js';
import {useEffect,useRef} from "react";

const Animatedtype = () => {



        const el =useRef(null);

        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: ['کنسرت', 'همایش' , 'تئاتر'],

                typeSpeed: 100,
                backSpeed: 0,
                fadeOut: true,
                loop: true
            });

            return () => {

                typed.destroy();
            };
        }, []);


  return (
      <>

          <span className='clronetext' ref={el} />



      </>

  )
}
export default Animatedtype;