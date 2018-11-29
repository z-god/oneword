import Vue from "vue";
var host = '/api'
export default function(){
    return Vue.axios({
       url:host+'/api/a/articles', 
       method:'GET',
       headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      }
    ).then(res =>{
        let obj = res.data
        return obj
    })
}