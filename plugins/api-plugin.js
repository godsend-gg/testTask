export default (context, inject) => {
    inject('api', api);
    context.$api=api;
  }
const api={
     getData(){    
         return fetch("http://localhost:3000/api/spec");  
    }
}