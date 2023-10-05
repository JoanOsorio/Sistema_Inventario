<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Editar Herramienta</h2>
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
                  <div class="form-group row">
                    <label for="estado" class="col-sm-2 col-form-label">Estado</label>
                    <div class="col-sm-6">
                      <input disabled type="text" class="form-control" id="estado" v-model.trim="form.estado"/>
                    </div>
                  </div>
                  <div class="rows">
                    <div class="col text-left">
                      <button class="btn btn-warning" role="button" type="submit">Editar</button>
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
      herramientaId: this.$route.params.herramientaId,
      form: {
        codigo: '',
        nombre: '',
        descripcion: '',
        estado: '',
      }
    }
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()

      const path = `http://localhost:8000/api/herramientas/${this.herramientaId}/`
      
      axios.put(path, this.form).then((response) => {
        this.form.codigo = response.data.codigo
        this.form.nombre = response.data.nombre
        this.form.descripcion = response.data.descripcion
        this.form.estado = response.data.estado

        swal("Herramienta Actualizada Exitosamente", "", "success")
      })
      .catch((error) => {
            console.log(error)
      })
    },
    getHerramienta(){
      const path = `http://localhost:8000/api/herramientas/${this.herramientaId}/`
        axios.get(path).then((response) => {
            this.form.codigo = response.data.codigo
            this.form.nombre = response.data.nombre
            this.form.descripcion = response.data.descripcion
            this.form.estado = response.data.estado
        })
        .catch((error) => {
            console.log(error)
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

