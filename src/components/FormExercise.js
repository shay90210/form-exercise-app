import { Formik, Field } from 'formik';
import { 
    Form,
    Label,
    FormGroup,
    Col
} from 'reactstrap';

const FormExercise = () => {

    return (
        <div>
            <h1>Shannon Bentley's Form Exercise</h1>
                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        password: '',
                        occupation: '',
                        state: ''
                    }}
                >
                    <Form className='form-styles'>
                        <FormGroup>
                            <Label htmlFor='fullName'>Full Name</Label>
                            <Col>
                                <Field 
                                    name='fullName'
                                    placeholder='Full Name'
                                    className='form-control'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='email'>Email</Label>
                            <Col>
                                <Field 
                                    name='email'
                                    placeholder='Email'
                                    className='form-control'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                                <Field 
                                    name='password'
                                    placeholder='password'
                                    className='form-control'
                                />
                        </FormGroup>
                    </Form>
                </Formik>
        </div>
    )
}

export default FormExercise;