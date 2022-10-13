<template>
  <body>
    <div class="header">
    Phần đăng kí đăng nhập, tìm kiếm 
    </div>
  <nav class="navigationWrapper">
    <div class="logoWrapper">
      <span class="stylish" >
        LongBG
      </span>
      <span class="logo">
        OK
      </span>
    </div>
    
    <ul class="navigation">
      <li class="parent">
        <a class="link" href="">Trang chủ</a>
      </li>
      <li class="parent" id="library" @click="showMenu">
       <a class="link" href="#">
        <i class="fas fa-minus"></i>
        Thư viện
        <i class="fas fa-plus"></i>
         </a>
        <ul class="subnavigation">
           <li>
            <a class="link" href="#">Tài liệu</a>
           </li>
            <li>
            <a class="link" href="#">Video</a>
           </li>
        </ul>
      </li>
      <li class="parent">
       <a class="link">Kỳ thi</a>
      </li>
      <li class="parent">
        <a class="link">
           Bảng xếp hạng
        </a>
      </li>
      <li class="parent">
        <a class="link">
          Giới thiệu
        </a>
      </li>
    </ul>
   
  </nav>
  </body>

</template>

<script>

  export default{
    name: "DashBoard",
    methods:{
      showMenu(){
      var library=document.getElementById('library');
      // console.log("OK");
      library.addEventListener('click', function(){
        library.classList.toggle("active");
        // $(".parent:not(#library)").classList.toggleClass("invisible");
      }, false);
      }
    }
  }

  
</script>
<style>
  body{
    font-family: "Roboto", sans-serif;
  }
 body .signature{
  font-style: italic;
  font-size: 12px;
  color: #212121;
  padding-top: 15px;
  transition: all 0.3s ease-in-out;
 }
 body .signature :hover{
color: white;
 }
  .navigationWrapper{
    position: relative; 
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: white;
    overflow: hidden;
    text-transform: uppercase;
  }
  .navigationWrapper .logoWrapper{
   display: flex;
   /* Difference */
   align-items: center;
   padding: 8px
  }
  .navigationWrapper .logoWrapper .stylish{
   font-weight: bold;
   
  }
  .navigationWrapper .logoWrapper .logo{
    padding-left: 4px;
    color: #ea4f4c;
  }
  .navigationWrapper .navigation{
    display: flex; 
    list-style-type:none ;
    /* Difference */
    width: 100%;
    justify-content: center;
    
  }
  .navigationWrapper .navigation li{
    opacity: 1;
    list-style-type: none;
    color:white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
  .navigationWrapper .navigation .parent{
    padding: 0 10px;
    cursor: pointer;
  }
  .navigationWrapper .navigation .parent .link{
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: white;
  }
  .navigationWrapper .navigation .parent :hover{
   color: #ea4f4c;
  }
  .navigationWrapper .navigation .parent .fa-minus{
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: -16px;
    top: 3px;
  }
  .navigationWrapper .navigation .parent .fas-plus{
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  .navigationWrapper .navigation .parent .link .fas{
    color: #ea4f4c;
    margin: -2px 4px 0;
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .navigationWrapper .navigation .subnavigation{
    display: none;
    list-style-type: none;
    position: absolute;
    top:40%;
    left: 25%;
    margin: auto;
    transition: all 0.3s ease-in-out;
    background-color: #222;
  }
  .navigationWrapper .navigation .subnavigation li a{
    font-size: 17px;
    padding: 0 5px;
  }
  .active .parent{
    transform: translate(-40px, -25px);
     /* transform: translate(-60px, -25px); */
  }
  .active .parent .link{
    font-size: 12px;
  }
  .active .parent .link .fa-minus{
opacity: 1 !important;
font-size: 8px;
  }
  .active .parent .link .fa-plus{
    opacity: 0 !important;
  }
  .active .parent .subnavigation{
    display: flex;
  }
  .active#library .subnavigation{
    transform: translate(-150px,17px);
  }
.invisible{
  opacity: 0 !important;
  transform: translate(50px, 0);
}
</style>