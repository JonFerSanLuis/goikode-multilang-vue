<template>
  <div class="contacto">
    <h1>Contáctanos</h1>
    <p>Si tienes alguna pregunta o deseas trabajar con nosotros, no dudes en ponerte en contacto.</p>

    <div class="contact-info">
      <div class="info-item">
        <h3>Correo electrónico</h3>
        <p><a href="mailto:contacto@goikode.com">contacto@goikode.com</a></p>
      </div>

      <div class="info-item">
        <h3>Teléfono</h3>
        <p>+123 456 7890</p>
      </div>

      <div class="info-item">
        <h3>Dirección</h3>
        <p>Calle de ejemplo</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contacto {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.info-item h3 {
  margin-bottom: 1rem;
  color: #00685c;
}

.info-item p {
  font-size: 1rem;
  color: #333;
}

.info-item a {
  text-decoration: none;
  color: #00685c;
  font-weight: bold;
}

.info-item a:hover {
  text-decoration: underline;
}
</style>
