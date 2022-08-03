import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';


function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizada = [tarea, ...tareas];
      setTareas(tareasActualizada);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizada = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizada);
  };

  const completarTarea = id => {
    const tareasActualizada = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
     setTareas(tareasActualizada)
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tarea-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;