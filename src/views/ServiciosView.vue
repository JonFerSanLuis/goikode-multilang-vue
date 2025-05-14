<template>
  <div class="servicios">
    <h1>{{ $t('servicios.title') }}</h1>
    <p class="intro">{{ $t('servicios.intro') }}</p>

    <div class="cards">
      <div class="service-card pentesting">
        <h3>{{ $t('servicios.pentesting.title') }}</h3>
        <p>{{ $t('servicios.pentesting.description') }}</p>
      </div>

      <div class="service-card desarrollo">
        <h3>{{ $t('servicios.desarrollo.title') }}</h3>
        <p>{{ $t('servicios.desarrollo.description') }}</p>
      </div>

      <div class="service-card auditoria">
        <h3>{{ $t('servicios.auditoria.title') }}</h3>
        <p>{{ $t('servicios.auditoria.description') }}</p>
      </div>

      <div class="service-card formacion">
        <h3>{{ $t('servicios.formacion.title') }}</h3>
        <p>{{ $t('servicios.formacion.description') }}</p>
      </div>

      <div class="service-card consultoria">
        <h3>{{ $t('servicios.consultoria.title') }}</h3>
        <p>{{ $t('servicios.consultoria.description') }}</p>
      </div>

      <div class="service-card monitoreo">
        <h3>{{ $t('servicios.monitoreo.title') }}</h3>
        <p>{{ $t('servicios.monitoreo.description') }}</p>
      </div>
    </div>
  </div>

  <div class="contact-button-container">
    <router-link to="/contacto" class="contact-button">
      {{ $t('servicios.contactar') }}
    </router-link>
  </div>


</template>


<style scoped>
.servicios {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.intro {
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: #ffffff;
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  border-left: 5px solid var(--primary-color);
  border-color: #00685c;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.service-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.service-card .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.contact-button-container {
  margin-top: 2rem;
  text-align: center;
}

.contact-button {
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.contact-button:hover {
  background-color: #005247;
}
</style>