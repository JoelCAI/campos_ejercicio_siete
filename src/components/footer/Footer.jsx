
const Footer = () => <footer className="page-footer font-small blue pt-4 bg-primary">
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-light">Ejercicio 7</h5>
                <p className="text-light">Desarrollo de la consigna 7</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-light">Store</h5>
                <ul className="list-unstyled ">
                    <li><a href="#!" className="text-light">Nosotros</a></li>
                    <li><a href="#!" className="text-light">Tienda</a></li>
                    <li><a href="#!" className="text-light">Contacto</a></li>
                    <li><a href="#!" className="text-light">Horarios</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-light">Support</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="text-light">Ayuda</a></li>
                    <li><a href="#!" className="text-light">Envíos</a></li>
                    <li><a href="#!" className="text-light">Reservas</a></li>
                    <li><a href="#!" className="text-light">Preguntas Frecuentes</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-light">© 2020 Copyright: 
        <a href="#" className="text-light p-2 text-decoration-none"> www.tusitio.com</a>
    </div>

</footer>

export default Footer
