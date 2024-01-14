<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
export default defineComponent({
  name: 'FirstSection',
  components: { RouterLink },
  setup() {
    return;
  }
});

</script>


<template>
  <div class="first-section">
    <div class="left">
      <h3>
        El futuro de tus <b>hijos merece</b> la pena
      </h3>
      <p>Creemos que cada niño tiene talentos
        esperando a ser descubiertos.</p>

      <div class="actions">
        <RouterLink to="/matriculas" active-class="active">
          <button class="matricularse">
            ¿Cómo matricularse?
          </button>
        </RouterLink>

        <RouterLink to="/conoce" active-class="active">
          <button class="know-school">
            <font-awesome-icon icon="fa-circle-play"></font-awesome-icon>
            Conoce la escuela
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="right">
      <div class="one">
      </div>
      <div class="two">

      </div>
      <div class="three">

      </div>
      <div class="four">

      </div>
    </div>
  </div>
</template>
<style scoped>
.first-section {
  width: 100%;
  height: auto;
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10vh;
  background-color: #FAF9F5;
  background-image: url('/images/first_section.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding-bottom: 2vh;
}


.left,
.right {
  flex: 1 1 50%;
}

.left {
  flex: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/images/pencil_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
  border-radius: 0vh 0vh 60vh 0vh;
  background-color: rgb(255, 255, 255);
  padding: 2vh;
  padding-top: 0vh;
}

.left h3 {
  font-size: 3rem;
  color: #41444B;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5vh;
  padding: 2vh;
}

.left p {
  margin-top: 1vh;
  font-size: 1.2rem;
  padding: 2vh;
  color: #272829;
  font-weight: 300;
  border-radius: 2vh;
}

.right {
  padding: 2vh;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 14px;
}

.right .one,
.two,
.three,
.four {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.one {
  border-radius: 50%;
  background-image: url("/images/section_one-one.webp");
}

.two {
  border-radius: 10%;
  background-image: url("/images/section_one-two.webp");
}

.three {
  border-radius: 10%;
  background-image: url("/images/section_one-three.webp");
}

.four {
  border-radius: 40% 10% 10% 10%;
  background-image: url("/images/section_one-four.webp");
}

.first-section .left .actions {
  display: flex;
  gap: 3vh;
  width: 100%;
  margin-top: 2vh;
  padding: 2vh;

}

.actions .matricularse {
  color: #41444B;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 1.5vh 4vh;
  background-color: #FED059;
  border: none;
  border-radius: 1vh;
}

.actions .matricularse:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.actions .know-school {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1vh;
  border-radius: 1vh;
  color: #3370B8;
  border: none;
  font-size: 1rem;
}

.actions .know-school:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .first-section {
    min-height: unset;
    flex-direction: column;
  }

  .left,
  .right {
    flex-basis: 100%;
    width: 100%;
    padding: 1vh;
  }

  .left {
    align-items: flex-start;
  }

  .right {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 2vh;
  }
}



@media (max-width: 768px) {
  .left p {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .first-section .left {
    align-items: start;
    justify-content: start;
    padding-top: 7vh;
  }

  .left {
    padding-right: 1vh;
  }

  .actions {
    margin-top: 1vh;
  }

  .left h3 {
    padding: 2vh;
    font-size: 2.5rem;
  }

  .left p {
    font-size: 1rem;
  }

  .actions button {
    font-size: 0.8rem;
    padding: 0.8vh 1vh;
  }
}

@media (max-width: 480px) {
  .left h3 {
    font-size: 2rem;
  }

  .left p {
    font-size: 0.9rem;
  }

  .actions {
    flex-direction: column;
  }
}
</style>
