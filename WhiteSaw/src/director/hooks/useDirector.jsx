import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useDirector = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoDirector = {
      nombre,
      apellido,
      email,
      telefono,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await firebase.firestore().collection("Directores").add(nuevoDirector);
      alert("Director registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
    } catch (error) {
      console.error("Error al registrar al Director: ", error);
    }
  };