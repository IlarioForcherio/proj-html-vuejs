<template>
    <div class="section5">
    
    <Section5CardComp 
    v-for="elem,ind in Section5Team" 
    :key='ind' :Section5Team="elem"  /> 

        
    </div>
</template>

<script>
import Section5CardComp from   '../components/Section5CardComp.vue'
export default {
    name: 'Section5Comp',
    components: {
        Section5CardComp,

    },
    props: {
        Section5Team:Array

    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.section5 {
   display: flex;
  
    
}
    

</style>