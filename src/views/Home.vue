<template>
  <div class="home">
    <h1>Home</h1>
    <div class="user-list">
      <router-link v-for="user in users" :to="{name:'UserProfile', params: { userId: user.id}}" :key="user.id">
        {{user.userName}}
      </router-link>
    </div>
  </div>
</template>

<script>
import {users} from "../assets/users";
export default {
  name: 'Home',
  setup() {
    return{
      users
    }
  }
}
</script>
<style lang="scss">
.home{
  padding: 50px 5%;
  .user-list{
    display: flex;
    flex-direction: column;
  }
}
</style>
