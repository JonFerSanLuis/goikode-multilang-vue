<script setup>
    import samsungLogo from '../assets/Samsung_Logo.svg'
    import appleLogo from '../assets/apple.webp'
    import ufcLogo from '../assets/ufcLogo.png'
    import microsoftLogo from '../assets/microsoft.png'
</script>

<template>
  <div class="clientes">
    <h1>{{ $t('clientes.title') }}</h1>
    <p class="intro">{{ $t('clientes.intro') }}</p>

    <div class="logos">
      <div class="logo-card">
        <img :src="samsungLogo" alt="Samsung" />
      </div>
      <div class="logo-card">
        <img :src="appleLogo" alt="Empresa B" />
      </div>
      <div class="logo-card">
        <img :src="ufcLogo" alt="UFC" />
      </div>
      <div class="logo-card">
        <img :src="microsoftLogo" alt="Microsoft" />
      </div>
    </div>

    <div class="testimonios">
      <h2>{{ $t('clientes.testimoniosTitle') }}</h2>

      <div class="testimonial">
        <p class="mensaje">"Excelente servicio y atención personalizada. Muy recomendados."</p>
        <p class="autor">– Ana López, Samsung</p>
      </div>

      <div class="testimonial">
        <p class="mensaje">"Gracias al equipo, ahora nuestros sistemas son mucho más seguros."</p>
        <p class="autor">– Carlos Pérez, Apple</p>
      </div>

      <div class="testimonial">
        <p class="mensaje">"Nos ayudaron a mejorar la eficiencia y reducir costes."</p>
        <p class="autor">– Laura Martínez, UFC</p>
      </div>

      <div class="testimonial">
        <p class="mensaje">"Profesionales y atentos en todo momento, los recomiendo sin duda."</p>
        <p class="autor">– David Sánchez, Microsoft</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clientes {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.intro {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}

.logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.logo-card {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-card img {
  max-width: 120px;
  margin-bottom: 0.5rem;
}

.testimonios {
  margin-top: 2rem;
}

.testimonios h2 {
  color: #00685c;
  margin-bottom: 1.5rem;
}

.testimonial {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  text-align: left;
}

.mensaje {
  font-style: italic;
  color: #333;
  margin-bottom: 0.5rem;
}

.autor {
  font-weight: bold;
  color: #00685c;
}
</style>
