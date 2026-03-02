<template>
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
</template>

<script setup>
import benefitTrack from '@/assets/Benefits/Benefits_Icon_Track.svg'
import benefitPrioritize from '@/assets/Benefits/Benefits_Icon_Priotitize.svg'
import benefitCollab from '@/assets/Benefits/Benefits_Icon_Collaborate.svg'
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
}

.benefits-section h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

.benefits-section p {
    color: #6b7280;
}
</style>