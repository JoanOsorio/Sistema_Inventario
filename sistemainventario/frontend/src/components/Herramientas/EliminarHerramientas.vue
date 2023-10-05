<template>
    <div class="container">
        <div class="row">
            <h1>Eliminar Herramienta</h1>
            <table class="table table-bordered table-striped">
                <thead >
                <tr>
                    <th scope="col" v-for="item in fields" key="item.key">{{item.label}}</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{this.element.codigo}}</td>
                        <td>{{this.element.nombre}}</td>
                        <td>{{this.element.descripcion}}</td>
                        <td>{{this.element.estado}}</td>
                    </tr>  
                </tbody>
            </table>
        </div>
        <div class="text-center">
            <p>Esta seguro de eliminar la Herramienta?</p>
            <button class="btn btn-danger" role="button" type="submit" v-on:click="deleteHerramienta">Eliminar</button>
            <router-link class="btn btn-secondary" role="button" type="submit" :to="{name: 'Herramientas'}">Cancelar</router-link>
        </div> 
    </div>
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert'

export default {
  data() {
    return {
        fields: [
        { key: 'codigo', label: 'Codigo'},
        { key: 'nombre', label: 'Nombre'},
        { key: 'descripcion', label: 'Descripcion'},
        { key: 'estado ', label: 'Estado'}
      ],
      herramientaId: this.$route.params.herramientaId,
      element: {
        codigo: '',
        nombre: '',
        descripcion: '',
        estado: '',
      }
    }
  },
  methods: {
    getHerramienta(){
      const path = `http://localhost:8000/api/herramientas/${this.herramientaId}/`
        axios.get(path).then((response) => {
            this.element.codigo = response.data.codigo
            this.element.nombre = response.data.nombre
            this.element.descripcion = response.data.descripcion
            this.element.estado = response.data.estado           
        })
        .catch((error) => {
            console.log(error)
        })
    },
    deleteHerramienta(){
        const path = `http://localhost:8000/api/herramientas/${this.herramientaId}/`
        
        axios.delete(path).then((response) => {
            location.href = "/herramientas"
        })
        .catch((error) => {
            swal("No es posible eliminar la herramienta", "", "error")
        })
    }
  },
    created(){
        this.getHerramienta()
    }
}
</script>

<style>
  a{
      margin: 2px;
  }

  .col-sm-6{
    margin: 10px;
    display: flex;
  }
</style>

