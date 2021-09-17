<template>
  <div class="twoot-item"  @click="favouriteTwoot(twoot.id,twoot)">
    <div class="user-profile__twoots">
      <div class="twoot-item__user_panel">
        <div class="twoot-item__user">
          @{{username}}
        </div>
<!--        <div class="twoot-item__favourite is-active"  @click="favouriteTwoot(twoot.id,twoot)"></div>
      -->
      </div>
    </div>
    <div class="twoot-item__content">
      {{twoot.content}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'TwootItem',
  props:{
      username:{
        type:String,
        required:true
      },
      twoot:{
      type:Object,
      required:true
    }
  },
  methods:{
    favouriteTwoot(id,twoot){

      return this.$emit('favourite',twoot);
    }
  }
}
</script>

<style lang="scss" scoped>

.twoot-item{
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  .twoot-item__user_panel{
    display: inline;

  }
  &:hover{
    transform: scale(1.1,1.1);
  }
  .twoot-item__user{
    font-weight: bold;
  }
  .twoot-item__content {
     word-wrap: anywhere;
  }
}



/*.twoot-item__favourite:before{
  color: #ec0808;
  content: "❤";
  font-size: 2em;
  position: relative;
  top: 10px;
}
.twoot-item__favourite {
  text-align: right;
}*/

/*.twoot-item__favourite {
  width: 100px;
  height: 100px;
  !*background: url("../assets/heart.png") no-repeat;*!
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;
}
.twoot-item__favourite.is-active {
  transition-duration: 1s;
  background-position: -2800px 0;
}*/

twoot-item__user_panel {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
