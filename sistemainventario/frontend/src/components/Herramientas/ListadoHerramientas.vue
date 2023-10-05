<template>
    <div class="container">
        <div class="row">
            <div class="text-left">
                <h1>Listado de Herramientas</h1>
                <router-link class="btn btn-primary" role="button" type="submit" :to="{name: 'CrearHerramientas'}">Crear</router-link>
            </div>
            <table class="table table-bordered table-striped" id="tabla">
                <thead >
                <tr>
                    <th scope="col" v-for="item in fields" key="item.key">{{item.label}}</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in herramientas" :key="index">
                        <td>{{data.codigo}}</td>
                        <td>{{data.nombre}}</td>
                        <td>{{data.descripcion}}</td>
                        <td>{{data.estado}}</td>
                        <td>
                            <div class="text-center">
                                <router-link class="btn btn-warning" href="" role="button" type="submit" :to="{name: 'EditarHerramientas', params: {herramientaId: data.id}}">Editar</router-link>
                                <router-link class="btn btn-danger" href="" role="button" type="submit" :to="{name: 'EliminarHerramientas', params: {herramientaId: data.id}}">Eliminar</router-link>
                            </div>
                        </td>
                    </tr>  
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      fields: [
        { key: 'codigo', label: 'Codigo'},
        { key: 'nombre', label: 'Nombre'},
        { key: 'descripcion', label: 'Descripcion'},
        { key: 'estado ', label: 'Estado'},
        { key: 'action'}
      ],
      herramientas: []
    }
  },
  methods: {
    getHerramientas () {
        
        const path = 'http://localhost:8000/api/herramientas/'
        axios.get(path).then((response) => {
            this.herramientas = response.data
            //console.log(this.herramientas)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    },
    created(){
        this.getHerramientas()
    }
}
</script>

<style>
a{
    margin: 2px;
}

#tabla{
    margin: 10px;
}

</style>

