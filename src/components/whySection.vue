<template>
    <section>
      <div class="hero-body">
        <div class="hero-left">
          <img :src="whyShape" class="why-shape" />
          <!-- <img :src="whyIllustraion1" class="why-shape" />
          <img :src="whyIllustraion2" class="why-shape" /> -->
        </div>
        <div class="hero-right">
          <div class="text-block">
            <h1>Why do you need task management software ?</h1>
            <p>
              There are many passages of Lorem Ipsum available but the majority
              have alteration in some form by injected humor.
            </p>

            <p>LEARN MORE</p>
            <img :src="arrow" class="arrow-shape" />
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

</script>