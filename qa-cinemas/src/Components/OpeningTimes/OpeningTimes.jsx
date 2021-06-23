import React from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const OpeningTimes = () => {
    return (
        <>
            <h1>Opening Times</h1>
            <OpeningHoursTable />

        </>
    )

}


const OpeningHoursTable = (props) => {
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Day</th>
                        <th>Open</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Monday</td>
                        <td>10:00</td>
                        <td>23:00</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Tuesday</td>
                        <td>10:00</td>
                        <td>23:00</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Wednesday</td>
                        <td>10:00</td>
                        <td>23:00</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Thursday</td>
                        <td>10:00</td>
                        <td>23:00</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Friday</td>
                        <td>10:00</td>
                        <td>23:00</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Saturday</td>
                        <td>10:00</td>
                        <td>23:00</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Sunday</td>
                        <td>10:00</td>
                        <td>23:00</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default OpeningTimes;