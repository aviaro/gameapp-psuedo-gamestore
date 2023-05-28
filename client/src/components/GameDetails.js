import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Container, Row, Col,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GameDetails = ({ game }) => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();

  const getback=()=>{
    navigate('/dashboard');
  }
  return (
    <Container className="game-Details">
      <Row>
        <Col>
          <h3>Game Name : {product.gameName}</h3>
          <p>Price: {product.gamePrice}</p>
          <p>Description: {product.gameDescription}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={product.gameImage} alt={product.gameName} style={{ width: '20%', maxHeight: '400px',borderRadius:10 }} />
          
        </Col>
        <Button style={{marginTop:15}} onClick={ getback}>back</Button>
      </Row>
    </Container>
  );
};

export default GameDetails;
