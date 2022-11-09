import { 
    Form,
    Label,
    FormGroup,
    Col,
    Input,
    Button,
    CardBody,
    Card,
    Container,
} from 'reactstrap';
import { useState } from 'react';

const FormExercise = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your form has been submitted. Thank you ${fullName}`)
    }

    return (
        <div>
            <h1 className='form-title'>Shannon Bentley's Form Exercise</h1>
                <Container className='mt-5'>
                    <Card>
                        <CardBody>
                            <Form 
                                className='form-style'
                                onSubmit={handleSubmit}
                            >
                                <FormGroup>
                                    <Label htmlFor='fullName' className='label-style'>Full Name</Label>
                                    <Col>
                                        <Input 
                                            type='text'
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='email' className='label-style'>Email</Label>
                                    <Col>
                                        <Input 
                                            type='text'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password' className='label-style'>Password</Label>
                                    <Col>
                                        <Input 
                                            type='text'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='occupation' className='label-style'>Occupation</Label>
                                        <Input 
                                            id='occupation'
                                            name='select'
                                            type='select'
                                            value={occupation}
                                            onChange={(e) => setOccupation(e.target.value)}
                                        >
                                            <option>Actress</option>
                                            <option>Banker</option>
                                            <option>Chef</option>
                                            <option>Coach</option>
                                            <option>Developer</option>
                                            <option>Doctor</option>
                                            <option>Engineer</option>
                                            <option>Nurse</option>
                                            <option>Pharmacist</option>
                                            <option>Teacher</option>
                                        </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='state' className='label-style'>State</Label>
                                        <Input
                                            id='state'
                                            name='select'
                                            type='select'
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
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
                                <Button color= 'primary' type='submit'>Create User</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
        </div>
    )
}

export default FormExercise;