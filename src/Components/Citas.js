import React from 'react';
import Proptypes from 'prop-types'

const Citas = ({cita, eliminarCita}) => (
 

      <div className='cita'>
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button
                className='button eliminar u-full-width'
                onClick={ () => eliminarCita(cita.id)}
            >
                Eliminar &times;
            </button>

      </div>
      );

      Citas.propTypes= {
        cita: Proptypes.func.isRequired,
        eliminarCita: Proptypes.func.isRequired
      }
 
export default Citas;