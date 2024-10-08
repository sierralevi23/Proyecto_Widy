import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

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
      //si le poones add, lo agrega, pero si le pones delete lo borras
      alert("Asesor registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
    } catch (error) {
      console.error("Error al registrar al Asesor: ", error);
    }
  };