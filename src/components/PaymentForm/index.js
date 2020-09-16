import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const PaymentForm = () => {

    return (

    <Container>
      <Row xs={2} md={2} lg={2}>
      <Col xs={2} md={2} lg={2}></Col>
      <Form.Group>
      <Form.Label>Bandeira do Cartão</Form.Label>
      <Form.Control as="select" multiple>
        <option>Mastercard</option>
        <option>Visa</option>
        <option>Elo</option>
        <option>Banricompras</option>
        <option>American Express</option>
        <option>Hipercard</option>
      </Form.Control>
      </Form.Group>
      </Row>

      <Row xs={2} md={4}>  
        <Col xs={2} md={2} lg={2}></Col>
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Nome do Titular" />
        </Form.Group> 
      </Row>

      <Row xs={2} md={4}>
        <Col xs={2} md={2} lg={2}></Col>
        <Form.Group>
          <Form.Label>Número do Cartão</Form.Label>
          <Form.Control size="lg" type="text" placeholder="00.00.00.00-0" />
        </Form.Group>
      </Row>

      <Row xs={1} md={2} lg={6}>
        <Col xs={2} md={2} lg={2}></Col>
        <Form.Group>
          <Form.Label>Validade</Form.Label>
          <Form.Group>
            <Form.Control  xs={2} as="select">
              <option>Mês</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Form.Control>
            <Form.Control  xs={2} as="select">
              <option>Ano</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
            </Form.Control>
          </Form.Group>
        </Form.Group>
      </Row>

      <Row xs={2} md={4}>
        <Col xs={2} md={2} lg={2}></Col>
        <Form.Group>
          <Form.Label>Código de Segurança</Form.Label>
          <Form.Control size="lg" type="text" placeholder="123" />
        </Form.Group>
      </Row>

      <Row>
        <Col xs={2} md={2} lg={2}></Col>
        <button type="button" class="btn btn-primary">Finalizar</button>
      </Row>
      <br />
        
    </Container>
        
    );
};

export default PaymentForm;