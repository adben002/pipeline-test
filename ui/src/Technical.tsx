import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type TechnicalProps = {
}

export class Technical extends Component<TechnicalProps> {

    render(): React.ReactElement {
        return (
            <React.Fragment>
                <Row className={"mt-4"}>
                    <Col xs={12}>
                        <h3>
                            <FontAwesomeIcon icon={['fas', 'cogs']} className={"mr-2"}/>
                            Technical
                        </h3>
                    </Col>
                </Row>
                <Row className={"pl-5 pr-5"}>
                    <Col xs={4} className={"App-Item"}>Spring 3+</Col>
                    <Col xs={4} className={"App-Item"}>Hibernate / JPA</Col>
                    <Col xs={4} className={"App-Item"}>Kotlin</Col>
                    <Col xs={4} className={"App-Item"}>Git</Col>
                    <Col xs={4} className={"App-Item"}>AWS</Col>
                    <Col xs={4} className={"App-Item"}>Angular 1+</Col>
                    <Col xs={4} className={"App-Item"}>React</Col>
                    <Col xs={4} className={"App-Item"}>SQL (Oracle, DB2, MySQL)</Col>
                    <Col xs={4} className={"App-Item"}>Agile</Col>
                    <Col xs={4} className={"App-Item"}>jQuery</Col>
                    <Col xs={4} className={"App-Item"}>JMS</Col>
                    <Col xs={4} className={"App-Item"}>CSS</Col>
                    <Col xs={4} className={"App-Item"}>Lucene</Col>
                    <Col xs={4} className={"App-Item"}>Python</Col>
                    <Col xs={4} className={"App-Item"}>Gradle</Col>
                    <Col xs={4} className={"App-Item"}>Maven</Col>
                    <Col xs={4} className={"App-Item"}>Webpack</Col>
                    <Col xs={4} className={"App-Item"}>Selenium</Col>
                    <Col xs={4} className={"App-Item"}>Thymeleaf</Col>
                </Row>
            </React.Fragment>
        );
    }
}
