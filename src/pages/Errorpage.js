import {Particlesbg} from '../components'
import {useNavigate} from 'react-router-dom'

const Errorpage = () => {

    const nav = useNavigate()
    return (
        <>

            <div style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'

            }}>

                <Particlesbg/>

                    <div className='containerwidth is-flex is-flex-direction-column is-justify-content-center svgheight is-align-items-center ' style={{zIndex:'1000'}}>

                        <img draggable={false} src="/images/404.png" alt="not fount"/>
                        <h1 className='pinar my-3 is-size-3'>
                            صفحه مورد نظر یافت نشد :(
                        </h1>
                        <button onClick={()=>nav('/')} className='button clrone pinar borderrad1'>
                            خانه
                        </button>


                    </div>



            </div>


        </>

    )
}
export default Errorpage;