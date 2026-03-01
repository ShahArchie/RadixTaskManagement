<template>
  <div class="page">
    <!-- HERO SECTION -->
    <section class="section hero">
      <div class="hero-header">
        <p class="logo">TaskMan</p>
        <button class="cta">Try free</button>
      </div>

      <div class="hero-section">
      <div>
        <h1>Task Management And Lists Tool</h1>
        <p>There are many passages of Lorem Ipsum available but the majority have alteration in some form by injected humor.</p>
        <input>
        <button class="cta">Try for free</button>
        <span class="logo-section">
            <span class="logo-col">
                 <img :src="cartoonLogo" alt="Logo" class="logo-img" />
                  <img :src="bookingLogo" alt="Logo" class="logo-img" />
                   <img :src="dropBoxLogo" alt="Logo" class="logo-img" />
            </span>
            <span class="logo-col">
                 <img :src="toshibaLogo" alt="Logo" class="logo-img" />
                  <img :src="slackLogo" alt="Logo" class="logo-img" />
                   <img :src="netflixLogo" alt="Logo" class="logo-img" />
            </span>
            <span class="logo-col">
                 <img :src="spotifyLogo" alt="Logo" class="logo-img" />
                <img :src="coaColaLogo" alt="Logo" class="logo-img" />
                <img :src="redbullLogo" alt="Logo" class="logo-img" />

            </span>
        </span>
      </div>
       <div>
        <span class="circle circle-1" />
        <span class="circle circle-2" />
        <span class="circle circle-3" />
      </div>
      </div>    
    </section>

    <!-- ABOUT SECTION -->
    <section class="section light">
      <h2>About Section</h2>
        <div class="hero-content">
        <h1>Manage your tasks beautifully</h1>
        <p>Organize, track, and complete your work efficiently.</p>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="section dark">
      <h2>Features Section</h2>
    </section>
  </div>
</template>

<script setup>
    import bookingLogo from '@/assets/Logos/Booking.com_logo.svg'
    import cartoonLogo from '@/assets/Logos/Cartoon_Network_logo.svg'
    import coaColaLogo from '@/assets/Logos/CocaCola_logo.svg'
    import dropBoxLogo from '@/assets/Logos/Dropbox_logo.svg'
    import netflixLogo from '@/assets/Logos/Netflix_logo.svg'
    import redbullLogo from '@/assets/Logos/RedBull_logo.svg'
    import slackLogo from '@/assets/Logos/Slack_logo.svg'
    import spotifyLogo from '@/assets/Logos/Spotify_logo.svg'
    import toshibaLogo from '@/assets/Logos/Toshiba_logo.svg'
</script>

<style>
/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

.page {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow-x: hidden;
}

/* SECTION BASE */
.section {
  min-height: 200vh;
  padding: 3rem 8%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}

/* HERO */
.hero {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
}

/* HEADER INSIDE HERO */
.hero-header {
  display: flex;
  justify-content: space-between; /* pushes button right */
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
}

/* CTA BUTTON */
.cta {
  padding: 10px 22px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

/* HERO CONTENT */
.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.8;
}

.hero-section {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.hero-section div {
    width: 50%;
}

/* LIGHT SECTION */
.light {
  background: #f8fafc;
  color: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* DARK SECTION */
.dark {
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* CUSTOM SCROLLBAR */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #6366f1;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4f46e5;
}

.circle {
  position: absolute;
  right: -200px;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.5);
  animation: fanOut 1.2s ease-out forwards;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: #6366f1;
  top: 20%;
  animation-delay: 0.2s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  background: #818cf8;
  top: 40%;
  animation-delay: 0.4s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  background: #a5b4fc;
  top: 60%;
  animation-delay: 0.6s;
}

@keyframes fanOut {
  to {
    right: 10%;
    opacity: 1;
    transform: scale(1);
  }
}

.logo-section {
    padding: 1rem 2rem;
}

.logo-col {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
}

.logo-img {
  height: 30px;
}
</style>