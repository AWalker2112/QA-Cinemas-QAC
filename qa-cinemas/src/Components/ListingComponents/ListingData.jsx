import axios from "axios";
import { useEffect, useState } from "react";
import Listing from "./Listing";
import { Container, Row, Col } from 'reactstrap';

const ListingData = (props) => {

    const { query, queryFunction, listing } = props;
    console.log("LISTING", listing);

    const [data, setData] = useState([]);
    const [responseURL, setResponseURL] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setIsLoaded] = useState(false);

    console.log("query", query);

    let urlMovie = `http://www.omdbapi.com/?apikey=851d6522&s=man`
    if (query !== "") {
        urlMovie = `http://www.omdbapi.com/?apikey=851d6522&s=${query}`
    } else {
        urlMovie = `http://www.omdbapi.com/?apikey=851d6522&s=man`;
    }

    useEffect(() => {
        setTimeout(() => {

            axios


                .get(urlMovie)


                .then((response) => {
                    console.log("STIRNG", response.data.Search);

                    if (response.data.Response === "False") {

                    } else {
                        setData(response.data.Search);
                    }

                    setResponseURL(response.data.Response);
                    setIsLoaded(true);
                })
                .catch((err) => {
                    setIsLoaded(true);
                    setError(err);
                });
        }, 1000)
    }, [query]);




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
    }
    else if (responseURL === "False") {
        return <h1>OHHH NOO SOMETHING WENT WRONG!!!!!!!!!
            <br />


            Try another search
        </h1>;

    }
    else {

        let listingTitle;
        let listingText;
        if(listing === "listing"){
            listingTitle = "Listings Page";
        }else{
            listingTitle = "New Listings Page";
            listingText = "Films released after 2010";
        }

        return (
            <>
                <Container>
                    <Row>
                        <Col md="6"><h1>{listingTitle}</h1>
                        <h2>{listingText}</h2></Col>
                    </Row>



                    <Listing
                        data={data}

                        newListing={listing}

                    />
                </Container>
            </>
        );


    }
};

export default ListingData;