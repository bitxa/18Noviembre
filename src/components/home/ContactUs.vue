<script lang="ts">
import { defineComponent, ref } from 'vue';
import emailjs from 'emailjs-com';

// Declare the grecaptcha object
declare global {
    interface Window {
        grecaptcha: any;
    }
}

export default defineComponent({
    name: 'ContactUs',

    mounted() {
        // Dynamically load the reCAPTCHA script
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    },

    setup() {
        const snackbar = ref(false);
        const snackbarText = 'Tú mensaje se ha anviado exitosamente! Espera nuestra respuesta.';


        const formInputs = {
            user_name: ref(''),
            user_lastname: ref(''),
            user_email: ref(''),
            message: ref(''),
        };

        const sendEmail = async (e: Event) => {
            e.preventDefault(); // Prevent the default form submission

            // Ensure grecaptcha is loaded
            if (typeof window.grecaptcha === 'undefined') {
                alert("reCAPTCHA not loaded");
                return;
            }

            const recaptchaResponse = window.grecaptcha.getResponse();

            if (recaptchaResponse === "") {
                alert("Por favor completa el reCAPTCHA");
                return;
            }

            emailjs.init("FG9-ffs5-z62Bo_jH"); // Replace with your EmailJS user ID

            try {
                await emailjs.send("service_669svz6", "template_39xt3ia", {
                    nombre: formInputs.user_name.value,
                    apellido: formInputs.user_lastname.value,
                    email: formInputs.user_email.value,
                    mensaje: formInputs.message.value,
                    from_name: formInputs.user_name.value,
                    reply_to: formInputs.user_email.value,
                    "g-recaptcha-response": recaptchaResponse // Include the reCAPTCHA response
                });


                snackbar.value = true;

                formInputs.user_name.value = '';
                formInputs.user_lastname.value = '';
                formInputs.user_email.value = '';
                formInputs.message.value = '';

                // Reset reCAPTCHA
                if (window.grecaptcha) {
                    window.grecaptcha.reset();
                }
            } catch (error) {
                snackbar.value = false;
                alert(error);
            }
        };

        return {
            ...formInputs,
            sendEmail,
            snackbar,
            snackbarText
        };
    }
});
</script>

<template>
    <div class="contact-us">

        <div class="left">
            <h3>Contáctanos</h3>

            <img v-lazy="'/images/contact_us_officer.png'" alt="">
        </div>

        <div class="right">
            <form class="contact-form" @submit.prevent="sendEmail">
                <div class="name-input">
                    <h5>Nombres</h5>
                    <input v-model="user_name" class="name" type="text" placeholder="">
                </div>

                <div class="lastname-input">
                    <h5>Apellidos</h5>
                    <input v-model="user_lastname" class="lastname" type="text" placeholder="">
                </div>

                <div class="email-input">
                    <h5>Correo electrónico</h5>
                    <input v-model="user_email" class="email" type="email" placeholder="">
                </div>

                <div class="message-input">
                    <h5>¿En qué podemos ayudarte?</h5>
                    <textarea v-model="message" class="message" placeholder=""></textarea>
                </div>

                <div id="emailjs-recaptcha" class="g-recaptcha" data-sitekey="6LdM5VApAAAAAGR--TCjMz0UoF9yLpiRAmRGuovI">
                </div>

                <div class="actions">
                    <button class="send" type="submit" @click="snackbar = true">Enviar</button>
                </div>
            </form>
        </div>
    </div>

    <v-snackbar v-model="snackbar" :timeout="5000">
        {{ snackbarText }}

        <template v-slot:actions>
            <v-btn color="green" variant="elevated" @click="snackbar = false">
                Cerrar
            </v-btn>
        </template>
    </v-snackbar>
</template>

<style scoped>
.contact-us {
    width: 100%;
    min-height: 100vh;
    background-image: url('/images/contact_us.png');
    background-position: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 0px 0px;
    padding: 0vh;
}

.left {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
}

.right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #312F24;
    flex-wrap: wrap;
}

.right .contact-form {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 2vh;
    box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 2vh;
    grid-row-gap: 4vh;
    align-items: center;
    justify-content: center;
}

.left img {
    padding: 4vh;
    width: 100%;
    height: 60%;
}

.right .contact-form {
    width: 80%;
    height: 60%;
    padding: 4vh;
}

.right .contact-form h5 {
    font-size: 1rem;
    margin: 1vh 0vh 1vh 0vh;
    font-weight: 500;
}

input,
textarea {
    font-size: 1rem;
    padding: 1vh 2vh;
    width: 100%;
    outline: none;
    background: #FFFFFF;
    color: #312F24;
    border: 0.2vh solid #23547B;
    border-radius: 5px;
    box-shadow: 1vh 1vh 0.8vh 0 #E2E2E2;
    transition: .3s ease;
}

input:focus,
textarea:focus {
    background: #F2F2F2;
    border: 0.1vh solid #23547B;
    border-radius: 10px;
}

input::placeholder,
textarea::placeholder {
    color: #DDDDDD;
}

button.send {
    color: #FAFCFD;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: #F1BF45;
    width: 50%;
    padding: 1vh;
    border-radius: 5vh;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button.send:hover {
    background-color: #f9d374;
}

.left h3 {
    margin-top: 50%;
    font-size: 4rem;
    font-weight: 600;
    color: #312F24;
}

@media (max-width: 768px) {
    .contact-us {
        grid-template-columns: 1fr;
        min-height: auto;
        background-position: top center;
        padding-top: 5vh;
    }

    .left,
    .right {
        width: 100%;
        justify-content: center;
    }

    .left img {
        display: block;
        height: auto;
        max-height: 30vh;
        width: 90%;
        margin-top: 2vh;
    }

    .left h1 {
        font-size: 3rem;
        padding-top: 0;
    }

    .right .contact-form {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto auto;
        grid-template-areas:
            "name"
            "lastname"
            "email"
            "message"
            "send";
        width: 90%;
        height: auto;
        padding: 4vh;
    }

    .name-input {
        grid-area: name;
    }

    .lastname-input {
        grid-area: lastname;
    }

    .email-input {
        grid-area: email;
    }

    .message-input {
        grid-area: message;
    }

    .actions {
        grid-area: send;
        display: flex;
        justify-content: center;
        padding-top: 2vh;
    }

    .actions .send {
        width: auto;
        padding: 1.5vh 4vh;
    }

    .left h3 {
        font-size: 3rem;
    }
}
</style>
