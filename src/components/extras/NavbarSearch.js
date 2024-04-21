import {Form, Field, Formik} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from "yup";
import {Search} from '@mui/icons-material'


const NavbarSearch = () => {
    const nav = useNavigate()


    const handleSearch = (params) => {
        nav(`/results/${params.query}`)

    }


    return (
        <>
            {/*responsive to not show on mobile*/}
            <div className="field has-addons my-auto borderrad1  " style={{marginLeft: '1rem'}}>

                <Formik onSubmit={(values) => handleSearch(values)} initialValues={{query: ''}}
                        validationSchema={Yup.object().shape({

                            query: Yup.string()


                                .required('ضروری')

                        })}>
                    {({errors, touched}) => (
                        <Form className='wdith100 has-text-centered'>

                            <div className='is-flex is-align-items-center'>

                                <Field className='input yekan wdith100 has-text-centered p-0 clrseven has-text-white noborder '
                                       id="query" name="query"
                                       placeholder=" چیزی بنویسید" type='text' style={{borderRadius:0 }}/>


                                <button type='submit'

                                        className="button clrtwo pinar has-text-white "
                                        style={{outline: 'none', borderRadius:0}}>

                                    <Search className='noborder'  />


                                </button>


                            </div>


                        </Form>


                    )}


                </Formik>


            </div>


        </>


    )
}
export default NavbarSearch;