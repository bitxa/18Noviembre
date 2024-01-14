<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OurProgram',
    data() {
        return {
            programs: [
                {
                    title: 'Educación inicial',
                    image: 'https://i.eldiario.com.ec/fotos-manabi-ecuador/2017/05/20170530040000_28-500-menores-a-educacia-n-inicial.jpg',
                    description: 'Es un proceso de acompañamiento al desarrollo integral de los niños y niñas desde los 4 años, que potencia su aprendizaje y promueve su bienestar, sin desconocer la responsabilidad formativa de la familia y la comunidad.',
                    requirements: [
                        {
                            title: 'Requisitos',
                            content: 'La edad mínima es de 4 años.'
                        }
                    ],
                    more: [
                        {
                            img: 'https://docplayer.es/docs-images/106/170555356/images/27-0.jpg',
                            name: 'Inicial 1',
                        },
                        {
                            img: 'https://jdmr.edu.ec/wp-content/uploads/2019/10/DSC_3537-1067x800.jpg',
                            name: 'Inicial 2',
                        }
                    ]
                },
                {
                    title: 'Educación básica preparatoria',
                    image: 'https://jdmr.edu.ec/wp-content/uploads/2019/10/DSC_3486-1067x800.jpg',
                    description: 'Se centra en el reconocimiento de que desarrollo infantil es integral y contempla todos sus aspectos (cognitivos, sociales, psicomotores, físicos y afectivos) interrelacionados entre sí, que se producen en el entorno natural y cultural.',
                    requirements: [
                        {
                            title: 'Pre requisitos',
                            content: 'Haber cursado inicial 2.'
                        }
                    ],
                    more: [
                        {
                            img: 'https://pbs.twimg.com/media/ESwvs_AWAAAlwUW.jpg',
                            name: 'Primero de básica',
                        },

                    ]
                },
                {
                    title: 'Educación general básica (EGB)',
                    image: 'https://educacion.gob.ec/wp-content/uploads/2012/10/entrega-escuela-1.jpeg',
                    description: 'El estudiante desarrolla habilidades cognitivas y sociales que le permiten relacionarse y afianzar lazos con los demás, mediante el trabajo dirigido, en equipo e individual, que aporta, de manera positiva y eficaz, a la comprensión y la práctica de sus deberes y derechos.',
                    requirements: [
                        {
                            title: 'Pre requisitos',
                            content: 'Haber cursado 1ro de básica preparatoria.'
                        }
                    ],
                    more: [
                        {
                            img: 'https://jdmr.edu.ec/wp-content/uploads/2019/10/DSC_3537-1067x800.jpg',
                            name: 'Segundo EGB',
                        },
                        {
                            img: 'https://www.cec-epn.edu.ec/wp-content/sabai/File/files/l_42f483e5ce4edb733eaf9898615f4bd1.jpg',
                            name: 'Tercero EGB',
                        },
                        {
                            img: 'https://www.ueprim.edu.ec/wp-content/uploads/2021/06/galeria-egb_0006_DSC_0290.jpg',
                            name: 'Cuarto EGB',
                        },
                        {
                            img: 'https://crear.edu.ec/content/uploads/2019/10/general_basica05-min.jpg',
                            name: 'Quinto EGB',
                        },
                        {
                            img: 'https://pbs.twimg.com/media/ESwvs_AWAAAlwUW.jpg',
                            name: 'Sexto EGB',
                        },
                        {
                            img: 'https://www.ueprim.edu.ec/wp-content/uploads/2021/06/galeria-egb_0004_DSC_0006.jpg',
                            name: 'Septimo EGB',
                        },

                    ]
                },
                {
                    title: 'Educación media',
                    image: 'https://www.infobae.com/new-resizer/w1sYTry0UIh31ompsvaoeL1wva8=/992x744/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/VRBXTI4FQFGSRKQL7ZB4MBUCTI.jpeg',
                    description: 'El estudiante vincula los objetivos del Buen Vivir con la recreación, el ocio y el deporte valorando los espacios de confianza, respeto y colaboración en las prácticas corporales, diferenciando y apreciando las características interculturales, y apropiándose de su cultura.',
                    requirements: [
                        {
                            title: 'Pre requisitos',
                            content: 'Haber cursado séptimo de EGB.'
                        }
                    ],
                    more: [
                        {
                            img: 'https://www.eluniverso.com/resizer/N0ep1_juRFk_-qucFLPM35UvgIo=/arc-anglerfish-arc2-prod-eluniverso/public/SHZ3YER66BDPVJULDLTU6PR7L4.jpg',
                            name: 'Octavo',
                        },
                        {
                            img: 'https://media.primicias.ec/2023/02/06154133/Educacion070223.jpg',
                            name: 'Noveno',
                        },
                        {
                            img: 'https://www.derechoshumanos.gob.ec/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-01-at-9.35.05-AM.jpeg',
                            name: 'Décimo',
                        },
                    ]
                }
            ]
        };
    },
});
</script>

<template>
    <div ref="mountRef" class="our-program">
        <div class="grid-overlay">
            <h3>NUESTRO PROGRAMA</h3>
            <div class="programs">
                <v-menu transition="scale-transition" location="center" width="100%" v-for="(program, index) in  programs "
                    :key="index">
                    <template v-slot:activator="{ props }">
                        <v-card class="card inicial" v-bind="props">
                            <figure class="program-img">
                                <img v-lazy="program.image" alt="">
                            </figure>
                            <h4 class="title">{{ program.title }}</h4>
                            <p class="description">{{ program.description }}</p>
                            <ul style="padding: 2vh;">
                                <li class="pre-requisites" v-for="(requirement, reqIndex) in program.requirements"
                                    :key="reqIndex">
                                    <p><b>{{ requirement.title }}: </b>{{ requirement.content }}</p>
                                </li>
                            </ul>
                            <v-card-actions style="align-self: self-end; justify-self:self-end;">
                                <v-btn color="primary" class="mb-2">
                                    Ver más ...
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </template>

                    <div class="more">
                        <h4>Niveles</h4>
                        <div class="grades">
                            <div class="card level" v-for="(grade, index) in  program.more " :key="index">
                                <figure>
                                    <img v-lazy="grade.img" alt="">
                                </figure>
                                <h5>{{ grade.name }}</h5>
                            </div>
                        </div>
                    </div>
                </v-menu>


            </div>
        </div>

    </div>
</template>
  
  
<style scoped>
h4 {
    font-size: 2rem;
    color: #2D2C2C;
    font-weight: 600;
}

h3 {
    font-size: 2rem;
    letter-spacing: 1vh;
    color: #FFFFFD;
    font-weight: 600;
    text-align: center;
    padding-bottom: 5vh;
}

.our-program {
    width: 100%;
    min-height: 230vh;
    position: relative;
    background-color: #3370B8;
    overflow: hidden;
    padding: 10vh;
    padding-top: 0;
}

.grid-overlay {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 5vh;
    box-sizing: border-box;
}

.grid-overlay .programs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
    gap: 10vh;
}

.card {
    background-color: #FFFFFD;
    padding: 3vh;
    margin: 1vh;
    border-radius: 2vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2vh;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    overflow: hidden;
}

.card:hover {
    transform: scale(1.05);
}

figure img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.card .title {
    font-size: 1rem;
    font-weight: 600;
}

.card .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
    .grid-overlay .programs {
        grid-template-columns: 1fr;
        gap: 5vh;
    }
}


.pre-requisites>b {
    font-weight: 600;
    text-wrap: pretty;
}

li p {
    text-wrap: balance;
}

.more {
    width: 100%;
    height: 100%;
    background-color: rgba(49, 47, 36, 0.9);
    border-radius: 2vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}


.more h5 {
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 1vh;
    top: 1;
    color: #3370B8;
}

.more .grades {
    padding: 2vh;
    display: flex;
    flex-direction: row;
    align-items: self-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2vh;
    overflow-y: auto;
}

.grades .level {
    height: auto;
    width: auto;
    min-width: 30%;
    max-height: 70%;
    max-width: 60%;
    background-color: #FFFFFD;
    backdrop-filter: blur(10vh);
    -webkit-backdrop-filter: blur(10vh);
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2D2C2C;
}



@media (max-width: 768px) {
    .grid-overlay .programs {
        grid-template-columns: 1fr;
    }

    .our-program {
        min-height: auto;
    }
}

@media (max-width: 600px) {
    .card {
        padding: 2vh;
    }

    .card .title {
        font-size: 1.1rem;
    }

    .card .description {
        font-size: 1rem;
    }

}

@media (max-width: 768px) {

    .grid-overlay .programs {
        grid-template-columns: 1fr;
        gap: 5vh;
    }

    .grades .level {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        margin: 0;
        padding: 2vh;
    }

    .card {
        margin: 2vh 0;
    }

    .our-program {
        padding: 2vh;
    }

    .grid-overlay {
        padding-top: 0vh;
    }

    .our-program {
        min-height: auto;
    }
}
</style>
  