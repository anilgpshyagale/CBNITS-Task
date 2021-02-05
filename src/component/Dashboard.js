import React, { Component } from 'react'
import './Loginpage.css'
import { Container, Row, Col, Menu } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {logout} from '../utills/index'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    gotohome=()=>
    {
        logout()
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <Container fluid>
                  

                    <Row>

                        <Col xs={2} style={{ "padding": "0px" }}>
                            <div className="leftcolumnstyle">
                                <ul>
                                    <li><a class="active" href="#home">Home</a></li>
                                    <li><a href="#news">News</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#about">About</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={10}>
                        <Row>
                        <div className="header">
                           
                            <button className="logoutbtn btn btn-primary" onClick={this.gotohome}>Logout</button>
                        </div>
                    </Row>

                    <Row className="card-paddingtop">
                        <Col>
                        <div className="card">
                            <div className="card-body">
                                <h2>mini statement</h2>
                                <p>To get a Mini Statement, users should give a missed call on 9223866666 from their registered mobile number. The call will then get disconnected automatically, and an SMS containing the details of recent transactions will be sent via an SMS on your registered mobile numbe</p>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <div className="card-body">
                                <h2>Service Request</h2>
                                <p>ServiceRequest is a record of a request for a procedure or diagnostic or other service to be planned, proposed, or performed, as distinguished by the ServiceRequest.intent field value, with or on a patient. proposed, or performed, as distinguished by the ServiceRequest.  </p>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <div className="card-body">
                                <h2>Inactive cards</h2>
                                <p>Customer name as embossed on the credit card. Card number in masked format. Status of the inactive card such as deactivated/ Block / cancelled / blocked / requested for cancellation. Amount outstanding against a card as on last statement date along with the currency.</p>
                            </div>
                        </div>
                        </Col>
                    </Row>

                  
                           
                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }
}
