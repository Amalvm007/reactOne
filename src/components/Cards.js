import React from 'react'
import Card from 'react-bootstrap/Card';
import './Cards.css'
import { Link } from 'react-router-dom';

function Cards({hotels}) {
    console.log(hotels);
  return (
    <Link to={`view/${hotels.id}`} style={{textDecoration:'none' }} >
      <Card style={{ width: '18rem' }}>
          <Card.Img className='img p-3 ' variant="top" src={hotels.photograph} />
       <Card.Body>
        <Card.Title>{hotels.name}</Card.Title>
        <Card.Text>
          {hotels.neighborhood}
        </Card.Text>
        <Card.Text>
          {hotels.cuisine_type}
        </Card.Text>
        </Card.Body>
       </Card>
    </Link>
  )
}

export default Cards