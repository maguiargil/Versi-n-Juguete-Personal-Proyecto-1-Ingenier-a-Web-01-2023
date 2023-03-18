const Footer = () => {
  return (
<footer>
    <div className="footer-content-container">
        <div>
            <div className="footer-content-first-row">
                <div><span className="footer-content-first-row-padding">Trabaja con nosotros</span></div>
                <div><span className="footer-content-first-row-padding">Términos y condiciones</span></div>
                <div><span className="footer-content-first-row-padding">Cómo cuidamos tu privacidad</span></div>
                <div><span className="footer-content-first-row-padding">Accesibilidad</span></div>
                <div><span className="footer-content-first-row-padding">Ayuda / PQR</span></div>
                <div><span>www.sic.gov.co</span></div>
            </div>
            <div className="footer-content-second-row">
                <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA. <br/>Carrera 17 Número 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
                </div>
            <div className="footer-content-third-row">
                <img className="footer-content-third-row-padding" src="/vectors/sic-logo.svg" alt="logo superintendencia industria y comercio"/>
                <img src="/vectors/precio-unidad-medida-logo.svg" alt="campaña precio por unidad de medida"/>
                </div>
        </div>
    </div>
</footer>
  )
}

export { Footer };