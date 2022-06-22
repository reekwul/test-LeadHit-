<template >
<h1>LeadHit</h1>
    <div class="form">
        <div class="form_blok">
            <input
                class="inp"
                type="text"
                v-model="input"
                @focus="this.visib = false"
            >
            <div class="btn_box">
                <button
                class="btn"
                @click="click(input)"
            >Войти</button>
                <p v-if="visib"><strong>id сайта должен содержать 24 символа</strong></p>
            </div>

        </div>
    </div>


</template>

<script>
import axios from "axios";
export default {
    name: "v-avtorization",
    data(){
        return{
            input:'',
            visib: false,
        }
    },
    methods:{
        async click(s){
            this.visib = s.length !== 24
            let header ={
                'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                'Leadhit-Site-Id': this.input
            }
            if(!this.visib){
             const msg = await axios.get('https://track-api.leadhit.io/client/test_auth',
                 {
                     headers: header
                 }
             );
             if(msg.data.message === 'ok'){
                 localStorage.setItem('value',this.input )
             }
             console.log(localStorage)
            }
        },

    },
}
</script>

<style scoped>
h1{
    margin: 20px;
    padding: 10px;
    position: relative;
    left: 100px;
    font-size: 50px;
}
.form{
    border-radius: 10px;
    box-shadow: 3px 3px 9px rgba(0,0,0, 0.5) ;
    border: 2px solid darkcyan;
    width: 500px;
    align-self: center;
}
.form_blok{
    margin: 10px;
    padding: 15px;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.inp{

    border: 2px solid darkcyan;
    padding: 15px;
    font-size: 20px;
    outline:none;
    transition: 0.4s;
}
.inp:focus{
    box-shadow: 1px 1px 2px rgba(0,0,0, 0.3) ;

}

.btn_box{
    display: flex;
    justify-content: space-between;
}
.btn_box p{
    font-size: 14px;
    color: tomato;
    margin: 0;
}
.btn{
     width: 150px;
     border: 2px solid darkcyan;
     padding: 10px;
     font-size: 25px;
     background: white;
     color: darkcyan;
     transition: 0.1s;
 }
.btn:active{
    box-shadow: 1px 1px 2px rgba(0,0,0, 0.3);
}
</style>