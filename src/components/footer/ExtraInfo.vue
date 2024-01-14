<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ExtraInfo',

    setup() {
        return;
    }
});

</script>

<template>
    <div id="extra-info">
        <div class="content">
            <div class="title">
                <h3>
                    <font-awesome-icon :icon="['fa', 'fa-circle-info']"></font-awesome-icon>
                    Información adicional
                </h3>
            </div>
            <div class="info-data">
                <div>
                    <h4>Director</h4>
                    <p>Mgs. Miguel Armando Sarango Cueva</p>
                </div>
                <div>
                    <h4>Subdirectora</h4>
                    <p>Mgs. María Fernanda Ortiz Guevara</p>
                </div>
                <div>
                    <h4>Inspector General</h4>
                    <p>Lic. Jairo Israel Macas Torres</p>
                </div>
                <div>
                    <h4>Teléfono</h4>
                    <p>2571368</p>
                </div>
                <div>
                    <h4>Correo electrónico</h4>
                    <p>escuela18denoviembre@hotmail.com</p>
                </div>
                <div>
                    <h4>Dirección</h4>
                    <p>Juan José peña y mercadillo</p>
                </div>

            </div>

            <div class="copyright">

            </div>
        </div>
    </div>
</template>

<style scoped>
#extra-info {
    width: 100%;
    min-height: 10vh;
    padding: 4vh;
    color: #383030;
}

.info-data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10vh;
    align-items: stretch;
    justify-content: space-around;
    padding: 2vh 0 10vh 0vh;
    text-align: center;
}

.info-data div {
    min-width: 25%;
}

#extra-info .content {
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0.2vh 1vh 0 #B5B5B5;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 2vh;
    border: 0.1vh solid rgba(255, 255, 255, 0.18);
}

.info-data h4 {
    font-size: 2vh;
    font-weight: 600;
}

.title h3 {
    padding: 5vh;
    font-size: 3rem;
    font-weight: 100;
    color: #494949;
}

@media (max-width: 768px) {
    #extra-info {
        margin: 1vh;
        padding: 0vh;
    }

    .title h3 {
        padding: 1vh;
        margin-top: 2vh;
        font-size: 1.5rem;
    }
}
</style>