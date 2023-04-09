import React, { useState } from 'react';

const Contact = () => {
  // Declarar estados para los campos del formulario y para el envío exitoso
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos del formulario
    if (nombre.length < 6 || !email.includes('@')) {
      console.log('Por favor verifique su información nuevamente');
      return;
    }

    // Mostrar mensaje de éxito y cambiar el estado de "enviado"
    console.log(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);
    setEnviado(true);

    // Resetear los campos del formulario
    setNombre('');
    setEmail('');
  };

  return (
    <main className="">
      <h1>Contacto</h1>
      {enviado ? (
        <p>Tu correo ha sido enviado exitosamente</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre completo:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </main>
  );
};

export default Contact;
