<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <a class="navbar-brand" href="#">Vue Bootstrap Demo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                     <router-link class="nav-link" to="/authors">Authors</router-link>
                </li>
                <li class="nav-item">
                     <router-link class="nav-link" to="/new">New</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>

    .nav-item{
        padding:2px;
        margin-left: 7px;
    }

</style>