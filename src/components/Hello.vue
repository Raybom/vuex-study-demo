<template>
    <div class="list">
      <input type="text" name="title" v-model:value="name" placeholder="名字">
      <input type="text" name="href" v-model:value="href" placeholder="href">
      <button type="button" @click="add(name,href)">添加</button>
      <h2>我的收藏</h2>
      <ul class="star-list">
        <li class="item" v-for="item of starList">
          <a :href="item.href">{{item.title}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      href: ''
    }
  },
  computed: {
    ...mapState([
    'starList'
  ])
  },
  methods: {
    ...mapMutations([
      'addStarList'
    ]),
    add(name,href) {
      console.log(name,href);
      this.$store.commit('addStarList',{
        title: name,
        href: href
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .star-list {
    display: flex;
    /*flex-direction: row;
    flex-wrap: wrap;*/
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    text-align: center;
    width: 30%;
    margin-bottom: 20px; 
  }

  .item a {
    text-align: center;
    text-decoration: none;
    color: #367;
    font-size: 18px;
  } 
</style>
