<template>
    <div class="container" style="margin-top: 70px;" :contacts="contacts">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(author, index) in authors"  v-bind:key="author.id">

                <!--
                <td> {{ index }}</td>
                -->
                <td> {{ index }}</td>
                <td> {{ author.name }}</td>
                <td> {{ author.email }}</td>
                <td>
                <button class="btn btn-success" @click="showDetails(author)"> Show details</button>
                </td>
            </tr>
            </tbody>
        </table>
        
        <div class="card text-center" v-if="currentAuthor">
            <div class="card-header">
                # {{currentAuthor.id}}
            </div>
            <div class="card-<th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>block">
                <h4 class="card-title">{{currentAuthor.name}}</h4>
                <p class="card-text">
                {{currentAuthor.description}}
                </p>    
            </div>

            </div>
        
        </div>
</template>

<script>

import { mapState } from 'vuex'

export default {

    data(){
        return{
            currentAuthor: []
        }
    },
    computed: {
        ...mapState([
      'authors',
    ])},
    methods:{
        showDetails(author){
            this.currentAuthor = author;
        }
    }

}
</script>