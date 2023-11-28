import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormSix() {
  return (
    <div className='d-flex justify-content-center p-5'>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Doe" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su número" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRepassword">
            <Form.Label>Confirmar Password</Form.Label>
            <Form.Control type="password" placeholder="Re-ingrese su contraseña" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
  );
}

export default FormSix;
