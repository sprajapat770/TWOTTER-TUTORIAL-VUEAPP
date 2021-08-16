<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{state.user.userName}}</h1>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
        Admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers </strong>{{followers}}
      </div>
      <create-twoot-panel @add-twoot="addNewTwoot"/>
    </div>

    <div class="user-profile__twoots-wrapper">
      <twoot-item v-for="twoot in state.user.twoots" :key="twoot.id" :twoot="twoot" :username="state.user.userName" @favourite="toggelFavourite"/>
<!--      <div class="user-profile__twoot" v-for="twoot in user.twoots" :key="twoot.id">
        <img src="../assets/logo.png" alt="Avatar" style="width:100px">
        <div class="user-profile__twoot-content">
          {{twoot.content}}
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import {reactive,computed} from "vue";
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from "../components/CreateTwootPanel";
import {useRoute} from "vue-router";
import {users} from "../assets/users";

export default {
  name: 'UserProfile',
    setup() {
      const route = new useRoute()

      const fullName = computed(()=> `${state.user.firstName} ${state.user.lastName}`)
      const userId = computed(()=> route.params.userId)
      const state = reactive({
        followers:0,
        user:users[userId.value - 1] || users[0]
      })
      function toggelFavourite(twoot){
        twoot.isfavourite = !twoot.isfavourite;
        console.log(`Favourited tweet #${twoot.id}`)
        console.log(`is Favourited #${twoot.isfavourite}`)
      }

      function addNewTwoot(newTwootContent){
        state.user.twoots.unshift({
          id:state.user.twoots.length+1,
          content: newTwootContent
        });
      }
      //if(userId) fetchUserFromApi(userId)
      return {
        state,
        userId,
        fullName,
        toggelFavourite,
        addNewTwoot
      }
  },
  components:{
    TwootItem,
    CreateTwootPanel
  },
  /*data() {
    return{
      followers:0,
      user: {
        id: 1,
        userName: 'sprajapat770',
        firstName: 'Suraj',
        lastName: 'Prajapat',
        email: 'sprajapat770@gmail.com',
        isAdmin: true,
        twoots:[
          {id:1,content:'Amazing Twitter Account',isfavourite:false},
          {id:2,content:'Here You can put more twitts',isfavourite:false}
        ]
      }
    }
  },*/
  watch: {
    followers(newFollwerCount, oldFollwerCount){
      if (oldFollwerCount < newFollwerCount){
        console.log(`${this.state.user.userName} has gained a follwer!`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;

    h1{
      margin: 0;
    }

    .user-profile__admin-badge{
      background: rebeccapurple;
      color: white;
      border-radius:5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }
  .user-profile__twoots-wrapper{
    display: grid;
    width: 100%;
    grid-gap: 10px;

  }
}
/*.user-profile__twoots-wrapper{
  margin: auto;
  display: flex;
  flex-direction: column;
}*//*
.user-profile__twoot {
  !* Add shadows to create the "card" effect *!
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px auto;
  width: 100%;
  padding: 0 10px;
}

!* On mouse-over, add a deeper shadow *!
.user-profile__twoot:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

!* Add some padding inside the card container *!
.user-profile__twoot-content {
  padding: 2px 16px;
}

.user-profile__twoot img {
  border-radius: 5px 5px 0 0;
}*/
</style>
