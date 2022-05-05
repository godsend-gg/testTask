<template>
<v-main>
     <add-form 
     :docList="docList" 
     @moreSpec="moreSpec"/>
</v-main>
</template>

<script>
import AddForm from '../components/AddForm.vue'
export default {
  name: 'IndexPage',
  components: { AddForm },
  data() {
    return {
      docList:[],
    }
    
  },
    created(){
        this.moreSpec(0);
  },
  methods: { 
  async moreSpec(){
          const moreDoctors=await this.$api.getData();
          const nestedObj=(await moreDoctors.json()).data;
          this.docList=[...this.docList, ...nestedObj];
  },  
 
  },
}


</script>
<style lang="scss" >
.v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after {
    content: none;
}
.v-label{
   color:#757F93 !important;
}
.mdi-menu-down::before{
    content: "\F0140";
    color:#757F93;
}
.mdi-close::before {
    color:#757F93;
}
.v-text-field__details{
    display: none;
}
.v-input__control{
    height: inherit;
}
.v-input__slot{
  height: inherit;
  margin-bottom: 0;
}
.v-select__slot{
    margin: 20px 18px;
}
.primary--text{
  margin-top: 8px;
  font-size: 11px !important;
  line-height: 16px !important;
  letter-spacing: 0.3px !important;
  color: #9F9F9F !important;

}
.v-main__wrap{
  flex: 0 0 auto !important;
}
.v-menu__content{
  margin-top: 8px;
  box-shadow: 0px 14px 24px 
  rgba(31, 49, 73, 0.25);
  border-radius: 5px !important;
  max-height: 280px !important;
}
.v-list{
  padding: 5px 0;
}
.v-list-item{
  min-height: 30px;
  padding: 0 14px;
  color: #1F3149 !important;
}
.v-list-item__content{
  padding: 4px 0 4px 0;
}
.v-menu__content::-webkit-scrollbar-thumb{
    background-color: #387AFF;
    border-radius: 5px;
}
.v-menu__content::-webkit-scrollbar{
    background-color: #F1F4F9;
    border-radius: 5px;
    width: 5px;
}
</style>