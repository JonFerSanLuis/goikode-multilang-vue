<template>
  <div class="servicios">
    <h1>{{ $t('servicios.title') }}</h1>
    <p class="intro">{{ $t('servicios.intro') }}</p>

    <div class="cards">
      <div class="service-card pentesting">
        <div class="icon">🛡️</div>
        <h3>{{ $t('servicios.pentesting.title') }}</h3>
        <p>{{ $t('servicios.pentesting.description') }}</p>
      </div>

      <div class="service-card desarrollo">
        <div class="icon">💻</div>
        <h3>{{ $t('servicios.desarrollo.title') }}</h3>
        <p>{{ $t('servicios.desarrollo.description') }}</p>
      </div>

      <div class="service-card auditoria">
        <div class="icon">📊</div>
        <h3>{{ $t('servicios.auditoria.title') }}</h3>
        <p>{{ $t('servicios.auditoria.description') }}</p>
      </div>

      <div class="service-card formacion">
        <div class="icon">🎓</div>
        <h3>{{ $t('servicios.formacion.title') }}</h3>
        <p>{{ $t('servicios.formacion.description') }}</p>
      </div>

      <div class="service-card consultoria">
        <div class="icon">🤝</div>
        <h3>{{ $t('servicios.consultoria.title') }}</h3>
        <p>{{ $t('servicios.consultoria.description') }}</p>
      </div>

      <div class="service-card monitoreo">
        <div class="icon">📡</div>
        <h3>{{ $t('servicios.monitoreo.title') }}</h3>
        <p>{{ $t('servicios.monitoreo.description') }}</p>
      </div>
    </div>
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

/* Variaciones de color */
.pentesting { border-color: #e63946; }
.desarrollo { border-color: #64ddcf; }
.auditoria  { border-color: #00685c; }
.formacion  { border-color: #2a9d8f; }
.consultoria { border-color: #64ddcf; }
.monitoreo  { border-color: #00685c; }
</style>