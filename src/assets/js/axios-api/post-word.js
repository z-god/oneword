import Vue from "vue";
var host = '/api'
export default function(word){
    return Vue.axios({
       url:host+'/api/a/add', 
       method:'POST',
       data:word,
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