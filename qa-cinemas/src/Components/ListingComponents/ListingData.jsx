import axios from "axios";
import { useEffect, useState } from "react";
import Listing from "./Listing";
import { Container, Row, Col } from 'reactstrap';

const ListingData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setIsLoaded] = useState(false);
    //promise has three stages
    //Pending
    //success - TICK
    //failure - TICK

    useEffect(() => {
        setTimeout(() => {

            axios
                .get(`http://www.omdbapi.com/?apikey=851d6522&s=man`)
                .then((response) => {
                    console.log("STIRNG", response.data.Search);

                    setData(response.data.Search);
                    setIsLoaded(true);
                })
                .catch((err) => {
                    setIsLoaded(true);
                    setError(err);
                });
        }, 1000)
    }, []);

    


    if (error) {
        return <h1>OHHH NOO SOMETHING WENT WRONG!!!!!!!!!
            <br />
            {error.message}
        </h1>;
    } else if (!loaded) {
        return (
            <>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

            </>
        );
    } else {
        console.log("DATA", data);
        return (
            <>
                <Container>

                    <h1>Listings Page</h1>
                    
                    <Row>
                        {
                            data.map((tempVal) => (


                                <Col md="4" s="6" xs="12"><Listing key={tempVal.imdbID} listing={tempVal} /></Col>





                            ))

                        }
                    </Row>
                </Container>
            </>
        );
    }
};

export default ListingData;