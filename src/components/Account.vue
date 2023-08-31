<template>
  <div class="container mt-5">
    <form>
      <div class="row mb-3">
        <div class="col-3">
          <div class="mb-3">
            <img v-if="photo" :src="photo" class="img-thumbnail mr">
          </div>
        </div>
        <div class="col-9">
          <div class="mb-3">
            <input type="file" class="form-control d-none mr" id="photo" @change="onFileChange">
            <label for="photo" class="btn btn-primary mr btn-acc-file">Choose File</label>
            <br/>
            <button v-if="photo" type ="button" class ="btn btn-danger mt-2 btn-acc mr" @click="deletePhoto">Delete Photo</button>                
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <post-input type="number" class="form-control w15 " placeholder="Age" id="age" v-model="age" @change="saveChanges"/>
          </div>
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <post-input type="text" class="form-control  w15 " id="firstName" placeholder="Name" v-model="firstName" @change="saveChanges"/>
          </div>
          <div class ="mb-3">
            <label for ="lastName" class ="form-label">Last Name</label>
            <post-input type ="text" class ="form-control  w15 " id ="lastName" placeholder="Surname" v-model ="lastName" @change ="saveChanges"/>
          </div>
        </div>
      </div>

      <div class ="mb-3">
        <label for ="preferences" class ="form-label ml1">Preferences</label>
        <textarea class ="form-control ml1 " placeholder="Hobbies" id ="preferences" rows ="3" v-model ="preferences" @change ="saveChanges"></textarea>
      </div>

    </form>       
  </div>
</template>

<script>
import PostInput from './PostInput.vue';
export default {
  components:{
PostInput,
  },
  name: 'Account',
  data() {
    return {
      firstName: '',
      lastName: '',
      age: '',
      preferences: '',
      photo: null,
    };
  },
  mounted() {
    this.firstName = localStorage.getItem('firstName') || '';
    this.lastName = localStorage.getItem('lastName') || '';
    this.age = localStorage.getItem('age') || '';
    this.preferences = localStorage.getItem('preferences') || '';
    this.photo = localStorage.getItem('photo') || null;
  },
  methods: {
    onFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.photo = event.target.result;
        localStorage.setItem('photo', this.photo);
      };
      reader.readAsDataURL(file);
    } else {
      this.photo = null;
      localStorage.removeItem('photo');
    }
  },
    deletePhoto() {
      this.photo = null;
      localStorage.removeItem('photo');
    },
    saveChanges() {
      localStorage.setItem('firstName', this.firstName);
      localStorage.setItem('lastName', this.lastName);
      localStorage.setItem('age', this.age);
      localStorage.setItem('preferences', this.preferences);

      if (this.photo) {
        localStorage.setItem('photo', this.photo);
      } else {
        localStorage.removeItem('photo');
      }
    },
  },
};
</script>

<style>
.form-control:focus {
  border-color: teal;
  box-shadow: 0 0 0 0.2rem rgba(0, 128, 128, 0.25);
}
.img-thumbnail {
  max-width: 250px;
  object-fit: cover;

}

.btn-acc-file{
 background-color: teal;
 color: aliceblue;
 border: none;
 padding: 8px 13px;
  border-radius: 4px;
 cursor: pointer;
 font-size: 16px;
 width: 133px;

}

.btn-acc-file:hover{
 background-color:rgb(0, 92, 128)
}
.btn-acc-file:active{
 background-color:rgba(7,150,102,0.636);
}

.btn-acc{
  background-color: teal;
 color: aliceblue;
 border: none;
 padding: 8px 13px;
 border-radius: 4px;
 cursor: pointer;
 font-size: 16px;
 width: 133px;

}

.btn-acc:hover{
 background-color:#c82333;
}
.btn-acc:active{
 background-color:#dc3545;
}
label[for= "photo"]{
 cursor:pointer;
 padding:0.375rem0.75rem;
 border-radius:0.25rem;
}
.mr{
 margin-right:15px;
}
.w15{
  width: 30% !important;
}
.img-thumbnail {
  max-width: 350px;
  max-height: 400px;
  margin-left: -85px;
  margin-top: -40px;
}
.col-3 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.ml1{
margin-left: -80px;

}
</style>