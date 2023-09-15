import { useState, useEffect } from "react";
import React from "react";
import { Form, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Review from "./Review"
import { useSelector } from "react-redux";

function HotelView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [hotel, setHotel] = useState([]);
  const params = useParams();
  console.log(params.id);

  // // fetchdata
  // const fetchData = async () => {
  //   const result = await fetch("/restaurants.json");
  //   result.json().then((data) => {
  //     setHotel(data.restaurants);
  //   });
  // };
  // console.log(hotel);

  // useSelector
  const {hotel} =useSelector(state=>state.hotelReducer)
    console.log(hotel);

  // find particular id
  const hotelId = hotel.find((item) => item.id == params.id);
  console.log(hotelId);

  // useEffect
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      {hotelId ? (
        <Row className="p-3">
          <Col md={3}>
            <Image
              className="rounded border p-2"
              src={hotelId.photograph}
              alt={hotelId.name}
              fluid
            ></Image>
          </Col>
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item>
                <h2>{hotelId.name}</h2>
                <p>{hotelId.neighborhood}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <p> Cuisine : {hotelId.cuisine_type}</p>
              </ListGroup.Item>
              <ListGroup.Item>
               
                <p> Address : {hotelId.address}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary" onClick={handleShow}>
                  Click Here To See Operating Hours
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ListGroup>
                      <ListGroup.Item>Monday:    {hotelId.operating_hours.Monday}</ListGroup.Item>
                      <ListGroup.Item>Tuesday:   {hotelId.operating_hours.Tuesday}</ListGroup.Item>
                      <ListGroup.Item>Wednesday: {hotelId.operating_hours.Wednesday}</ListGroup.Item>
                      <ListGroup.Item>Thursday:  {hotelId.operating_hours.Thursday}</ListGroup.Item>
                      <ListGroup.Item>Friday:    {hotelId.operating_hours.Friday}</ListGroup.Item>
                      <ListGroup.Item>Saturday:  {hotelId.operating_hours.Saturday}</ListGroup.Item>
                      <ListGroup.Item>Sunday:    {hotelId.operating_hours.Sunday}</ListGroup.Item>

                     
                    </ListGroup>
                  </Modal.Body>
                </Modal>
              </ListGroup.Item>
              <ListGroup.Item>
               <Review review={hotelId.reviews} />
                
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        "nothing to display"
      )}
    </>
  );
}

export default HotelView;
