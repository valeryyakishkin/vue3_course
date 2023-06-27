<template>
  <div>
    <div class="post">
      <div><strong>Название:</strong> Пост о JavaScript</div>
      <div>
        <strong>Описание:</strong> JavaScript универсальный язык
        программирования
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [{ id: 1, title: "JavaScript", body: "Описание поста" }],
      posts: [{ id: 2, title: "JavaScript 2", body: "Описание поста 2" }],
      posts: [{ id: 3, title: "JavaScript 3", body: "Описание поста 3" }],
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
