import React, { useState } from "react";

const AsesorList = ({ asesor, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editAsesor, setEditAsesor] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAsesor({ ...editAsesor, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editAsesor);
    setEditIndex(null);
  };

  return (
    <ul>
      {asesor.map((asesor, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editAsesor.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="apellido"
                value={editAsesor.apellido}
                onChange={handleEditChange}
                required
              />
              <input
                type="email"
                name="email"
                value={editAsesor.email}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="telefono"
                value={editAsesor.telefono}
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
              {asesor.nombre} {asesor.apellido} - {asesor.email} -{" "}
              {asesor.telefono}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditAsesor(asesor);
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

export default AsesorList;