<template>
<div>
    <h3 class="aboutPage">This is a test website where there is an opportunity to interact with posts. It is built on Vue 3. 
        Additionally, there is a separate identical page with posts written using Vuex. As the page is scrolled to the end, new posts are automatically loaded.
        When the page fetches new data, a loading bar appears to indicate that the data is gradually appearing.If there is an issue while loading data, we will see an error message.
        Axios is also utilized for requesting posts. Also, the posts are not being deleted after page reload. However, there is an exception. Posts with the same title are being deleted after page reload.If there are identical posts on the page, then posts with unique titles are loaded. If there are none, the loading doesn't trigger.</h3>
<p class="aboutInteractive">
    Interactive elements on the website:
</p>
<p class="aboutInteractive">
  <span class="aboutNumSpan">1.</span>  Search: At the top of the page, there is a search field where users can input a keyword, and the application will display all posts whose titles contain that keyword.
</p>
<post-input class="inpAbout" placeholder="Search..."/>
<p class="aboutInteractive">
  <span class="aboutNumSpan">2.</span>  Creating Posts: There is a "Create a post" button that opens a dialog window where users can write their post and submit it. After submission, the post will become visible on the page.
</p>
<post-button class="aboutBtn">Create a post</post-button>
<p class="aboutInteractive">
  <span class="aboutNumSpan">3.</span>  Sorting: Users can choose how to sort the posts. They can select sorting by post title or by content.
</p>
<post-select class="aboutBtn"/>
<p class="aboutInteractive">
  <span class="aboutNumSpan">4.</span>  Editing and Deletion: Each post on the page has editing and deletion buttons. Users can modify the content of a post or completely remove it.</p>
  <post-button class="aboutBtn">Edit</post-button>
  <post-button class="aboutBtn">Delete</post-button>
</div>

</template>

<script>
import PostButton from '@/components/PostButton.vue';
import PostInput from '@/components/PostInput.vue';
import PostSelect from '@/components/PostSelect.vue';

export default{
components:{
    PostButton, PostInput, PostSelect
}
}
</script>

<style scoped>
.aboutPage{
    font-style: italic;
    margin-left: 15px;
    margin-right: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.aboutInteractive{
margin-top: 30px;
margin-left: 30px;
margin-right: 30px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: large;

}
.inpAbout{
 margin-left: 25px;
    width: 30%;
}
.aboutNumSpan{
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.aboutBtn{
    margin-left: 25px;
    margin-top: 10px;
}

</style>