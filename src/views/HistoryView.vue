<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'HistoryView',
});

</script>

<template>
    <div id="history">
        <h2>
            Nuestra historia
        </h2>
        <div class="row">
            <div class="image">
                <img v-lazy="'/images/history/1.webp'" alt="">
            </div>
            <div class="text">
                <p>La Escuela de educación Básica “18 de Noviembre” inicia su trayectoria laboral educativa el 14 de octubre
                    de 1904, siendo su Patrono de la Institución el Doctor Lautaro Vicente Loaiza, en sus inicios funcionó
                    en los alrededores de San Sebastián, luego frente al parque de San Francisco, en el año 1962 se realiza
                    la construcción de la actual infraestructura, que se ubica en la calle principal Juan José Peña y
                    Mercadillo esquina, en la Parroquia El Sagrario, hoy en día con las nuevas disposiciones Ministeriales
                    de Educación pertenece al Distrito 11D01, con su Código AMIE 11H00020, el 18 de noviembre de 2021
                    cumplió 118 años de labor Educativa formando juventudes para el futuro y desarrollo del país.</p>
            </div>
        </div>

        <div class="row">
            <div class="text">
                <p>En el año 1909, pasa a llamarse “Protectorado Artístico Industrial”, siendo su primera Directora, la
                    Profesora Mercedes Hidalgo de Guerrero. Desde un comienzo, este centro contó con la participación de
                    numerosas alumnas, hasta que en el año de 1924 por decreto Ministerial pasa hacer Institución Fiscal con
                    el Nombre de Escuela Superior “18 de Noviembre”, a petición de la Señora Virginia Duarte de Guerrero,
                    Directora de ese entonces, con este nombre se mantuvo por el espacio de 38 años hasta que en el año de
                    1962 mediante convenio con el programa de construcciones escolares del Ministerio de Educación, se
                    inicia la construcción de la escuela, ya que antes venía funcionando en los alrededores de San Sebastián
                    luego y por algunos años funciono en la calle Bolívar frente al parque San Francisco en una casa de tres
                    pisos. Ahí, en ese lugar se hizo famosa la escuela de barrio, según algunos historiadores de nuestra
                    ciudad y toma el nombre de Escuela Fiscal de Niñas 18 de Noviembre, con este nombre se mantuvo por
                    varios años hasta que la Junta General de Resolución de conflictos de la Dirección de Educación hizo el
                    cambia de denominación a la Escuela Fiscal de Niñas “18 de Noviembre”, por el de ESCUELA DE EDUCACIÓN
                    BÁSICA “18 DE NOVIEMBRE” el 5 de Noviembre del 2013.</p>
            </div>
            <div class="image">
                <img v-lazy="'/images/history/2.webp'" alt="">
            </div>
        </div>

        <div class="row">
            <div class="image">
                <img v-lazy="'/images/history/3.webp'" alt="">
            </div>
            <div class="text">
                <p>Mediante resolución Nro.334-13 se crea y empieza a funcionar el Nivel Inicial con dos paralelos el 14 de
                    agosto del 2013.El prestigio de la Institución más la exigente demanda de los Padres de Familia marcó el
                    camino para que las aulas de Educación Inicial y de Educación General Básica vayan creciendo, ampliando
                    de esta manera la cantidad de estudiantes. Al mismo tiempo que se creó y funciono el Subnivel de la
                    Básica Superior con resolución Nro. 0309-15 con los Octavos y Novenos grados. Por decreto ministerial la
                    Coordinación Zonal 7 de Educación Loja, en el año lectivo 2015-2016 fusiona a la Escuela 18 de Noviembre
                    con la Escuela Adolfo Jurado González mediante resolución Nro. 0584-15 tomando el nombre de ESCUELA DE
                    EDUCACIÓN GENERAL BÁSICA 18 DE NOVIEMBRE.</p>
            </div>
        </div>
        <div class="row">
            <div class="text">
                <p>Ese mismo año se crea la Jornada Vespertina mediante resolución Nro. 083-2015, para Básica Superior con
                    8vo, 9no, y 10mo en ese año lectivo. Así como fue creciendo nuestra escuela en población estudiantil,
                    creció también su planta docente, administrativa y de servicio, con docentes de un alto nivel académico
                    comprometidos con su ética profesional incluyente, de entrega y servicio con calidad y calidez,
                    brindando día a día a sus educandos un ambiente propicio para el aprendizaje significativo que año a año
                    visualizamos sus logros.</p>
            </div>
            <div class="image">
                <img v-lazy="'/images/history/4.webp'" alt="">
            </div>
        </div>

        <div class="row" style="margin-bottom: 5vh;">
            <div class="image">
                <img v-lazy="'/images/history/5.webp'" alt="">
            </div>
            <div class="text">
                <p>Desde sus inicios, tanto los alumnos de Nivel Inicial como de Nivel Primario han participado de
                    innumerables visitas didácticas y llevando a cabo proyectos pedagógicos guiados por sus docentes,
                    alcanzando los primeros lugares en la participación de concursos externos e internos. A más del
                    crecimiento que ha tenido nuestra Institución Educativa ha mejorado su infraestructura lo que facilita
                    tener un ambiente agradable, seguro, amplio, con espacios verdes que permiten la práctica de deportes y
                    otras actividades. 118 años de historia y crecimiento permanente, con 1360 estudiantes, 58 docentes, 2
                    administrativos, 2 auxiliares de servicio, un agente de seguridad nos motiva a seguir trabajando con
                    ímpetu, con esmero, con dedicación, con mucho compromiso por nuestros estudiantes y sus familias.</p>
            </div>
        </div>
    </div>
</template>



<style scoped>
#history {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    background-color: #F5F5DC;
    color: #41444B;
    overflow: hidden;
    padding-top: 12vh;
}

h2 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
}

.row {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 6vh;
    padding-bottom: 0vh;
    padding-top: 2vh;
    gap: 5vh;
}

.row div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.text {
    flex: 0 0 60%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 5vh;
    /* Adjusted padding */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
}

.image {
    flex: 0 0 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1vh;
}

.image img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5vh;
}


@media (max-width: 768px) {
    .row {
        flex-direction: column;
        gap: 2vh;
    }

    .text,
    .image {
        flex: 0 0 auto;

    }

    .text {
        padding: 2vh;
    }
}
</style>