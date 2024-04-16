import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
          <nav className='container__nav'>
            <a href="#">Logo</a>
            <ul className='container__lista'>
              <li className='lista' ><a href="#">Inicio</a></li>
              <li className='lista' ><a href="#">Sobre Mi</a></li>
              <li className='lista' ><a href="#">Habilidades</a></li>
              <li className='lista' ><a href="#">Mis proyectos</a></li>
              <button className='button'>Contactame</button>
            </ul>
          </nav>
     </header>


     
     <section>
      <div className="container__information">
            <div className='texto'>
              <h2>Hola! soy Gerardo un <span>Ingeniero de Software</span></h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ex numquam odio tenetur esse neque hic aliquid, alias eveniet veniam dolores minus voluptas. Odit dignissimos reiciendis vel libero sed praesentium.</p>
            </div>
            <div className='imagen'>
              <img src="" alt="Gerardo Josias Chevarria Rodriguez" />
            </div>
          </div>
     </section>
    </>
  )
}

export default App
