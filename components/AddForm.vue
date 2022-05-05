<template>
 <v-form
    class="d-inline-flex justify-center"
 >
                 <v-autocomplete
                    clearable
                    :items="docList"
                    item-text="title"
                    label="Врач, заболевания, услуги"
                    placeholder="Врач, заболевания, услуги"
                    no-data-text="Не найдено специальностей"
                 >
                 <v-list-item-title
                     slot="prepend-item"
                     >
                     Специальность
                 </v-list-item-title>
                 <!-- <template slot="append-item">
                     <div v-intersect="loadData"/>
                 </template> -->
                 </v-autocomplete>
                 <add-button/>
 </v-form>

</template>

<script>
import AddButton from './AddButton.vue'
export default {
  components: { AddButton },
  props:{
    docList: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data(){
      return{
          isIntersecting: false,
      }
  },
  methods:{
      loadData(isIntersecting){
          if(isIntersecting){
              this.$emit("moreSpec");
          }
      },
  }
}


</script>
<style lang="scss" scoped>
.v-input{
    height: 54px;
    width: 424px;
    background: #F2F8FF;
    border-radius: 10px;
    padding: 0;
    margin-right: 10px;
    flex: 0 0 auto;
    align-items: center;
}
.v-text-field{
    margin-top: 0;
}
.mdi-menu-down::before{
    content: "\F0140";
}
.v-input:hover{
outline: 2px solid #1160FF;
}
.v-form{
  margin: 20px auto;
}
.v-list-item__title{
    color: #808080;
    font-size: 13px;
    line-height: 16px;
    padding:0 0 5px 14px;
    border-bottom: 1px solid #9CBDFF;
}

</style>