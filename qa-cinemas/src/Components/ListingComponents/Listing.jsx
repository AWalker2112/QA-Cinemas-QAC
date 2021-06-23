import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Listing = (props) => {
    console.log("THIS IS THE LOG");
    console.log(props);
    const { Title, Year, imdbID, Type, Poster } = props.listing;
    return (
        <>
            <p></p>



            <Container>

                <Row>

                    <Col xs="auto">
                        <div>
                            <Card>
                                <CardImg top width="10%" src={Poster} alt={Title} />
                                <CardBody>
                                    <CardTitle tag="h5">{Title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date: {Year}</CardSubtitle>
                                    <h3>Showing Time</h3>
                                    <CardText>Monday 10:30 - 12:00</CardText>
                                    <CardText>Wednesday 10:30 - 12:00</CardText>
                                    <CardText>Friday 10:30 - 12:00</CardText>
                                    <Button>Book Now!</Button>

                                </CardBody>
                            </Card>
                        </div>
                    </Col>


                </Row>

            </Container>

        </>
    )
}

export default Listing;