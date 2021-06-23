import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import ListingData from "../ListingComponents/ListingData";
import OpeningTimes from "../OpeningTimes/OpeningTimes";
import Home from "../Home/Home";
const Director = () => {

    return (
        <>

            <Router>
                <Navigation />
                <Switch>

                    <Route path="/home" >
                        <Home/>
                    </Route>

                    <Route path="/listings" >
                        <ListingData />
                    </Route>

                    <Route path="/newListings" >

                    </Route>

                    <Route path="/openingTimes" >
                        <OpeningTimes/>
                    </Route>

                    <Route path="/classifications" >

                    </Route>

                    <Route path="/screens" >

                    </Route>

                    <Route path="/discussionBoard" >

                    </Route>


                </Switch>
            </Router>


        </>
    )
}

export default Director;