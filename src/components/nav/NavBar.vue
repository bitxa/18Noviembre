<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: 'NavBar',
    components: {
        RouterLink
    },

    setup() {
        const isMenuOpen = ref(true);

        function toggleMenu() {
            isMenuOpen.value = !isMenuOpen.value;
        }

        return { isMenuOpen, toggleMenu };
    }
});
</script>


<template>
    <nav>
        <div class="header-info">
            <button @click="toggleMenu" class="hamburger">
                <font-awesome-icon icon="fa-bars"></font-awesome-icon>
            </button>
            <div class="school-info">
                <img src="@/assets/logo.png" alt="logo" class="logo">
                <div class="school-name">
                    <h1>18 de Noviembre</h1>
                    <h2>Escuela de educación básica</h2>
                </div>
            </div>

        </div>
        <div class="menu" v-show="isMenuOpen">
            <div class="menu-item">
                <RouterLink to="/inicio" active-class="active">Inicio</RouterLink>
            </div>

            <div class="menu-item">
                <RouterLink to="/matriculas" active-class="active">Matrículas</RouterLink>
            </div>

            <div class="menu-item">
                <RouterLink to="/historia" active-class="active">Reseña histórica</RouterLink>
            </div>

            <div class="menu-item">
                <RouterLink to="/simbolos" active-class="active">Símbolos institucionales</RouterLink>
            </div>

            <div class="menu-item">
                <RouterLink to="/conoce" active-class="active">Conócenos</RouterLink>
            </div>

            <div class="menu-item">
                <RouterLink to="/galeria" active-class="active">Galeria</RouterLink>
            </div>

        </div>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vh 2vh;
    position: fixed;
    top: 0;
    background-color: rgb(252, 249, 249, 0.9);
    z-index: 9999;
    border-bottom: 0.1vh solid #ccc;
}

.header-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
}

.school-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 8vh;
    width: auto;
}

.school-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 1rem;
}

.school-name h1 {
    color: #3370b8;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
}

.school-name h2 {
    color: #312f24;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5vh;
}

.menu a {
    color: #898989;
    text-decoration: none;
    transition: color 0.3s;
    font-weight: normal;
    font-size: 0.9rem;
}

.menu a:hover,
.menu a.active {
    color: #3370b8;
    font-weight: 600;
}

.menu .menu-item {
    color: #312f24;
    padding: 0 1vh;
    border-bottom: 0.5vh solid transparent;
}

.menu .menu-item:hover,
.menu .menu-item.active {
    border-bottom-color: #3370b8;
}

.hamburger {
    cursor: pointer;
    background: none;
    border: none;
    display: none;
    width: auto;
    font-size: 1rem;
    background-color: #312f24;
    color: #FDFDFD;
    padding: 2vh;
    padding-top: 0.7vh;
    padding-bottom: 0.7vh;
    border-radius: 1vh;
    margin: 0;
}


@media (max-width: 600px) {
    .header-info {
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-grow: 1;
    }

    .hamburger {
        display: block;
    }


    nav {
        padding: 1vh;
        flex-direction: column;
        width: 100%;
    }

    .menu-item {
        width: 100%;
        padding: 1.5rem;
        text-align: center;
    }

    .menu-item a {
        padding: 0.75rem 0;
        display: block;
    }

    .logo {
        height: 6vh;
        width: auto;
        margin-bottom: 0.5rem;
    }

    .school-name {
        align-items: center;
        text-align: center;
        margin: 0;
    }

    .school-name h1,
    .school-name h2 {
        text-align: center;
    }
}
</style>
