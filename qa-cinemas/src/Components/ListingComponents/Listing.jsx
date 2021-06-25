import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import TicketBookingForm from '../TicketBooking/TicketBookingForm';

const Listing = ({ data, newListing }) => {

    console.log("Props", data);
    //const{Title,Year, imdbID,Type ,Poster}

    let films = []
    if (newListing === "newListing") {

        data.map((tempVal) => {
            if (tempVal.Year > 2010) {
                films.push(tempVal)
            }
        })

    }

    const filmTimeOne = "Monday 10:30 - 12:00";
    const filmTimeTwo = "Wednesday 10:30 - 12:00";
    const filmTimeThree = "Friday 10:30 - 12:00";

    if (newListing === "listing") {
        return (

            <Row>

                {
                    data.map((tempVal) => (
                        <Col md="6" s="6" xs="12">
                            <Container>
                                <Row>
                                    <Col xs="auto">
                                        <div>
                                            <Card>
                                                <CardImg top width="10%" src={tempVal.Poster} alt={tempVal.Title} />
                                                <CardBody>
                                                    <CardTitle tag="h5">{tempVal.Title}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date: {tempVal.Year}</CardSubtitle>
                                                    <h3>Showing Time</h3>
                                                    <CardText>{filmTimeOne}</CardText>
                                                    <CardText>{filmTimeTwo}</CardText>
                                                    <CardText>{filmTimeThree}</CardText>
                                                    <TicketBookingForm timeOne={filmTimeOne} timeTwo={filmTimeTwo} timeThree={filmTimeThree} filmName={tempVal.Title}/>

                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    ))
                }
            </Row>
        )
    } else {
        return (

            <Row>

                {
                    films.map((tempVal) => (
                        <Col md="6" s="6" xs="12">
                            <Container>
                                <Row>
                                    <Col xs="auto">
                                        <div>
                                            <Card>
                                                <CardImg top width="10%" src={tempVal.Poster} alt={tempVal.Title} />
                                                <CardBody>
                                                    <CardTitle tag="h5">{tempVal.Title}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date: {tempVal.Year}</CardSubtitle>
                                                    <h3>Showing Time</h3>
                                                    <CardText>{filmTimeOne}</CardText>
                                                    <CardText>{filmTimeTwo}</CardText>
                                                    <CardText>{filmTimeThree}</CardText>
                                                    <TicketBookingForm timeOne={filmTimeOne} timeTwo={filmTimeTwo} timeThree={filmTimeThree} filmName={tempVal.Title}/>

                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    ))
                }
            </Row>
        )

    }
    
}

export default Listing;