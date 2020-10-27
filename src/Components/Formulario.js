import React, { Fragment, useState } from "react";
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {
  const[cita, actualizarCita] = useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  })

  const [error, actualizarError] = useState (false)

  //Leer los datos del formulario y actualiza el estado
const actualizarState = (e) =>  {
  actualizarCita({
    ...cita,
    [e.target.name]:e.target.value
  })
}

//Extraer Valores del estado para usarlos en el Value
const { mascota, propietario, fecha, hora, sintomas } = cita;

//Cuando el usuario presione agregar cita
const submitCita = e => {
  e.preventDefault() //no deja que la pagina carge

  //validar
  if(mascota.length === 0  || propietario.length === 0 || fecha.length === 0 || hora.length === 0 || sintomas.length === 0 ){  
    actualizarError(true)
    return; 
  }

    //Eliminar mensaje de error
    actualizarError(false)

  //asignar Id (INSTALAR npm i uuid)
  cita.id = uuid()

  //Crear la cita
  crearCita(cita)

  //reiniciar el form
  actualizarCita({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  })

}


  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? <p className='alerta-error'>Debe llenar todos los campos</p> : null}

      <form
      onSubmit={submitCita}
      >
    <label>Nombre de Mascotas</label>
    <input
        type='text'
        name='mascota'
        className='u-full-width'
        placeholder='Nombre de tu mascota'
        onChange={actualizarState}
        value={mascota}
    />
    <label>Nombre del Dueño</label>
    <input
        type='text'
        name='propietario'
        className='u-full-width'
        placeholder='Nombre del dueño'
        onChange={actualizarState}
        value={propietario}
    />
    <label>Fecha</label>
    <input
        type='date'
        name='fecha'
        className='u-full-width'
        onChange={actualizarState}
        value={fecha}
    />
    <label>Hora</label>
    <input
        type='time'
        name='hora'
        className='u-full-width'
        onChange={actualizarState}
        value={hora}
    />
    <label>Síntomas</label>
    <textarea
    name='sintomas'
    className='u-full-width'
    onChange={actualizarState}
    value={sintomas}
    >
    </textarea>
    <button 
    type='submit'
    className='u-full-width button-primary'
    >Agregar cita</button>

      </form>
    </Fragment>
  );
};

Formulario.propTypes= {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;
