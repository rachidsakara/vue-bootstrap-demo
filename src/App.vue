<template>
  <div id="app">
    <Header></Header>
     <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>


import Header from './components/Header' // import the Header component
import Footer from './components/Footer' // import the Footer component


  export default {

    components:{
      Header,
      Footer
    }
  }
  
</script>



