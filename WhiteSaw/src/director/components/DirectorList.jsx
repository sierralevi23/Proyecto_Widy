import React, { useState } from "react";

const DirectorList = ({ Directores, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editDirector, setEditDirector] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditDirector({ ...editDirector, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editDirector);
    setEditIndex(null);
  };

  return (
    <ul>
      {Directors.map((Director, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editDirector.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="apellido"
                value={editDirector.apellido}
                onChange={handleEditChange}
                required
              />
              <input
                type="email"
                name="email"
                value={editDirector.email}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="telefono"
                value={editDirector.telefono}
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
              {Director.nombre} {Director.apellido} - {Director.email} -{" "}
              {Director.telefono}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditDirector(Director);
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

export default DirectorList;