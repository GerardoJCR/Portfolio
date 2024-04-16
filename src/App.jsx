import "./App.css";

function App() {
  return (
    <>
      <div className="contenedor">
        <header>
          <nav>
            <a className="logo">Logo</a>
            <ul className="lista">
              <li className="item">
                <a >Inicio</a>
              </li>
              <li className="item">
                <a >Sobre Mi</a>
              </li>
              <li className="item">
                <a >Habilidades</a>
              </li>
              <li className="item">
                <a >Mis proyectos</a>
              </li>
              
            </ul>
            <button className="button">Contactame</button>
          </nav>
        </header>

        <section>
          <div className="container__information">
            <div className="texto">
              <h2>
                Hola! soy Gerardo un <span>Ingeniero de Software</span>
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae ex numquam odio tenetur esse neque hic aliquid,
                alias eveniet veniam dolores minus voluptas. Odit dignissimos
                reiciendis vel libero sed praesentium.
              </p>
            </div>
            <div className="imagen">
              <img src="" alt="Gerardo Josias Chevarria Rodriguez" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
