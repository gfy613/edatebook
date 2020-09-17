import React from 'react';
import { Container, Form, Col, Row, Label, Button } from 'react-bootstrap';

function NewAddressForm(props) {

    return (
        <Container>
            <Form>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control onChange={props.handleInputChange} name="firstName" placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control onChange={props.handleInputChange} name="middleInitial" placeholder="M.I." />
                        </Col>
                        <Col>
                            <Form.Control onChange={props.handleInputChange} name="lastName" placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="phone" type="phone" placeholder="555-555-5555" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="birthday" type="birthday" placeholder="1/1/1900" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={props.handleInputChange} name="address" placeholder="1234 Main St" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="city" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="State" as="select" defaultValue="Choose...">
                            <option>Choose...</option>
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
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="zipCode" />
                    </Form.Group>
                </Form.Row>

                <Button onClick={props.handleSubmit()} variant="primary" type="submit">
                    Add New
    </Button>
            </Form>
        </Container>
    )
};
export default NewAddressForm;
