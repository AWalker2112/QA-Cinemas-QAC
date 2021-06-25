import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';

{/* <TicketBookingForm timeOne={filmTimeOne} timeTwo={filmTimeTwo} timeThree={filmTimeThree} filmName={tempVal.Title}/> */ }

const TicketBookingForm = (props) => {
    const {
        buttonLabel,
        className,
        timeOne,
        timeTwo,
        timeThree,
        filmName } = props;



    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle} >Book Now!</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Booking for: {filmName}</ModalHeader>
                <ModalBody>
                    <Form>
                        
                        <FormGroup>
                            <Label for="dateAndTime">Date and Time</Label>
                            <br />
                            <Input type="select" name="select" id="exampleSelect">
                                <option>{timeOne}</option>
                                <option>{timeTwo}</option>
                                <option>{timeThree}</option>

                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="bookerName">Name of Booker</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Name of Booker" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="numberOfSeats">Number of Seats (Adult)</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="numberOfSeatsChildren">Number of Seats (Children) </Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </FormGroup>

                        <br />
                        <Button>Submit</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>

    );
}

export default TicketBookingForm;