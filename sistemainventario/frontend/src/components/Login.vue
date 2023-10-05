<template>
    <div>
    <h3>Autenticación</h3>
    <form @submit.prevent="authenticate">
        <label>Nombre de usuario</label>
        <input v-model="username" type="text" />
        <label>Contraseña</label>
        <input v-model="password" type="password" />
        <button type="submit">Autenticar</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data (){
        return {
            form:{
                username: '',
                password: ''
            }
        }
    },
    methods: {
        authenticate() {
            // enviar credenciales al servidor para autenticarse
            axios.post('/api/auth', {
            username: this.username,
            password: this.password
            }).then(res => {
            // recibir los roles del usuario autenticado
            let roles = res.data.roles;
            // verificar si el usuario tiene el rol necesario
            if (roles.includes('admin')) {
                // redirigir al usuario a la página de administración
                this.$router.push('/admin');
            } else {
                // redirigir al usuario a la página de inicio
                this.$router.push('/');
            }
            });
        }
        },
        created(){
        
        }
    }

</script>

<style>
    
</style>

