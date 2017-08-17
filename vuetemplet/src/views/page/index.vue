<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{ name: 'pageone'}">moduleone pageone</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'pagetwo'}">moduletwo pagetwo</router-link>
        <!--<a v-link="{path:'/router2'}">router2</a>-->
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'pagen'}">modulen pagen</router-link>
      </div>
    </div>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import header from './v-header.vue'
  import footer from './v-footer.vue'
  export default {
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }
</script>
