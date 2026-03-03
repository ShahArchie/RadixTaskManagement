<template>
    <section class="benefits-section">
        <h2>Key benefits of using task <br> management software</h2>
        <div class="benefits-row">
            <div class="benefit">
                <img :src="benefitTrack" class="item">
                <h3 class="item">
                    Keep tasks in one place
                </h3>
                <p class="item">
                    {{ benefits1 }}
                </p>
            </div>
            <div class="benefit">
                <img :src="benefitPrioritize" class="item">
                <h3 class="item">
                    Keep tasks in one place
                </h3>
                <p class="item">
                     {{ benefits2 }}
                </p>
            </div>
            <div class="benefit">
                <img :src="benefitCollab" class="item">
                <h3 class="item">
                    Keep tasks in one place
                </h3>
                <p class="item">
                     {{ benefits2 }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import benefitTrack from '@/assets/Benefits/Benefits_Icon_Track.svg'
import benefitPrioritize from '@/assets/Benefits/Benefits_Icon_Priotitize.svg'
import benefitCollab from '@/assets/Benefits/Benefits_Icon_Collaborate.svg'
import { benefits1, benefits2 } from '../utils/constants'
import { onMounted, nextTick } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
    await nextTick()

    const rows = gsap.utils.toArray('.benefit')

    rows.forEach((benefit) => {
        const elements = benefit.querySelectorAll('.item')

        gsap.from(elements, {
            scrollTrigger: {
                trigger: benefit,
                start: "top 80%",
                toggleActions: "play none none reverse",
                markers: false // keep true for debugging
            },
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power3.out",
            stagger: 0.3
        })
    })

    ScrollTrigger.refresh()
})
</script>

<style>
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
    grid-template-rows: 100vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 30px;
}

.benefits-section h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

.benefits-section p {
    color: #6b7280;
    padding-top: 1rem;
}

.h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>