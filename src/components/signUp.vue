<template>
  <form @submit.prevent="handleSignup">
    <div>
        <input v-model="email" placeholder="Name@company.com" />
        <button type="submit" class="cta">Try for free</button>
    </div>

    <p v-if="error" style="color:red">{{ error }}</p>
    <p v-if="message" style="color:green">{{ message }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { coupons } from '../utils/coupons'

const email = ref('')
const message = ref('')
const error = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const handleSignup = () => {
  error.value = ''
  message.value = ''

  const trimmedEmail = email.value.trim()

  if (!trimmedEmail) {
    error.value = 'Email is required'
    return
  }

  if (!emailRegex.test(trimmedEmail)) {
    error.value = 'Invalid email address'
    return
  }

  const availableCoupon = coupons.find(c => !c.used)

  if (!availableCoupon) {
    error.value = 'No coupons left'
    return
  }

  availableCoupon.used = true

  simulateEmail(trimmedEmail, availableCoupon.code)

  message.value = `Coupon sent to ${trimmedEmail}!`
  email.value = ''
}

const simulateEmail = (email: string, coupon: string) => {
  console.log(`
    Sending email to: ${email}
    Coupon Code: ${coupon}
  `)
}
</script>
