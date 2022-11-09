import { Formik, Field } from 'formik';
import { 
    Form,
    Label,
    FormGroup,
    Col,
    Input
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
                        <FormGroup>
                            <Label htmlFor='occupation'>Occupation</Label>
                                <Input 
                                    id='occupation'
                                    name='Select Occupation'
                                    type='select'
                                >
                                    <option>occupation1</option>
                                    <option>occupation2</option>
                                    <option>occupation3</option>
                                    <option>occupation4</option>
                                    <option>occupation5</option>
                                    <option>occupation6</option>
                                    <option>occupation7</option>
                                    <option>occupation8</option>
                                </Input>
                        </FormGroup>
                    </Form>
                </Formik>
        </div>
    )
}

export default FormExercise;