import {Accordion,AccordionSummary,Typography,AccordionDetails,} from '@mui/material'



const Accardion = ({q , a ,id}) => {



  return (
      <>
          <div className='column px-0 is-12'>
              <Accordion  className='cardboxborder py-4'>
                  <AccordionSummary
                      expandIcon={<i className="bi bi-arrow-down is-size-4"></i>}
                      aria-controls="panel1a-content"
                      id={ `accard-${id}`}
                  >
                      <Typography className='pinar is-size-5-mobile is-size-6 has-text-weight-bold '> {q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography component='article' className='yekan is-size-6'>
                          {a}
                      </Typography>
                  </AccordionDetails>
              </Accordion>



          </div>














      </>

  )
}
export default Accardion;