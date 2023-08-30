<template>
  <div class="container mt-5">
    <h1 class="mb-4">Account</h1>
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
            <input type="number" class="form-control w-10" id="age" v-model="age" @change="saveChanges">
          </div>
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control  w15" id="firstName" v-model="firstName" @change="saveChanges">
          </div>
          <div class ="mb-3">
            <label for ="lastName" class ="form-label">Last Name</label>
            <input type ="text" class ="form-control  w15" id ="lastName" v-model ="lastName" @change ="saveChanges">
          </div>
        </div>
      </div>

      <div class ="mb-3">
        <label for ="preferences" class ="form-label">Preferences</label>
        <textarea class ="form-control" id ="preferences" rows ="3" v-model ="preferences" @change ="saveChanges"></textarea>
      </div>

    </form>       
  </div>
</template>

<script>
export default {
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
}

.btn-acc-file{
 background-color: teal;
 color: aliceblue;
 border: none;
 padding: 12px 20px;
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
 padding: 12px 20px;
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
.w-10{
 width:12%;
}
.w15{
  width: 30%;
}
</style>