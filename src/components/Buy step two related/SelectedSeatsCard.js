import {NumericFormat} from 'react-number-format'


const SelectedSeatsCard = ({details,setitems, items}) => {


    const handleclick = ()=>{
        const filtered = items.filter((item)=>(
            item!==details.id.toString()
        ))
        setitems(filtered)
        document.getElementById(details.id).style.fill='#C6C9DF'
    }


  return (
      <>
          <div className='column is-6-mobile is-2-desktop is-flex is-align-items-center'>

              <div className=' is-flex  p-2 cardboxborder2 ' style={{width:'30%', height:'100%'}}>
                 <p className='yekan is-size-7'>
                     صندلی شماره : {details.id}
                 </p>
              </div>



              <div className='is-flex is-align-items-center  is-justify-content-center is-size-7 py-3 clrseven has-text-white has-text-centered selectedcardborderright ' style={{width:'50%' , height:'100%'}}>
                  <p className='yekan '>
                      <NumericFormat displayType='text' thousandSeparator=',' suffix='      ' value={details.price}/>
                     تومان
                  </p>

              </div>

              <div className='is-flex is-justify-content-center ' style={{width:'20%' , height:'100%'}}>
                  <button onClick={handleclick} className='btn clreight has-text-white wdith100 noborder selectedcardborderleft'>
                      <i className="bi bi-trash3"></i>
                  </button>



              </div>



          </div>



      </>


  )
}

export default SelectedSeatsCard;