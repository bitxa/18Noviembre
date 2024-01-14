<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SecondSection',

    setup() {
        return;
    }
});

</script>


<template>
    <div class="second-section">
        <div class="content">
            <div class="left">
                <h3>“Educación innovadora, reflexiva y participativa; enmarcadas, en la práctica de valores”</h3>
            </div>
            <div class="right">
                <div class="info">
                    <p>Nuestro enfoque integral del cuidado infantil se centra en maximizar el desarrollo de su hijo,
                        ofreciéndole oportunidades educativas enriquecedoras respaldadas por docentes capacitados. </p>
                </div>
                <ul class="benefits">
                    <li><font-awesome-icon icon="fa-square-check"></font-awesome-icon>
                        <p>Fomentamos la creatividad</p>
                    </li>
                    <li><font-awesome-icon icon="fa-square-check"></font-awesome-icon>
                        <p>Fomentamos la independencia</p>
                    </li>
                    <li><font-awesome-icon icon="fa-square-check"></font-awesome-icon>
                        <p>Impulsamos el crecimiento personal</p>
                    </li>
                    <li><font-awesome-icon icon="fa-square-check"></font-awesome-icon>
                        <p>Ambiente de apoyo y calidez</p>
                    </li>

                </ul>
            </div>
        </div>
        <div class="bottom">
        </div>
    </div>
</template>

<style scoped>
.second-section {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #DEECFF;
}

.second-section .content {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.second-section .left,
.second-section .right {
    padding: 10vh;
}


.second-section .left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0vh 5vh;
    background-color: #DEECFF;
}

.second-section .left h3 {
    font-size: 1.8rem;
    font-weight: 700;
}

.second-section .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5vh;
}

.second-section .right .info {
    font-size: 1.1rem;
    font-weight: 600;
}

.right ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 5vh;
}

.right ul li {
    font-size: 1rem;
    font-weight: 600;
    color: #B983FF;
    display: flex;
    align-items: center;
    gap: 2vh;
    box-sizing: border-box;
}


.second-section .bottom {
    display: flex;
    width: 100%;
    min-height: 40vh;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('/images/second-sec_clouds.png');
}


@media (min-width: 769px) {
    .second-section .content {
        flex-direction: row;
    }

    .second-section .left,
    .second-section .right {
        width: 50%;
        padding: 5vh;
    }

    .second-section .left h3 {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .second-section .bottom {
        min-height: 20vh;
    }

    .second-section .content {
        flex-direction: column;
    }

    .second-section .left,
    .second-section .right {
        width: 100%;
        padding: 2vh;
    }

    .second-section .left h3 {
        font-size: 1.5rem;
    }

    .second-section .bottom {
        height: 20vh;
    }
}
</style>
