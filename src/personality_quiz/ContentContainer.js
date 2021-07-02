import React, { useState } from "react";
import "./ContentContainer.css";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar, { Page } from "./NavigationBar.js";
import PageContainer from "./PageContainer.js";

export default function PageContent(props) {
  const [activePage, setActivePage] = useState(Page.WELCOME);

  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} xs={{ span: 12 }} className="content-container-wrapper">
          <div className="content-container">
            <NavigationBar activePage={activePage} />
            <PageContainer activePage={activePage} setActivePage={setActivePage} questions={props.questions} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

