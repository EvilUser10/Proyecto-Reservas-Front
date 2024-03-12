import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <>
      <Navbar />
      <img src={primavera}
        alt="Hotels embrace equality" style={{height: '25%'}}/>
      <section>
        <h2>SOBRE NOSOTROS</h2>
        <p>
          En [Nombre de la Empresa], nos enorgullece ofrecer una experiencia única y memorable para todos nuestros huéspedes.
          Fundada en [Año de Fundación], nuestra empresa se ha dedicado a proporcionar servicios de alojamiento excepcionales,
          combinando elegancia, comodidad y hospitalidad para satisfacer las necesidades de cada uno de nuestros clientes.
        </p>
      </section>

      <section>
        <h2>SOBRE NOSOTROS</h2>
        <p>
          En [Nombre de la Empresa], nos enorgullece ofrecer una experiencia única y memorable para todos nuestros huéspedes.
          Fundada en [Año de Fundación], nuestra empresa se ha dedicado a proporcionar servicios de alojamiento excepcionales,
          combinando elegancia, comodidad y hospitalidad para satisfacer las necesidades de cada uno de nuestros clientes.
        </p>
      </section>

    </>
  )
}

export default About