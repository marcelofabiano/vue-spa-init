<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">My Title</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>home</md-icon>
          <router-link :to="{name:'dashboard'}" class="md-list-item-text">Dashboard</router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>list</md-icon>
          <router-link :to="{name:'categories.index'}" class="md-list-item-text">Categories</router-link>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <router-view></router-view>
    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      showNavigation: false
    })
  }
</script>

<style lang="scss" scoped>
  body,
  .md-app,
  .md-app-side-drawer,
  .page-container,
  .md-layout-row {
    height: 100%;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>
