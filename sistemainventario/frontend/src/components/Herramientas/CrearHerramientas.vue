<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Nueva Herramienta</h2>
            </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="onSubmit">
                  <div class="form-group row">
                    <label for="codigo" class="col-sm-2 col-form-label">Código</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" id="codigo" v-model.trim="form.codigo"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" id="nombre" v-model.trim="form.nombre"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="descripcion" class="col-sm-2 col-form-label">Descripción</label>
                    <div class="col-sm-6">
                      <textarea type="text-area" class="form-control" id="descripcion" rows="3" v-model.trim="form.descripcion"></textarea>
                    </div>
                  </div>
                  <div class="rows">
                    <div class="col text-left">
                      <button class="btn btn-warning" role="button" type="submit">Crear</button>
                      <router-link class="btn btn-secondary" role="button" type="submit" :to="{name: 'Herramientas'}">Cancelar</router-link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert'

export default {
  data() {
    return {
      form: {
        codigo: '',
        nombre: '',
        descripcion: '',
        estado: 1,
      }
    }
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()

      const path = 'http://localhost:8000/api/herramientas/'
      
      axios.post(path, this.form).then((response) => {
        this.form.codigo = response.data.codigo
        this.form.nombre = response.data.nombre
        this.form.descripcion = response.data.descripcion
        this.form.estado =  response.data.estado

        swal("Herramienta Creado Exitosamente", "", "success")
      })
      .catch((error) => {
        swal("La Herramienta no ha sido creado", "", "success")
      })
    },
  },
    created(){
      
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

