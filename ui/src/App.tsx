import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Card} from "react-bootstrap";
import './App.css';

type YearObject = {
    from: Date,
    to?: Date
}

type JobInfo = {
    role: string
    place: string,
    placeUrl: string,
    range: YearObject,
    info: string[]
}

function formatZeroIndexedDate(day: number, month: number, year: number) {
    return new Date(year, month - 1, day);
}

const jobs: JobInfo[] = [
    {
        "role": "Contract Software Engineer",
        "place": "RBS",
        "placeUrl": "https://www.business.rbs.co.uk/business/ways-to-bank/bankline.html",
        range: {
            "from": formatZeroIndexedDate(4, 6, 2018)
        },
        info: [
            "Architecture, design and implementation of a new Kotlin microservice for New Bankline to perform regulatory Confirmation Of Payee verifications.",
            "Collaborative design and coordination of broader business resources, for the creation of a DB2 database for Confirmation Of Payee checks.",
            "Coordination with an under-development third-party service, to meet the API requirements.",
            "API design across many microservices accompanied by consumer requirements gathering, finally producing a full API with associated swagger documentation.",
            "Lead the addition of Cucumber features based on acceptance tests to several Java and Kotlin microservices.",
            "Microservice implementation for accounts search, transactions search and search results pdf export.",
            "Payment export requirement gathering. With the subsequent implementation of the said service."
        ]
    },
    {
        "role": "Senior Developer",
        "place": "Scott Logic",
        "placeUrl": "http://www.scottlogic.com/",
        range: {
            "from": formatZeroIndexedDate(1, 4, 2017),
            "to": formatZeroIndexedDate(4, 6, 2018)
        },
        info: [
            "Consultancy work for Hargreaves Lansdown active savings project in a high-pressure agile delivery environment. Involved performance improvements through query refinement and caching. Collaboration in the design and implementation of an interface to open bank accounts and transfer funds.",
            "Interviewed development candidates. Ranging from intern to lead developer.",
            "Development of an open-source java library for POJO and hibernate test data generation. Release process involved publishing to maven central."
        ]
    },
    {
        "role": "Senior Developer, Joint Technical Lead",
        "place": "Civica Digital",
        "placeUrl": "https://www.civica.com/en-GB/civica-digital/",
        range: {
            "from": formatZeroIndexedDate(1, 1, 2017),
            "to": formatZeroIndexedDate(1, 4, 2017)
        },
        info: [
            "IPL merged into Civica.",
            "Optimisation and performance tuning for complex algorithms involving MySQL DB, Java concurrency, spring batch and Lucene.",
            "Lead developer for RSP sub-project providing inbound and outbound interfaces. It involved the processing of XML data utilising a pub-sub design.",
            "Upon delivery of the service, explained the high-level design and implementation to the service team.",
            "Implementation of a tool validating migrated data.",
            "Implementation of a framework utilising Selenide and PhantomJS for integration testing of the system."
        ]
    },
    {
        "role": "Senior Developer, Joint Technical Lead",
        "place": "IPL (Information Processing Limited)",
        "placeUrl": "http://www.ipl.com/",
        range: {
            "from": formatZeroIndexedDate(1, 10, 2015),
            "to": formatZeroIndexedDate(1, 1, 2017)
        },
        info: [
            "Architected, designed and implemented a repricing and compliance engine for a product management system of railway tickets.",
            "Technical advisor/supervisor and reviewer for development teams based in Poland and the UK.",
            "Core development and support of a parallel spring batch process for exporting timeline data from several database tables also included calculation of incremental changes. This process would publish files to AWS S3 buckets and send SQS messages.",
            "Implementation of an inbound interface for receiving files with approximately 22 million XML records then inserting and translating that data into the system's database.",
            "Front-end interface for large amounts of data manipulation using AngularJs.",
            "Optimisation and performance tuning for complex algorithms involving extensive data and database queries."
        ]
    },
    {
        "role": "Developer",
        "place": "IPL (Information Processing Limited)",
        "placeUrl": "http://www.ipl.com/",
        range: {
            "from": formatZeroIndexedDate(15, 7, 2013),
            "to": formatZeroIndexedDate(1, 10, 2015)
        },
        info: [
            "Performed CRUD operations using MySQL, Hibernate, Spring MVC, JSP, and jQuery. With a very complex underlying data-structure and complicated business requirements.",
            "Development was done in eclipse using git as a source control management system."
        ]
    },
    {
        "role": "Junior Programmer (University placement)",
        "place": "Plymouth Marine Laboratory",
        "placeUrl": "http://www.pml.ac.uk/",
        range: {
            "from": formatZeroIndexedDate(1, 8, 2011),
            "to": formatZeroIndexedDate(20, 9, 2012)
        },
        info: [
            "Processing of hyperspectral and LiDAR images captured from an aeroplane using a cluster queue management system.",
            "Implementation of a DEM creation script using BASH, this would create a script that would be fed into an ArcGIS system to patch elevation models and LiDAR data together.",
            "The completion of a website, for searching satellite images via a polygon."
        ]
    }
];

let counter = 0;
for (let i = 0; i < jobs.length; i++) {
    let toDate = jobs[i].range.to || new Date();
    counter += (toDate.getTime() - jobs[i].range.from.getTime());
}

function formatDate(date: Date | undefined) {

    if (!date) {
        return 'Present'
    }

    // Create a list of names for the months
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // return a formatted date
    return months[date.getMonth()] + '-' + date.getFullYear();

}

const App: React.FC = () => {
    return (
        <Container>
            <Row className={"border-bottom"}>
                <Col xs={12}>
                    <h1 className={"mt-5"}>Adam Bennett</h1>
                </Col>
                <Col xs={12}>
                    <h5>
                        Senior full-stack web developer -
                        <a className={"ml-1"} href={"mailto:adben002@gmail.com"}>adben002@gmail.com</a>
                    </h5>
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col xs={12}>
                    <h3>
                        <FontAwesomeIcon icon={['fas', 'bookmark']} className={"mr-2"}/>
                        Profile
                    </h3>
                </Col>
            </Row>
            <Col
                xs={12}> {`Senior full-stack web developer with ${Math.floor(counter / 31536000000)}+ years' experience across several industries designing, architecting, implementing and testing web applications. With enthusiasm for producing agile high-performance, high-resilience customer-focused products.`}
            </Col>
            <Row className={"mt-4"}>
                <Col xs={12}>
                    <h3>
                        <FontAwesomeIcon icon={['fas', 'cogs']} className={"mr-2"}/>
                        Technical
                    </h3>
                </Col>
            </Row>
            <Row className={"pl-5 pr-5"}>
                <Col xs={4} className={"App-Item"}>Java</Col>
                <Col xs={4} className={"App-Item"}>API Design</Col>
                <Col xs={4} className={"App-Item"}>Database Design</Col>
                <Col xs={4} className={"App-Item"}>Agile Delivery</Col>
                <Col xs={4} className={"App-Item"}>Microservice Architecture</Col>
                <Col xs={4} className={"App-Item"}>Spring 3+</Col>
                <Col xs={4} className={"App-Item"}>Git</Col>
                <Col xs={4} className={"App-Item"}>SQL (Oracle, DB2, MySQL)</Col>
                <Col xs={4} className={"App-Item"}>Kotlin</Col>
                <Col xs={4} className={"App-Item"}>Hibernate / JPA</Col>
                <Col xs={4} className={"App-Item"}>Amazon Web Services</Col>
                <Col xs={4} className={"App-Item"}>React</Col>
                <Col xs={4} className={"App-Item"}>Lucene</Col>
                <Col xs={4} className={"App-Item"}>Python</Col>
                <Col xs={4} className={"App-Item"}>Selenium</Col>
                <Col xs={4} className={"App-Item"}>Maven</Col>
                <Col xs={4} className={"App-Item"}>BASH</Col>
            </Row>
            <Row className={"mt-4"}>
                <Col xs={12}>
                    <h3>
                        <FontAwesomeIcon icon={['fas', 'briefcase']} className={"mr-3"}/>
                        Experience
                    </h3>
                </Col>
            </Row>
            {jobs.map((value, index) =>
                <Col xs={12} className={"mt-2"} key={index}>
                    <Card>
                        <Card.Header as={"h4"} className={"bg-info text-white"}>
                            {value.role}
                        </Card.Header>

                        <Card.Body>
                        <span>
                            <strong>
                              <a target={"_blank"} rel="noopener noreferrer"
                                 href={value.placeUrl} className={"mr-1"}>{value.place}</a>
                            </strong>
                        </span>
                            <span
                                className="text-grey-color">({formatDate(value.range.from)} to {formatDate(value.range.to)})</span>
                            <ul>
                                {value.info.map((x, i) =>
                                    <li key={i}>{x}</li>
                                )}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            )}


            <Row className={"mt-4 no-print"}>
                <Col xs={12}>
                    <h3>
                        <FontAwesomeIcon icon={['fas', 'graduation-cap']} className={"mr-3"}/>
                        Education
                    </h3>
                </Col>
            </Row>
            <Col xs={12} className={"mt-2 no-print"}>
                <Card>
                    <Card.Header as={"h4"} className={"bg-success text-white"}>
                        <a target={"_blank"} rel="noopener noreferrer" href="http://www.bath.ac.uk/"
                           className="text-white">
                            University of Bath
                        </a>
                    </Card.Header>

                    <Card.Body>
                        <span>
                            <a target={"_blank"} rel="noopener noreferrer"
                               href="http://www.bath.ac.uk/study/ug/prospectus/subject/computer-science-mathematics/">
                              <strong>Computer Science and Mathematics</strong>
                            </a>
                        </span>,
                        <span className={"ml-1"}>
                            1st Class Bachelor's degree
                        </span>
                        <span className={"text-grey-color ml-1"}>
                            (Oct-09 to Jul-2013)
                        </span>
                        <p className="text-justify">
                            Modules included parallel programming and computer algebra. Dissertation on learning aids in
                            educational software.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <hr className={"no-print"}/>
            <Row className={"mt-4 no-print"}>
                <Col className={"text-center"}>
                    <a aria-label="Twitter" target={"_blank"} rel="noopener noreferrer"
                       href="https://twitter.com/adben002">
                        <FontAwesomeIcon icon={['fab', 'twitter']} className={"mr-3"} size={"3x"}/>
                    </a>
                    <a aria-label="LinkedIn" target={"_blank"} rel="noopener noreferrer"
                       href="https://www.linkedin.com/in/adben002">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} className={"mr-3"} size={"3x"}/>
                    </a>
                    <a aria-label="GitHub" target={"_blank"} rel="noopener noreferrer"
                       href="https://github.com/adben002">
                        <FontAwesomeIcon icon={['fab', 'github']} size={"3x"}/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
