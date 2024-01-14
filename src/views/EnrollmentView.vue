
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'EnrollmentView',
});
</script>
  

<template>
    <div id="enrollment">
        <h2 class="title">Requisitos para matrículas</h2>

        <article class="enrollment-category">
            <h3>Inicial 1</h3>
            <ul>
                <li>Hoja de asignación de matrícula del Ministerio de Educación.</li>
                <li>Dos Copias de cédula a color del papá, mamá y niñ@ a color en una sola hoja (una para la carpeta
                    estudiantil y la otra para la carpeta del DECE).</li>
                <li>Copia de Carnet de Vacuna, CON LA ÚLTIMA DE REFUERZO.</li>
                <li>Llenar "Ficha Acumulativa General" y "Carta de compromiso" (Retirar del Departamento del DECE).</li>
                <li>4 fotografías tamaño carnet (con uniforme de parada) son para lo siguiente:
                    <ul class="sublist">
                        <li>Carpeta estudiantil.</li>
                        <li>Carpeta del DECE.</li>
                        <li>Ficha del DECE.</li>
                        <li>Fichero (Inicial I, II y Preparatoria).</li>

                    </ul>
                </li>

            </ul>
        </article>

        <article class="enrollment-category">
            <h3>Inicial 2 a Décimo EGB</h3>
            <ul>
                <li>Copias de cédula a color del papá, mamá y niñ@ a color en una sola hoja (dos copias para la una
                    carpeta estudiantil y la otra para la carpeta del DECE).</li>
                <li>Llenar "Ficha Acumulativa General" y "Carta de Compromiso" (Retirar del Departamento del DECE).</li>
                <li>Tres fotografías tamaño carnet con uniforme de parada (Para Inicial II y Preparatoria para los
                    ficheros).</li>
                <li>Dos fotografías tamaño carnet con uniforme de parada (Para Segundo a Décimo año de educación básica).
                </li>
            </ul>
        </article>

        <article class="enrollment-category">
            <h3>Primero preparatoria a décimo EGB (solo estudiantes nuevos)</h3>
            <ul>
                <li>Hoja de asignación de matrícula del Ministerio de Educación.</li>
                <li>Certificado de "Desglose de documentación".</li>
                <li>Llenar Ficha Acumulativa General y Carta de Compromiso (Retirar del Departamento del DECE)..</li>
                <li>4 fotografías tamaño carnet con uniforme de parada, son para lo siguiente:
                    <ul class="sublist">
                        <li>Carpeta estudiantil.</li>
                        <li>Carpeta del DECE.</li>
                        <li>Ficha del DECE.</li>
                        <li>Carnet estudiantil (nombre del estudiante, grado y paralelo)</li>
                        <li>Ficha del DECE</li>
                    </ul>
                </li>
                <li>Copias de cédula a color del papá, mamá y niñ@, en una sola hoja (una copia para la
                    carpeta estudiantil y la otra para la carpeta del DECE).</li>
                <li>Certificados de matrículas.</li>
                <li>Certificados de promoción.</li>
                <li>Record estudiantil (alumnos de 2do a 10mo año de educación básica, sacar copias para cualquier
                    trámite posterior).</li>
                <div style="margin-top: 4vh;"><b>NOTA: </b> La madre y padre de familia/ o representantes legales de los
                    estudiantes deben traer los siguientes datos bien claros esto se solicita por cualquier novedad o
                    emergencia que se de en el transcurso del año lectivo, son los siguientes datos.
                    <ul>
                        <li>Datos de los padres de familia / o representantes legales.</li>
                        <li>Dirección domiciliaria (barrio y calles/ o una referencia).</li>
                        <li>Números telefónicos en caso de emergencia.</li>
                    </ul>
                </div>
            </ul>
        </article>

        <article class="enrollment-category">
            <h3>Requisitos para retirar las carpetas estudiantiles</h3>
            <ul>
                <li>Solicitud dirigida al Mgs. Miguel Armando Sarango Cueva; Director de la Escuela de Educación Básica
                    “18 de Noviembre” (Esta se entrega gratuitamente en secretaria).</li>
                <li>Cupo de asignación de matrícula del Ministerio de Educación.</li>
                <li>Cupo de asignación de matrícula en caso de que el estudiante va a Instituciones Educativas
                    Particular, Fiscomisional o Municipal.</li>
            </ul>
        </article>

    </div>
</template>
<style scoped>
#enrollment {
    width: 100%;
    margin: auto;
    padding: 5vh 5%;
    box-sizing: border-box;
}

.title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    animation: fadeIn 2s;
    margin: 6vh auto;
    color: #3370B8;
}

.enrollment-category {
    margin-top: 5vh;
    background: #f8f8f8;
    border-radius: 8px;
    padding: 4vh;
    box-shadow: 0 2px 5px rgba(0, 0, 0,
            0.1);
}

.enrollment-category h3 {
    color: #42444B;
    font-weight: 600;
}

.enrollment-category ul {
    list-style-type: disc;
    padding-left: 20px;
    color: #333;
}

li {
    margin: 1vh 0;
}

.sublist li {
    list-style-type: lower-alpha;
}

.sublist li::marker {
    font-weight: bold;
}

@media (max-width: 768px) {
    .title {
        font-size: 1.5rem;
    }

    .enrollment-category {
        padding: 3vh;
    }
}


@media (max-width: 480px) {
    .title {
        font-size: 1.2rem;
    }

    .enrollment-category {
        padding: 2vh;
    }

    .enrollment-category ul {
        padding-left: 15px;
    }

    li,
    .sublist li {
        font-size: 0.9rem;
    }
}
</style>