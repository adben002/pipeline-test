import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ProfileProps = {
    details: string
}

export class Profile extends Component<ProfileProps> {

    render(): React.ReactElement {
        return (
            <React.Fragment>
                <Row className={"mt-4"}>
                    <Col xs={12}>
                        <h3>
                            <FontAwesomeIcon icon={['fas', 'bookmark']} className={"mr-2"}/>
                            Profile
                        </h3>
                    </Col>
                </Row>
                <Col xs={12}>{this.props.details}</Col>
            </React.Fragment>
        );
    }
}
