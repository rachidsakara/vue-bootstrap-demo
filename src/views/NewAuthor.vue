<template>
    <div class="container" style="margin-top: 70px;">

    <div class="row">

        <div class="col-sm-8 offset-sm-2">

        <div>
            <form>
            <div class="form-group">
                <label for="id">ID</label>
                <input v-model="author.id" type="text" name="id" class="form-control" id="id" aria-describedby="idHelp" placeholder="Enter ID">
                <small id="idHelp" class="form-text text-muted">Enter your author’s ID</small>

                <label for="name">author Name</label>
                <input v-model="author.name" type="text" name="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your name">
                <small id="nameHelp" class="form-text text-muted">Enter your author’s name</small>

                <label for="email">author Email</label>
                <input v-model="author.email" type="text" name="email" class="form-control" id="email" aria-describedby="emailHelp"
                placeholder="Enter your email">
                <small id="nameHelp" class="form-text text-muted">Enter your author’s email</small>

                <label for="description">author Description</label>
                <textarea v-model="author.description" name="description" class="form-control" id="description" aria-describedby="descHelp">
                        </textarea>
                <small id="descHelp" class="form-text text-muted">Enter your author’s description</small>

            </div>
            </form>
            <button class="btn btn-success" @click="addauthor">Create author</button>
        </div>
        </div>
    </div>
  </div>

</template>

<script>

import { mapMutations } from 'vuex' 


    export default {
        data() {
            return {
                author: {id: null, name: "", description: "", email: ""}
            }
        },

        methods: {
            ...mapMutations([
            'ADD_AUTHOR'
            ]),
            addauthor: function() {
            this.ADD_AUTHOR(this.author)
            this.author = {id: null, name: "", description: "", email: ""}
            }
        }
    }
</script>