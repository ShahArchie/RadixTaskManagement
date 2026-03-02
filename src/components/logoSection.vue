<template>
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
</style>