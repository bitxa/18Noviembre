<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ThirdSection',

    setup() {
        return;
    }
});

</script>

<template>
    <div class="third-section">
        <div class="upper">
            <div class="left">
                <div class="text-container">
                    <h3>Nuestra Visión</h3>
                    <p>
                        <b>"</b>Ser una Institución con infraestructura adecuada acorde a la nueva tecnología, docentes con
                        un alto nivel académico, formando a estudiantes innovadores, críticos, reflexivos y participativos,
                        promoviendo la práctica de valores éticos y morales enmarcados en el Buen Vivir y miembros de la
                        comunidad educativa comprometidos con el desarrollo de la Institución.<b>"</b>
                    </p>
                </div>

            </div>
            <div class="right">
                <div class="content">
                    <img v-lazy="'/images/vision.webp'" alt="">
                </div>
            </div>

        </div>
        <div class="lower">
            <div class="left">
                <div class="content">
                    <img v-lazy="'/images/mision.webp'" alt="">
                </div>

            </div>
            <div class="right">
                <div class="text-container">
                    <h3>Nuestra Misión</h3>
                    <p>
                        <b>"</b>Ser una Institución con infraestructura adecuada acorde a la nueva tecnología, docentes con
                        un alto nivel académico, formando a estudiantes innovadores, críticos, reflexivos y participativos,
                        promoviendo la práctica de valores éticos y morales enmarcados en el Buen Vivir y miembros de la
                        comunidad educativa comprometidos con el desarrollo de la Institución.<b>"</b>
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.third-section {
    width: 100%;
    min-height: 90vh;
    display: grid;
    grid-template-rows: auto auto;
    gap: 0;
}

.upper,
.lower {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0;
    align-items: center;
    background-color: #F9F9F9;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.upper {
    background-image: url('/images/third-sec-upper.png');
}

.lower {
    background-image: url('/images/third-sec-upper.png');
}

.upper .left,
.lower .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4vh;
    font-size: 1.2rem;
}

.upper .right .content,
.lower .left .content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vh;
}

.upper .right .content img {
    max-width: 100%;
    border-radius: 43vh 30vh 43vh 20vh;
}

.lower .left .content img {
    max-width: 100%;
    border-radius: 43vh 30vh 43vh 20vh;
}

.text-container {
    text-align: justify;
    padding: 4vh;
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(251, 253, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    max-width: 80%;
    margin: auto;
}

h3 {
    font-weight: 700;
    margin-bottom: 2vh;
}

@media (max-width: 768px) {

    .upper,
    .lower {
        grid-template-columns: 1fr;
        background-position: top;
    }

    .upper .left,
    .upper .right,
    .lower .left,
    .lower .right {
        padding: 2vh;
    }

    .text-container {
        padding: 3vh;
        max-width: 90%;
    }

    .upper .right .content img,
    .lower .left .content img {
        border-radius: 20vh 15vh 20vh 10vh;
    }
}

@media (max-width: 480px) {
    .third-section {
        min-height: auto;
    }

    .upper .left,
    .lower .right {
        font-size: 1rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    .text-container,
    .content img {
        max-width: 100%;
    }

    .upper .right .content img,
    .lower .left .content img {
        border-radius: 10vh 7.5vh 10vh 5vh;
    }
}
</style>
