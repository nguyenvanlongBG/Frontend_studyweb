<template>
<h2>Register</h2>
<form @submit.prevent="handleSubmit">
    <div class="form-group">
         <label for="name">Name</label>
         <input type="text" v-model="user.name" name="name" class="form-control" :class="{'is-invalid':submited && !name}"/>
    </div>
<div class="form-group">
         <label htmlFor="email">Email</label>
         <input type="email" v-model="user.email" name="email" class="form-control" :class="{'is-invalid':submited && !email}"/>
    </div>
    <div class="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" v-model="user.password" name="password" class="form-control" :class="{'is-invalid':submited && !password}"/>
    </div>
     <div class="form-group">
         <label htmlFor="role">Role</label>
         <input type="text" v-model="user.role" name="role" class="form-control" :class="{'is-invalid':submited && !role}"/>
    </div>
    <div class="form-group">
         <label htmlFor="level">Level</label>
         <input type="integer" v-model="user.level" name="level" class="form-control" :class="{'is-invalid':submited && !level}"/>
    </div>
    <div class="form-group">
         <label htmlFor="point">Point</label>
         <input type="integer" v-model="user.point" name="point" class="form-control" :class="{'is-invalid':submited && !point}"/>
    </div>
    <div class="form-group">
         <button type="Submit">Register</button>
         <router-link to="/login" class="btn btn-link">Login</router-link>
    </div>
</form>
</template>

<script>

   const axios=require('axios');
   export default{
    data(){
        return {
            user:{
             name: '',
             email: '',
             password : '',
             role: '',
             level: 0,
             point: 0,
        }
    }
    },
    methods:{
        handleSubmit(){
           this.submited=true;
           axios.post('http://localhost:8000/api/register', this.user)
           .then(function(){
            console.log(this.user)
           })
        .catch(function(){
            console.log(this.user)
        })
        }
    }
   }



</script>