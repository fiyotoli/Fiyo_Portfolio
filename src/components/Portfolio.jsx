import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa'; // Importing the date icon
import portfolioData from '../assets/portfolio'; // Import the portfolio data
import './Portfolio.css'; // Custom CSS for hover effects and styling

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(6); // Number of items visible at a time

  const categories = ["All", ...new Set(portfolioData.map((item) => item.category))];

  const filteredPortfolio = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter((item) => item.category === selectedCategory);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <Container className="mt-5 pt-5" id="portfolio">
      <h2 className="text-center mb-4">Portfolio</h2>
      {/* Category Tabs */}
      <div className="d-flex justify-content-center mb-4 flex-wrap">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? "success" : "outline-success"}
            className="mx-2 mb-2"
            onClick={() => {
              setSelectedCategory(category);
              setVisibleItems(6); // Reset visible items when category changes
            }}
          >
            {category}
          </Button>
        ))}
      </div>
      {/* Portfolio Items */}
      <Row>
        {filteredPortfolio.slice(0, visibleItems).map((item) => (
          <Col key={item.id} md={4} className="mb-4 d-flex">
            <Card className="h-100 shadow-sm w-100" style={{ border: "none", borderRadius: "10px" }}>
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.header}
                  className="portfolio-image"
                />
              </div>
              <Card.Body className="d-flex flex-column align-items-start">
                <Card.Title className="font-weight-bold text-success" style={{ fontSize: "1.25rem" }}>
                  {item.header}
                </Card.Title>
                <small className="d-flex align-items-center mb-2">
                  <FaCalendarAlt className="me-1 text-success" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </small>
                <Card.Text className="text-muted">
                  {item.description.length > 50
                    ? item.description.substring(0, 50) + "..." // Show only 50 characters
                    : item.description}
                </Card.Text>
                <Button
                  variant="success"
                  className="btn-hover align-self-start"
                  onClick={() => handleShowModal(item)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* More Button */}
      {visibleItems < filteredPortfolio.length && (
        <div className="text-center mt-4">
          <Button variant="success" onClick={handleShowMore}>
            More
          </Button>
        </div>
      )}
      {/* Modal for Item Details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success font-weight-bold">{selectedItem?.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <div style={{ flex: 1 }}>
            <img
              src={selectedItem?.image}
              alt={selectedItem?.header}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h5 className="text-success font-weight-bold">{selectedItem?.header}</h5>
            <p className="text-muted">{selectedItem?.description}</p>
            <small className="text-muted">
              <FaCalendarAlt className="me-1 text-success" />
              <span>{selectedItem?.date}</span>
            </small>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Portfolio;
