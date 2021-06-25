import { List } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const Classification = () => {
    return (
        <div>
            <br />
            <Container>
                <h1>What is classification? <Badge color="secondary">New</Badge></h1>
                <List type="unstyled">
                    <li>Classification is the process of giving age ratings and content advice to
                        films and other audiovisual content to help children and families choose what’s right for them and avoid what’s not.

                        Recommendations are made by our Compliance Officers based on the BBFC’s published Guidelines.
                        These are the result of extensive consultation with people right across the UK, research,
                        and the BBFC’s more than 100 years of experience. They reflect people’s views on film, DVD,
                        Blu-ray, video on demand (VoD) regulation and are regularly updated.</li>

                </List>

                <h1>The process <Badge color="secondary">New</Badge></h1>
                <List type="unstyled">
                    <li>Films for cinema release are usually seen by at least two of our Compliance Officers,
                        and in most cases, their age rating recommendation is approved by a Compliance Manager.

                        If Compliance Officers are in any doubt, if a film is on the borderline between two categories,
                        or if important policy issues are involved, it may be seen by other members of the BBFC, up to and including the Chief Executive,
                        the President and Vice Presidents. Occasionally, we may also call for expert advice about the legal acceptability of film content or its potential for harm.

                        DVDs and VoD films and series are normally seen by one Compliance Officer, but opinions from other Officers, the Compliance Manager,
                        the Head of Compliance and Board of Classification may be required for more difficult content.</li>

                </List>
            </Container>
        </div>
    )


}


export default Classification;