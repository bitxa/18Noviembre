<script lang="ts">
import { defineComponent } from 'vue';

import ExtraInfo from './ExtraInfo.vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: 'FooterSection',
    components: { ExtraInfo, RouterLink },
    setup() {
        return;
    }
});

</script>

<template>
    <footer id="footer-section">
        <div class="content">
            <div class="school-info">
                <img src="@/assets/logo.png" alt="logo" class="logo">
                <div class="school-name">
                    <h3>Escuela de educación básica</h3>
                    <h2>18 de Noviembre</h2>
                </div>
            </div>
            <div class="social-networks">
                <a href="https://www.facebook.com/profile.php?id=100064170067067&locale=es_LA" target="_blank"
                    rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon></a>
                <a href="https://www.youtube.com/watch?v=cgfG8HtHplo" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon></a>
                <a href="https://twitter.com/EducacionZ7_Ec/status/1436005687377727490" target="_blank"
                    rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon></a>
                <a href="mailto:escuela18denoviembre@hotmail.com">
                    <font-awesome-icon
                        :icon="['fa', 'envelope']"></font-awesome-icon></a>
            </div>
            <div class="navigation">
                <div class="menu">
                    <div class="menu-item">
                        <RouterLink to="/inicio">Inicio</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink to="/matriculas">Matrículas</RouterLink>
                    </div>

                    <div class="menu-item">
                        <RouterLink to="/facilities">Facilidades</RouterLink>
                    </div>

                    <div class="menu-item">
                        <RouterLink to="/galeria">Galeria</RouterLink>
                    </div>

                    <div class="menu-item">
                        <RouterLink to="/news">Eventos y noticias</RouterLink>
                    </div>

                    <div class="menu-item">
                        <RouterLink to="/conoce">Conócenos</RouterLink>
                    </div>
                </div>
            </div>
            <span id="web-info">
                <p>© 2023 UTPL</p>
            </span>
        </div>
        <ExtraInfo />
    </footer>
</template>

<style scoped>
#footer-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    background-image: url('/images/footer.png');
    width: 100%;
    min-height: 100vh;
    background-position: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #EACC50;
    padding: 3vh;

}

#footer-section .content {
    width: 100%;
    padding: 5vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1vh;
    grid-row-gap: 1vh;
    margin-top: 20vh;
}

.school-info {
    color: #312F24;
    grid-area: 1 / 1 / 3 / 3;
    display: flex;
    align-items: center;
}

.school-info h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
}


.school-name {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1vh;
}

.logo {
    height: 60%;
    width: 50%;
}

.social-networks {
    grid-area: 1 / 3 / 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

}

.social-networks>* {
    font-size: 3rem;
    color: #312F24;
    margin: 2vh;
}

.social-networks i:hover {
    transform: scale(1.2);
}


.navigation {
    color: #312F24;
    grid-area: 1 / 4 / 3 / 5;
}

.navigation a {
    text-decoration: none;
}

.menu {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-evenly;
}

.menu-item {
    background-color: #312F24;
    margin: 1vh;
    padding: 2vh;
    border-radius: 3vh;
}

.menu-item:hover {
    background-color: #31312f;
    border-radius: 4vh;
    transform: translate3d(0, -0.5vh, 0);
}

.menu-item a {
    color: #FAFCFD;
}

#web-info {
    width: 100%;
    color: #312F24;

}

@media (max-width: 1024px) {
    #footer-section .content {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-column-gap: 1vh;
        grid-row-gap: 2vh;
        padding: 3vh;
    }

    .school-info,
    .social-networks,
    .navigation {
        grid-column: span 2;
    }

    .social-networks>* {
        font-size: 2.5rem;
    }

    .menu-item {
        margin: 1vh 0;
    }
}


@media (max-width: 768px) {
    #footer-section {
        padding: 3vh 3vh;
    }

    #footer-section .content {
        margin-top: 5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .school-info {
        grid-area: unset;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin-bottom: 2vh;
    }

    .school-info .logo {
        width: 30vh;
        height: auto;
    }

    .school-info h2,
    .school-info h3 {
        font-size: 1.5rem;
    }

    .social-networks {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 2vh;
    }

    .social-networks>* {
        font-size: 2rem;
        margin: 0 1vh;
    }

    .navigation .menu {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .navigation .menu-item {
        margin: 1vh;
        padding: 1.5vh;
        font-size: 0.9rem;
    }

    #web-info {
        font-size: 1rem;
        margin-top: 2vh;
    }
}

@media (max-width: 480px) {

    .school-info h2,
    .school-info h3 {
        font-size: 1.2rem;
    }

    .social-networks>* {
        font-size: 1.5rem;
    }

    .navigation .menu-item {
        font-size: 0.8rem;
    }
}
</style>