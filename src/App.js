import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario'
import Citas from  './Components/Citas'

function App() {
  //Citas en Local Storage
let citasIniciales = JSON.parse(localStorage.getItem('citas'))

if(!citasIniciales){
  citasIniciales = [];
}

const [citas, editarCitas] = useState(citasIniciales)

//funcion para aagregar cita nueva y agrege otro coponente
  const crearCita = cita => {
    console.log('esta es la cita nueva')
    editarCitas([
      ...citas,
      cita
    ])
  }

//useEffect para realizar ciertas operaciones cuando el el state Cambia
  useEffect ( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas))
      }else{
        localStorage.setItem('citas', JSON.stringify([]))
      }
  }, [citas])

  //Funcion que elimina una cita por si Id
  const eliminarCita = id => {
    const citasActualizadas = citas.filter(cita => cita.id !== id)
    editarCitas(citasActualizadas)
  
  }

  //Mostrar mensaje condicional
  const titulo = citas.length === 0 ? 'No hay Citas': 'Administra tus citas'

  return (
   <Fragment>
     <h1>Administrador de pacientes</h1>

     <div className='container'>
       <div className='row'>
        <div className='one-half column'>
          <Formulario
          crearCita={crearCita}
          />
        </div>
        <div className='one-half column'>
        <h2>{titulo}</h2>
        {citas.map(cita => (
          <Citas
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
          />
        ))}

        </div>

       </div>
     </div>

   </Fragment>
  );
}

export default App;
