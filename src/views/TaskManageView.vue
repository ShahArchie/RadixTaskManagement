<template>
    <div class="page">
        <!-- HERO SECTION -->
        <section class="hero">
            <!-- Header -->
            <div class="hero-header">
                <h1 class="logo">TaskMan</h1>
                <button class="cta">Try free</button>
            </div>

            <!-- Main Hero Content -->
            <div class="hero-body">
                <!-- Left Content -->
                <div class="hero-left">
                    <div class="text-block">
                        <h1>Task Management And Lists Tool</h1>
                        <p>
                            There are many passages of Lorem Ipsum available but the majority
                            have alteration in some form by injected humor.
                        </p>
                    </div>

                    <div class="input-section">
                        <input placeholder="Name@company.com" />
                        <button class="cta">Try for free</button>
                    </div>

                    <div class="logo-section">
                        <div class="logo-row">
                            <img :src="cartoonLogo" class="logo-img" />
                            <img :src="bookingLogo" class="logo-img" />
                            <img :src="dropBoxLogo" class="logo-img" />
                        </div>
                        <div class="logo-row">
                            <img :src="toshibaLogo" class="logo-img" />
                            <img :src="slackLogo" class="logo-img" />
                            <img :src="netflixLogo" class="logo-img" />
                        </div>
                        <div class="logo-row">
                            <img :src="spotifyLogo" class="logo-img" />
                            <img :src="coaColaLogo" class="logo-img" />
                            <img :src="redbullLogo" class="logo-img" />
                        </div>
                    </div>
                </div>

                <!-- Right Circles -->
              <div class="hero-wrapper">
                  <img :src="blueCircle" class="circle blue" ref="blueRef" /> 
                  <img :src="yellowCircle" class="circle yellow" ref="yellowRef" /> 
                  <img :src="greyCircle" class="circle grey" ref="greyRef" />
                  <img :src="heroCard1" class="hero-card hero1" ref="heroCard1Ref" />
                  <img :src="heroCard2" class="hero-card hero2" ref="heroCard2Ref" />
                  <img :src="heroCard3" class="hero-card hero3" ref="heroCard3Ref" />
                  <img :src="heroCard4" class="hero-card hero4" ref="heroCard4Ref" />
               </div>
            </div>
        </section>

        <!-- ABOUT SECTION -->
        <section class="benefits-section">
            <h2>Key benefits of using task <br> management software</h2>
            <!-- <p>Organize, track, and complete your work efficiently.</p> -->
            <div class="benefits-row">
                <div class="benefit">
                    <img :src="benefitTrack">
                    <p>
                        Keep tasks in one place
                    </p>
                    <p>
                        description ...
                    </p>
                </div>
                <div class="benefit">
                    <img :src="benefitPrioritize">
                    <p>
                        Keep tasks in one place
                    </p>
                    <p>
                        description ...
                    </p>
                </div>
                <div class="benefit">
                    <img :src="benefitCollab">
                    <p>
                        Keep tasks in one place
                    </p>
                    <p>
                        description ...
                    </p>
                </div>
            </div>
        </section>

        <section class="benefits-section">
            <h2>Get better work done</h2>
            <p>See why millions of people across 195 countries use TaskMan</p>
            <SignUp />
            <!-- <div>
                <input placeholder="Name@company.com" />
                <button class="cta">Try for free</button>
            </div> -->
        </section>
    </div>
</template>

<script setup>
import SignUp from '../components/signUp.vue'
import bookingLogo from '@/assets/Logos/Booking.com_logo.svg'
import cartoonLogo from '@/assets/Logos/Cartoon_Network_logo.svg'
import coaColaLogo from '@/assets/Logos/CocaCola_logo.svg'
import dropBoxLogo from '@/assets/Logos/Dropbox_logo.svg'
import netflixLogo from '@/assets/Logos/Netflix_logo.svg'
import redbullLogo from '@/assets/Logos/RedBull_logo.svg'
import slackLogo from '@/assets/Logos/Slack_logo.svg'
import spotifyLogo from '@/assets/Logos/Spotify_logo.svg'
import toshibaLogo from '@/assets/Logos/Toshiba_logo.svg'
import blueCircle from '@/assets/Hero/Hero_Shapes_1.svg'
import yellowCircle from '@/assets/Hero/Hero_Shapes_2.svg'
import greyCircle from '@/assets/Hero/Hero_Shapes_3.svg'
import heroCard4 from '@/assets/Hero/Hero_Illustration_Card-1.svg'
import heroCard3 from '@/assets/Hero/Hero_Illustration_Card-2.svg'
import heroCard1 from '@/assets/Hero/Hero_Illustration_Card-3.svg'
import heroCard2 from '@/assets/Hero/Hero_Illustration_Card-4.svg'
import benefitTrack from '@/assets/Benefits/Benefits_Icon_Track.svg'
import benefitPrioritize from '@/assets/Benefits/Benefits_Icon_Priotitize.svg'
import benefitCollab from '@/assets/Benefits/Benefits_Icon_Collaborate.svg'

import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const blueRef = ref(null)
const yellowRef = ref(null)
const greyRef = ref(null)
const heroCard1Ref = ref(null)
const heroCard2Ref = ref(null)
const heroCard3Ref = ref(null)
const heroCard4Ref = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  tl.from(blueRef.value, {
    x: 350,
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
  .from(yellowRef.value, {
    x: 300,
    scale: 0.6,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.7")
  .from(greyRef.value, {
    x: 250,
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.7")
    .from(heroCard1Ref.value, {
    x: 200,
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.7")
    .from(heroCard2Ref.value, {
    x: 150,
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.7")
    .from(heroCard3Ref.value, {
    x: 100,
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.7")
    .from(heroCard4Ref.value, {
    x: 50,
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.7")
})
</script>

<style>
/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.page {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

/* ================= HERO ================= */

.hero {
    min-height: 100vh;
    padding: 3rem 0 3rem 8%;
    position: relative;
    background: white;
}

/* HEADER */
.hero-header {
    padding-right: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
}

/* BODY */
.hero-body {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* gap: 4rem; */
}

/* LEFT SIDE */
.hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

/* TEXT */
.text-block h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.text-block p {
    font-size: 1.1rem;
    color: #6b7280;
    line-height: 1.6;
    max-width: 480px;
}

/* INPUT SECTION */
.input-section {
    display: flex;
    gap: 16px;
}

input {
    padding: 12px 20px;
    border: 1px solid #d1d5db;
    border-radius: 30px;
    width: 260px;
    font-size: 0.95rem;
    outline: none;
}

input:focus {
    border-color: #0635FF;
}

/* BUTTON */
.cta {
    padding: 12px 24px;
    background: #0635FF;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
    z-index: 100;
}

.cta:hover {
    background: #4f46e5;
    transform: translateY(-2px);
}

/* LOGOS */
.logo-section {
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;
}

.logo-row {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
}

.logo-img {
    height: 35px;
    opacity: 0.8;
}

/* ================= CIRCLES ================= */

.hero-wrapper {
    flex: 1;
    position: relative;
    height: 1000px;
    overflow: hidden;
}

.circle {
  position: absolute;
  top: 0;
  right: -200px;
  width: 900px;
  transform: translateY(-50%);
}

.blue {
    z-index: 1;
     transform: translateX(80px);
}

.yellow {
    z-index: 2;
    transform: translateX(160px);
}

.grey {
    z-index: 3;
    transform: translateX(320px);
}

.hero-card {
  position: absolute;  
  width: 420px;
  z-index: 10;
}

.hero1 { 
  top: 25%;
  right: 180px;
}

.hero2 { 
  top: 45%;
  right: 120px;
}

.hero3 { 
  top: 60%;
  right: 240px;
}

.hero4 { 
  top: 35%;
  right: 300px;
}



/* ================= BENEFITS SECTION ================= */

.benefits-section {
    min-height: 60vh;
    /* background: #f8fafc; */
    padding: 6rem 8%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
}

.benefits-row {
    padding: 1rem 10%;
    display: flex;
    justify-content: space-between;
}

.benefits-section h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

.benefits-section p {
    color: #6b7280;
}
</style>