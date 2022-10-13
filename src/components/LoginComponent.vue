<template>
<h2>Login</h2>
<form @submit.prevent="handleSubmit">
    <div class="form-group">
         <label for="email">Email</label>
         <input type="text" v-model="user.email" name="email" class="form-control" :class="{'is-invalid':submited && !email}"/>
    </div>
<div class="form-group">
         <label htmlFor="user.password">Password</label>
         <input type="password" v-model="user.password" name="password" class="form-control" :class="{'is-invalid':submited && !password}"/>
    </div>
    <div class="form-group">
         <button type="Submit">Login</button>
         <router-link to="/register" class="btn btn-link">Register</router-link>
    </div>
</form>
</template>

<script>

   const axios=require('axios');
   export default{
    data(){
        return {
            user:{
             email: '',
             password : '',
        }
    }
    },
    methods:{
        handleSubmit(){
           this.submited=true;
           axios.post('http://localhost:8080/api/login', this.user)
           .then(response=>{
            window.localStorage.setItem('token', response.data.token)
            console.log(response)        
        })
        .catch(response=>{
            console.log(response)
        })
        }
    }
   }



</script>