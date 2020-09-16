import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = () => {
  return (
  <Container>
    <Row sm={4}>
      <Col sm={2}></Col>
      <Col sm={2}>
        <img src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
      </Col>
      <Col sm={5}><br />
        <h4>
          L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g 
        </h4>
      </Col> 
      <Col sm={2}> <br /><br />
        <h3>R$ 225,90</h3>
      </Col>
    </Row>
    <hr />
    <Row sm={4}>
      <Col sm={2}></Col>
      <Col sm={2}>
        <img src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg" />
      </Col>
      <Col sm={5}><br />
        <h4>
          Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml
        </h4>
      </Col>
      <Col sm={2}><br /><br />
        <h3>R$ 299,00</h3>
      </Col>
    </Row>
    <hr />
    <Row sm={4}>
      <Col sm={2}></Col>
      <Col sm={2}>
        <img src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png" />
      </Col>
      <Col sm={5}><br />
        <h4>
          Senscience Inner Restore Intensif - Máscara Capilar 50ml
        </h4>
      </Col>
      <Col sm={2}><br /><br />
        <h3>R$ 99,90</h3>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
        <h3>Total: R$ 618,90</h3>
      </Col>
      <Col sm={3}>
        <button type="button" class="btn btn-primary">Comprar</button>
      </Col>
    </Row>
    <hr />
  </Container>
  );

}

export default Products;