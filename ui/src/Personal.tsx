import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type PersonalProps = {
    name: string,
    job: string,
    email: string
}

export class Personal extends Component<PersonalProps> {

    render(): React.ReactElement {
        return (
            <Row className={"border-bottom"}>
                <Col xs={12}>
                    <h1 className={"mt-5"}>{this.props.name}</h1>
                </Col>
                <Col xs={12}>
                    <h5>
                        {this.props.job} -
                        <a className={"ml-1"} href={"mailto:" + this.props.email}>{this.props.email}</a>
                    </h5>
                </Col>
            </Row>
        );
    }
}
