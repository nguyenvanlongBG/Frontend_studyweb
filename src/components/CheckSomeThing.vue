<template>
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
 <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CNavbarBrand href="#">Long BG</CNavbarBrand>
    
      <CCollapse class="navbar-collapse" :visible="visible" style="justify-content: center;" > 
       <CNavbarNav  class="mb-2 mb-lg-0" > 
        <CNavItem>
         <DashBoardLinkCard 
         title="Trang chủ"
         pathName="home"
         />
          
        </CNavItem>
        <CNavItem>
         <DashBoardLinkCard
         title="Thư viện"
         pathName="library"
         />

          
          <!-- <CNavLink href="/library">Thư viện</CNavLink> -->
        </CNavItem>
        <CNavItem>
          <!-- <CNavLink href="/exam" >
            Kỳ thi
          </CNavLink> -->
          <DashBoardLinkCard
          title="Kỳ thi"
          pathName="exam"
          />
        </CNavItem>
         <CNavItem>
          <!-- <CNavLink href="/charts" >
            Bảng xếp hạng
          </CNavLink> -->
          <DashBoardLinkCard
          title="Bảng xếp hạng"
          pathName="charts"
          />
        </CNavItem>
       </CNavbarNav> 
      
    </CCollapse>
  </CContainer>
</CNavbar>
</template>

<script>
import DashBoardLinkCard from './DashBoard/DashBoardLinkCard.vue';

  export default{
    name: "DashBoard",
    data() {
        return {
            visible: true
        };
    },
    components: {  DashBoardLinkCard }
}
</script>