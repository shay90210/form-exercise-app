import { Formik, Field, ErrorMessage } from 'formik';
import { 
    Form,
    Label,
    FormGroup,
    Col,
    Input,
    Button,
    CardBody,
    Card,
    Container
} from 'reactstrap';
import { validateExerciseForm } from '../utils/validateExerciseForm';

const FormExercise = () => {

    const handleSubmit = (values) => {
        console.log('form values', values);
        console.log('in JSON format:', JSON.stringify(values));
    }

    return (
        <div>
            <h1 className='form-title'>Shannon Bentley's Form Exercise</h1>
                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        password: '',
                        occupation: '',
                        state: ''
                    }}
                    onSubmit={handleSubmit}
                    validate={validateExerciseForm}
                >
                    <Container className='mt-5'>
                        <Card>
                            <CardBody>
                                <Form className='form-style'>
                                    <FormGroup>
                                        <Label htmlFor='fullName' className='label-style'>Full Name</Label>
                                        <Col>
                                            <Field 
                                                name='fullName'
                                                placeholder='Full Name'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='fullName'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='email' className='label-style'>Email</Label>
                                        <Col>
                                            <Field 
                                                name='email'
                                                placeholder='Email'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='email'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='password' className='label-style'>Password</Label>
                                            <Field 
                                                name='password'
                                                placeholder='Password'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='password'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='occupation' className='label-style'>Occupation</Label>
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
                                    <FormGroup>
                                        <Label htmlFor='state' className='label-style'>State</Label>
                                            <Input
                                                id='state'
                                                name='Select State'
                                                type='select'
                                            >
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </Input>
                                    </FormGroup>
                            
                                    <Button
                                        color= 'primary'
                                        type='submit'
                                    >Submit</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Container>
                </Formik>
        </div>
    )
}

export default FormExercise;