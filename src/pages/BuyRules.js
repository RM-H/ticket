import {useSelector} from "react-redux";
import {infoselector} from "../Slices/ticketslice";
import {LinearProgress} from "@mui/material";

const BuyRules = () => {

    const dataneeded = useSelector(infoselector)
    const status = useSelector((state) => (state.ticket.status))


    let content

    if (status === 'done') {
        let {rules} = dataneeded
        content = <article

            dangerouslySetInnerHTML={{__html: rules}}
        />
    } else {
        content = <div className='column is-12'>
            <LinearProgress variant='indeterminate' color='info'/>
        </div>
    }


    return (
        <>

            <div className='columns mx-0 padtopmobile navpadend150 navpadstart150'>
                <div className='column is-12 mt-6'>
                    <h2 className='pinar is-size-4-mobile is-size-3-desktop mb-3 has-text-weight-bold'>
                        قوانین و اطلاعیه ها

                    </h2>
                    {
                        content
                    }




                </div>
            </div>



        </>


    )
}

export default BuyRules;