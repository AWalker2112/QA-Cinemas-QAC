import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Navigation from "./Navigation";
import ListingData from "../ListingComponents/ListingData";
import OpeningTimes from "../OpeningTimes/OpeningTimes";
import Home from "../Home/Home";
import Classification from "../Classifications/Classification";
import Screens from "../Screens/Screens";
const Director = () => {

    const queryHandler = (e) => {
        setSearch(e.target.value)
    }

    const [search, setSearch] = useState("");


    return (
        <>

            <Router>
                <Navigation
                    query={search}
                    queryFunction={queryHandler}

                />
                <Switch>

                    <Route path="/home" >
                        <Home />
                    </Route>

                    <Route path="/listings" >
                        <ListingData
                            query={search}
                            queryFunction={queryHandler}
                            listing="listing"
                        />
                    </Route>

                    <Route path="/newListings" >
                        <ListingData
                            query={search}
                            queryFunction={queryHandler}
                            listing="newListing"
                        />
                    </Route>

                    <Route path="/openingTimes" >
                        <OpeningTimes />
                    </Route>

                    <Route path="/classifications" >
                        <Classification>

                        </Classification>
                    </Route>

                    <Route path="/screens" >
                        <Screens />
                    </Route>

                    <Route path="/discussionBoard" >

                    </Route>


                </Switch>
            </Router>


        </>
    )
}

export default Director;