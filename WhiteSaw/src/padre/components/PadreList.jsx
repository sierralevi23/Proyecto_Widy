import React, { useState } from "react";

const PadreList = ({ Padres, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editPadre, setEditPadre] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPadre({ ...editPadre, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editPadre);
    setEditIndex(null);
  };

  return (
    <ul>
      {Padres.map((Padre, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editPadre.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="apellido"
                value={editPadre.apellido}
                onChange={handleEditChange}
                required
              />
              <input
                type="email"
                name="email"
                value={editPadre.email}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="telefono"
                value={editPadre.telefono}
                onChange={handleEditChange}
                required
              />
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setEditIndex(null)}>
                Cancelar
              </button>
            </form>
          ) : (
            <div>
              {Padre.nombre} {Padre.apellido} - {Padre.email} -{" "}
              {Padre.telefono}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditPadre(Padre);
                }}
              >
                Editar
              </button>
              <button onClick={() => onDelete(index)}>Eliminar</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PadreList;