<template>
  <section>
    <div class="try-free-section" ref="sectionRef">
      <div class="hero-left">
        <h2>Get better work done</h2>
        <p>
          See why millions of people across 195 countries use TaskMan
        </p>

        <div class="signup-wrapper">
          <signUp />
        </div>
      </div>
      <div class="hero-right">
        <img
          :src="signUpShape"
          class="signUp"
          ref="signUpRef"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import signUp from "./signUp.vue"
import signUpShape from "@/assets/Signup/Signup_Shape.svg"

gsap.registerPlugin(ScrollTrigger)

const signUpRef = ref(null)
const sectionRef = ref(null)

onMounted(async () => {
  await nextTick()

  gsap.from(signUpRef.value, {
    x: 400,             
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  })
})
</script>

<style scoped>
.try-free-section {
  min-height: 70vh;
  padding: 6rem 8%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}


.hero-left {
  text-align: center;
  max-width: 600px;
  z-index: 2;
}

.hero-left h2 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

.hero-left p {
  color: #6b7280;
  margin-bottom: 2rem;
}

.signup-wrapper {
  display: flex;
  justify-content: center;
}

.hero-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
}

.signUp {
  max-width: 500px;
  width: 100%;
  height: auto;
 transform: scaleX(-1);
}
</style>