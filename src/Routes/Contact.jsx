import React, { useState } from 'react';

const Contact = () => {
  // Declarar estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos del formulario
    if (nombre.length < 6 || !email.includes('@')) {
      console.log('Por favor verifique su información nuevamente');
      return;
    }

    // Mostrar mensaje de éxito
    console.log(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);

    // Resetear los campos del formulario
    setNombre('');
    setEmail('');
  };

  return (
    <main className="">
      <h1>Contacto</h1>
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
    </main>
  );
};

export default Contact;
