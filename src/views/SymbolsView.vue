<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
    name: 'SymbolsView',

    setup() {
        const isSpeaking = ref(false);

        const speakPoem = () => {
            const poemText = document.querySelector('.poem')?.textContent;
            const msg = new SpeechSynthesisUtterance(poemText?.toString());
            msg.lang = 'es-ES';
            msg.rate = 0.4;
            msg.onend = () => {
                isSpeaking.value = false;
            };
            window.speechSynthesis.speak(msg);
            isSpeaking.value = true;
        };

        const pauseSpeech = () => {
            window.speechSynthesis.pause();
            isSpeaking.value = false;
        };

        const resumeSpeech = () => {
            window.speechSynthesis.resume();
            isSpeaking.value = true;
        };

        const toggleSpeech = () => {
            if (isSpeaking.value) {
                pauseSpeech();
            } else if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
                resumeSpeech();
            } else {
                speakPoem();
            }
        };

        return { isSpeaking, toggleSpeech };
    }

});

</script>

<template>
    <div id="symbols">
        <h2>
            Símbolos institucionales
        </h2>
        <section class="symbol" id="shield">
            <h3>El escudo</h3>
            <div class="description">
                <p>El escudo circular de la Escuela de Educación Básica 18 de Noviembre consta de: </p>
                <ul>
                    <li><b>El globo:</b> Se trata de un modelo tridimensional a escala de nuestro planeta que se usa con
                        fines científicos, educativos, lúdicos u ornamentales.</li>
                    <li><b>La antorcha:</b> Emblema de iluminación espiritual y conocimiento.</li>
                    <li><b>El libro abierto:</b> Simboliza el conocimiento y el saber para mostrar las posibilidades que
                        tienen
                        los estudiantes de capacitarse y entrar a formar parte del desarrollo del país.</li>
                    <li><b>La abeja:</b> Simboliza el trabajo, el esfuerzo y la primacía de la organización de los
                        estudiantes y docentes de la institución.</li>
                </ul>
            </div>

            <span class="image">
                <img v-lazy="'/images/logo.png'" alt="">
            </span>
        </section>

        <section class="symbol" id="flag" style="margin-bottom: 5vh;">
            <h3>La bandera</h3>
            <div class="description">
                <p>La bandera de la Escuela de Educación Básica “18 de Noviembre” consta de dos franjas de colores beige y
                    verde, y en el centro el Escudo de la Escuela.</p>
                <ul>
                    <li><b>Amarillo:</b> Representa la armonía y el buen vivir de la Comunidad Educativa de la Institución.
                    </li>
                    <li><b>Verde:</b> Significa el crecimiento, la renovación, la juventud y la gran fortaleza
                        Institucional.
                    </li>
                    <li><b>Azul:</b> Significa el tranquilizante y se le asocia con la mente, a la parte más intelectual de
                        la mente.
                    </li>
                </ul>
            </div>

            <span class="image">
                <img v-lazy="'/images/flag.webp'" alt="">
            </span>
        </section>
        <section class="symbol" id="hymn" style="margin-bottom: 5vh;">
            <h3>Himno institucional</h3>

            <div class="description">
                <p><b>LETRA Y MÚSICA:</b> SALVADOR BUSTAMANTE CELI</p>

                <span class="poem">
                    <button class="speak-poem" @click="toggleSpeech">
                        <font-awesome-icon v-if="!isSpeaking" icon="fa-solid fa-play"></font-awesome-icon>
                        <font-awesome-icon v-else icon="fa-solid fa-pause"></font-awesome-icon>
                    </button>
                    <p>18 de Noviembre<br>
                        la fecha venturosa<br>
                        de luz de independencia<br>
                        júbilo y libertad<br>
                        es nombre de la escuela<br>
                        que se abre como rosa<br>
                        rogando en Loja<br>
                        efluvios de ciencia y de bondad</p> 

                    <p>Alegre clarinada<br>
                        que anuncia la victoria<br>
                        destello luminoso<br>
                        que rompe un negro tul<br>
                        romance de cariño<br>
                        joyel de amores puros<br>
                        ensueños realizados<br>
                        mansión de la virtud</p>

                    <p>Así es nuestra escuela<br>
                        por eso le cantamos<br>
                        que suyas las fibras<br>
                        de nuestro corazón<br>
                        por eso la queremos<br>
                        como el hogar bendito<br>
                        en donde están los seres<br>
                        que nuestra vida son</p>
                </span>
            </div>
        </section>
    </div>
</template>

<style scoped>
#symbols {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 10vh;
    color: #2D2C2C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h2 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    animation: fadeIn 2s;
    margin: 2vh;
    color: #3370B8;
}

.symbol {
    background-color: #fff;
    padding: 20px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.symbol:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

h3 {
    color: #007bff;
    font-size: 1.8em;
    margin-bottom: 2vh;
    animation: slideIn 1.5s;
    font-weight: 600;
    text-align: left;
    width: 100%;
}


.description {
    animation: fadeIn 2s;
    padding: 2vh;
    padding-top: 0;
    width: 100%;
}

ul {
    list-style-type: none;
    margin-top: 2.2vh;
    margin-bottom: 3vh;
    padding-left: 2vh;

}

ul li {
    margin-top: 2vh;
    padding-left: 5vh;
    position: relative;
    animation: fadeInUp 1s;
}

ul li:before {
    content: '▶';
    color: #007bff;
    font-size: 0.8em;
    position: absolute;
    left: 0;
    top: 4px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.image {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
}

.image img {
    width: 20%;
    height: auto;
}

.poem {
    font-family: 'Times New Roman', serif;
    line-height: 1.6;
    padding: 2em;
    border-radius: 8px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.poem p {
    font-size: 1.1em;
    margin: 0 0 2em 0;
    text-align: center;
}

.speak-poem {
    margin: 2vh;
    background-color: #007bff;
    color: #F7F7F7;
    border-radius: 50%;
    width: 3em;
    height: 3em;
}
</style>