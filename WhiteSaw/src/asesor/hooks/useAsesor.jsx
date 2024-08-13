import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
alumno
const useAsesor = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoAsesor = {
      nombre,
      apellido,
      email,
      telefono,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await firebase.firestore().collection("Asesor").delete(nuevoAsesor);
      alert("Asesor registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
    } catch (error) {
      console.error("Error al registrar al Asesor: ", error);
    }
  };