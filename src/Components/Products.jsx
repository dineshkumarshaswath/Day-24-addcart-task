import React from 'react'
import { Button, Container, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Base from './Base.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Product({ key, name, rate,  rating, count, setCount }) {

  const [show, setShow] = useState(true)


  function addcart() {
    setShow(!show)
    setCount(count + 1)
  }
  function removecart() {
    setShow(!show)
    setCount(count - 1)
  }



  return (

    <div>
      <Col >
        <Card className="text-center" style={{ width: '11rem', height: '13rem' }} key={key}>
          <Card.Img variant="top" src="holder.js/100px160" /> 
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {rate}
            </Card.Text>
            <Card.Text className="rating">
              {rating}
            </Card.Text>
           
            {show ?
              <Button variant="primary" onClick={addcart}>
                Add Cart</Button>
              : <Button variant="danger" onClick={removecart}>
                Remove cart</Button>
            }
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}



function Things() {
  const thing = [{
    name: "Fancy Product"
    , rate: "$40.00 - $80.00", rating:"**"
  }, { name: "Special Item", rate: " $20.00 $18.00", rating:"***" },
  { name: "Sale Item", rate: "$50.00 $25.00",  rating:"*" }, {
    name: "Popular Item",
    rate: "$40.00", rating:"****"
  }, { name: "Sale Item", rate: "$50.00 $25.00", rating:"*"  }, {
    name: "Fancy Product",
    rate: "$120.00 - $280.00", rating:"****"
  }, { name: "Special Item", rate: "$20.00 $18.00", rating:"*** "  }, {
    name: "Popular Item",
    rate: "$40.00", rating:"*****" 
  }];
  const [count, setCount] = useState(0);

  return (



    <div>
      <div><Base
        count={count}
        setCount={setCount}
      />
      </div>

      <div className='things'>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">

          {thing.map((pro, idx) => (
            <Product
              key={idx}
              name={pro.name}
              rate={pro.rate}
             rating={pro.rating}
              count={count}
              setCount={setCount}

            />))}
        </Row>

      </div>
      <div className='footer'>
        <Container>Copyrights@mysite2023</Container>
      </div>

    </div >
  )
}
export default Things;