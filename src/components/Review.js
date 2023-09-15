import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return (
    <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here to see review
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
         {
            review.map(item=>(
                <div className='my-2' >
                    <h6>{item.name}:  ( <span>{item.date}</span> ) </h6>
                    <p>Rating : {item.rating}</p>
                    <p>Comments : {item.comments}</p>
                </div>
            ))
         }
        </div>
      </Collapse> 
    </>
  )
}

export default Review