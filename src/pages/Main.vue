<template>
<div>
    <input v-model="newPostText" placeholder="Введите текст поста">
        <button @click="addPost">Добавить пост</button>
        <div v-for="(post, index) in posts" :key="index">
            <p>{{ post.text }}</p>
            <button @click="editPost(index)">Редактировать</button>
        </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            newPostText: '',
            posts: []
        };
    },
    methods: {
        addPost() {
            if (this.newPostText.trim() !== '') {
                this.posts.push({ text: this.newPostText });
                this.newPostText = ''; // Сбрасываем значение после добавления
            }
        },
        editPost(index) {
            const newText = prompt('Введите новый текст для поста:');
            if (newText !== null) {
                this.posts[index].text = newText;
            }
        }
    }}

</script>

<style scoped>

</style>