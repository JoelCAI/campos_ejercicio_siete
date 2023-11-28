import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.css';
import { useState } from 'react';

function CardExercise() {

  const [message, setMessage] = useState(false);

  const toggleMessage = () => {
    setMessage(!message)
  }

  return (
    <div className='container-fluid d-flex p-5 justify-content-center gap-5'>
        <Card style={{ width: '18rem', borderRadius: '20px' }}>
          <Card.Img variant="top" src="../src/assets/pexels-pixabay-210019.jpg" className='rounded-top-4'/>
          <Card.Body>
            <Card.Title className='d-flex justify-content-center'>Cantidad Disponible: 05</Card.Title>
            <Card.Text className='d-flex justify-content-center text-center' >
                Disfrute de conducir pleno, disfrutando de un gran auto con servicio de calidad.
            </Card.Text>      
          
          </Card.Body>
        </Card> 
        <Card style={{ width: '18rem', borderRadius: '20px' }}>
          <Card.Body>
            <Card.Title className='d-flex justify-content-center fw-bold'> BMW 330i </Card.Title>
            <Card.Title className='d-flex justify-content-center fw-bold'> $ 25145,48</Card.Title>
            <Card.Title className='d-flex justify-content-center '> SKU: Mui-004</Card.Title>
            <Card.Text className='d-flex justify-content-center text-justify' >
            El BMW Serie 3 quiere en esta séptima generación sacar a relucir lo mejor de los atributos que a lo largo del tiempo lo han convertido en uno de los coches más laureados y completos de la historia. Más deportivo y confortable.
            </Card.Text>      
            <div className='container-fluid d-flex justify-content-center'>
                <Button variant="primary" className='d-flex align-items-center mt-1' onClick={toggleMessage}>Comprar</Button>
            </div>
          </Card.Body>
        </Card> 


         {message &&  (
           <div className='message__container'>
           <div onClick={toggleMessage} className='message__overlay'>
 
           </div>
           <div className='message__content'>
             <h2 className='message__title'>Agregado al Carrito</h2>
             <p>Gracias por su compra</p>
             <button className='message__close' onClick={toggleMessage}>
               Aceptar
             </button>
           </div>
 
         </div>
          
        )}

       
        
    </div>
  
  );
}

export default CardExercise;