<template>
     <button type="button" @click="$emit(loadData)">
       <div>Найти</div>
     </button>
</template>
<style lang="scss" scoped>
button{
  width: 105px;
  height: 54px;
  background: #387AFF;
  border-radius: 10px;
  color: #FFFFFF;
}
div{
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  width: 55px;
  height: 20px;
  margin:17px 25px;
  line-height: 20px;
}
</style>