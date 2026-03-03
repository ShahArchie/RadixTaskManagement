<template>
    <section>
        <div class="hero-body why" ref="whySection">
            <div class="hero-left">
                <img :src="whyShape" class="why-shape" ref="whyShapeRef" />
                <img :src="whyIllustraion1" class="whyIllustraion1" ref="whyIllustraion1Ref" />
                <img :src="whyIllustraion2" class="whyIllustraion2" ref="whyIllustraion2Ref" />
            </div>

            <div class="hero-right">
                <div class="text-block" ref="textBlockRef">
                    <h1>Why do you need task management software ?</h1>
                    <p>{{ why }}</p>

                    <div style="display:flex; align-items:center; gap:1rem; padding-top:2rem;" ref="arrowWrapperRef">
                        <p style="font-weight:700; color:black;">LEARN MORE</p>
                        <img :src="arrow" class="arrow-shape" ref="arrowRef" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import whyShape from '@/assets/Why/Why_Shapes.svg'
import arrow from '@/assets/Why/Arrow_icon.svg'
import whyIllustraion1 from '@/assets/Why/Why_Illustration-1.svg'
import whyIllustraion2 from '@/assets/Why/Why_Illustration-2.svg'
import { why } from '../utils/constants'

import { onMounted, nextTick, ref } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const whySection = ref(null)
const whyShapeRef = ref(null)
const whyIllustraion1Ref = ref(null)
const whyIllustraion2Ref = ref(null)
const arrowRef = ref(null)

onMounted(async () => {
    await nextTick()

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: whySection.value,
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    })

    tl.from(whyShapeRef.value, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power3.out"
    })

        .from(whyIllustraion1Ref.value, {
            x: 250,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6")

        .from(whyIllustraion2Ref.value, {
            x: 200,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out"
        }, "-=0.7")

        .from(arrowRef.value, {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.4")
})
</script>

<style>
.hero-body {
    position: relative;
}

.why-shape {
    position: relative;
    top: 0;
    left: -200px;
    width: 100%;
    max-width: 1000px;
    height: auto;
    padding-bottom: 200px;
}

.whyIllustraion1 {
    position: absolute;
    top: 25%;
    height: 400px;
    width: 600px;
    left: 180px;
}

.whyIllustraion2 {
    position: absolute;
    top: 45%;
    height: 600px;
    width: 600px;
    left: 240px;
}

.arrow-shape {
    height: 20px;
    width: 20px;
}
</style>