import React from 'react'
import Navbar from './Navbar'
import '../styles/About.css'
import RightCard from './RightCard'
import LeftCard from './LeftCard'
import airplane from '../assets/images/airplane.png'
import quality from '../assets/images/quality.png'
import compromise from '../assets/images/compromise.png'

function About() {
  return (
    <>
      <div className="bg-light">
        <div className="container py-5 mp-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Sobre Nosotros</h1>
              <p className="lead text-muted">
                En [Nombre de la Empresa], nos enorgullece ofrecer una experiencia única y memorable para todos nuestros huéspedes.
                Nuestra empresa se dedica a proporcionar servicios de alojamiento excepcionales,
                combinando elegancia, comodidad y hospitalidad para satisfacer las necesidades de cada uno de nuestros clientes.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid rounded-circle" /></div>
          </div>
        </div>
      </div>

{/* 
      <div className="bg-white py-5"></div>
      <div className="container py-5"></div> */}

      <RightCard title={"Nuestra Misión"} information={"En [Nombre de la Empresa], nuestra misión es crear momentos inolvidables para nuestros usuarios," +
        "ofreciendo un servicio personalizado y atención excepcional en un entorno acogedor y relajante." +
        "Nos esforzamos por superar las expectativas de nuestros clientes y convertir cada estancia en una experiencia" +
        "única y memorable."}
        img={airplane} />

      <LeftCard title={"Nuestro Compromiso con la Calidad"} information={"Nos comprometemos a proporcionar la más alta calidad en cada aspecto de" +
        " nuestro servicio, desde la selección de los mejores hoteles hasta la atención al detalle en cada interacción con nuestros huéspedes." +
        " Trabajamos incansablemente para mantener los más altos estándares de excelencia y garantizar la satisfacción total de nuestros clientes."}
        img={quality} />

      <RightCard title={"Responsabilidad Social"} information={"En [Nombre de la Empresa], nos comprometemos a ser una empresa social y ambientalmente responsable. " +
            "Nos esforzamos por minimizar nuestro impacto en el medio ambiente y contribuir positivamente a las comunidades en las que operamos. " +
            "Trabajamos en estrecha colaboración con organizaciones locales para apoyar iniciativas sociales y ambientales que beneficien a nuestros " +
            "clientes y al entorno que nos rodea."}
        img={compromise} />
    </>
  )
}

export default About