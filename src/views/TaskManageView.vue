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
        <div class="hero-left">
          <div class="text-block">
            <h1>Task Management And Lists Tool</h1>
            <p>
              There are many passages of Lorem Ipsum available but the majority
              have alteration in some form by injected humor.
            </p>
          </div>

          <signUp />
          <logoSection />
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

     <benefitsSection />
     <whySection />
     <tryForFreeSection />
  </div>
</template>

<script setup>
import signUp from '../components/signUp.vue'
import logoSection from '@/components/logoSection.vue'
import benefitsSection from '@/components/benefitsSection.vue'
import whySection from '@/components/whySection.vue'
import tryForFreeSection from '@/components/tryForFreeSection.vue'
import blueCircle from '@/assets/Hero/Hero_Shapes_1.svg'
import yellowCircle from '@/assets/Hero/Hero_Shapes_2.svg'
import greyCircle from '@/assets/Hero/Hero_Shapes_3.svg'
import heroCard4 from '@/assets/Hero/Hero_Illustration_Card-1.svg'
import heroCard3 from '@/assets/Hero/Hero_Illustration_Card-2.svg'
import heroCard1 from '@/assets/Hero/Hero_Illustration_Card-3.svg'
import heroCard2 from '@/assets/Hero/Hero_Illustration_Card-4.svg'
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

.hero-right {
  padding: 2rem;
  max-width: 50%;
}
</style>