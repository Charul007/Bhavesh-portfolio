import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useLocation } from "react-router-dom";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <div>No project details available</div>;
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Details | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Details </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
        
              <div  className="po_item">
                <img src={data.img} alt="" loading="lazy" />
                <div className="content">
                </div>
              </div>
              <h1>{data.description}</h1>
              <h4>{data.note.concept}</h4>
              <p>{data.note.material}</p>
              <p>{data.note.processs}</p>
                 
        </div>
        <div className="po_items_ho">
        
          {data.images.map((d, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={d} alt="" loading="lazy" />
                </div>
              );
            })} 

        </div>
      </Container>
    </HelmetProvider>
  );
};
