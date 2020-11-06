<template>
  <page-container class="background">
    <form @submit.prevent="submitInput" v-if="showForm">
      <label>{{ currentStep }}</label>
      <input type="text" v-model.trim="currentInput" />
      <input id="fileUpload" type="file" class="fileInput" />
      <button type="submit">Add</button
      ><button @click="nextStep" class="buttonColor">Next Step</button>
      <button @click="saveRecipe">Save Recipe</button>
    </form>
    <button @click="click">Click Me</button>

    <h1>{{ title }} <button @click="toggleEditTitle">Edit</button></h1>
    <p>{{ description }} <button @click="toggleEditDesc">Edit</button></p>
    <h2>Ingredients <button @click="toggleEditIngredients">Edit</button></h2>
    <div>
      <ul>
        <li v-for="i in ingredients" :key="ingredients.findIndex(element => (element = i))">
          <button v-if="editIngredients" @click="deleteIngredient(i)" class="del">X</button>
          {{ i }}
        </li>
      </ul>
    </div>
    <h2>Method<button @click="toggleEditMethod">Edit</button></h2>
    <div>
      <ul>
        <li
          class="method"
          v-for="step in method"
          :key="ingredients.findIndex(element => (element = step))"
        >
          <button v-if="editMethod" @click="deleteStep(step)" class="del">X</button>
          {{ step }}
        </li>
      </ul>
    </div>
  </page-container>
</template>

<script>
export default {
  inject: ['apiURL'],
  data() {
    return {
      currentInput: '',
      currentStep: 'Title/Name',
      title: 'Edit Title',
      description: '',
      ingredients: [],
      method: [],
      showForm: true,
      editIngredients: false,
      editMethod: false,
      editDesc: false,
    };
  },
  methods: {
    submitInput() {
      if (this.currentStep == 'Title/Name' && this.currentInput != '') {
        this.title = this.currentInput;
        this.currentInput = '';
        this.nextStep();
      } else if (this.currentStep == 'Ingredients' && this.currentInput != '') {
        this.ingredients.push(this.currentInput);
        this.currentInput = '';
      } else if (this.currentStep == 'Method' && this.currentInput != '') {
        this.method.push(this.currentInput);
        this.currentInput = '';
      } else if (this.currentStep == 'Desc' && this.currentInput != '') {
        this.description = this.currentInput;
        this.currentInput = '';
        this.nextStep();
      }
    },
    nextStep() {
      if (this.currentStep === 'Title/Name') {
        this.currentStep = 'Desc';
      } else if (this.currentStep == 'Desc') {
        this.currentStep = 'Ingredients';
      } else if (this.currentStep === 'Ingredients') {
        this.currentStep = 'Method';
      } else if (this.currentStep == 'Method') {
        this.showForm = false;
      }
    },
    toggleEditIngredients() {
      this.showForm = true;
      this.editIngredients = !this.editIngredients;
      if (this.editIngredients) {
        this.currentStep = 'Ingredients';
      }
    },
    toggleEditMethod() {
      this.showForm = true;
      this.editMethod = !this.editMethod;
      if (this.editMethod) {
        this.currentStep = 'Method';
      }
    },
    toggleEditDesc() {
      this.showForm = true;
      this.editDesc = !this.editDesc;
      if (this.editDesc) {
        this.currentStep = 'Desc';
      }
    },
    deleteStep(step) {
      const index = this.method.indexOf(step);
      if (index > -1) {
        this.method.splice(index, 1);
      }
    },
    deleteIngredient(ingredient) {
      const index = this.ingredients.indexOf(ingredient);
      if (index > -1) {
        this.ingredients.splice(index, 1);
      }
    },
    toggleEditTitle() {
      this.currentStep = 'Title/Name';
    },
    saveRecipe() {
      let file = document.getElementById('fileUpload');
      let files = file.files;
      let formData = new FormData();
      let image = files[0];

      let recipe = {
        name: this.title,
        desc: this.description,
        ingredients: this.ingredients,
        method: this.method,
      };

      let JsonRecipe = JSON.stringify(recipe);

      formData.append('file', image, image.name);
      formData.append('data', JsonRecipe);

      fetch(this.apiURL + 'saveData.php', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          this.currentStep = 'Title/Name';
          this.title = 'Edit Title';
          this.description = '';
          this.ingredients = [];
          this.method = [];
          this.showForm = true;
          this.editIngredients = false;
          this.editMethod = false;
          this.editDesc = false;
          console.log(data);
          this.$router.push('/Recipes');
        })
        .catch(error => {
          console.log(error);
        });
      this.currentInput = '';
    },
  },
};
</script>

<style scoped>
.background {
  background-color: rgb(223, 214, 200);
  box-shadow: 2px 4px 12px grey;
  display: block;
}

input {
  height: 30px;
  width: 300px;
  display: block;
  margin: 20px 0;
  padding: 5px 8px;
}
h1 {
  font-size: 42px;
  margin: 30px 0 15px 0;
}
h2 {
  font-size: 30px;
  padding-left: 5px;
  margin: 30px 0 15px 0;
}
ul {
  padding-left: 10px;
}
li {
  list-style: none;
  padding: 5px;
  font-size: 20px;
}
label {
  font-size: 24px;
  margin-bottom: 0;
}
.method {
  list-style: disc;
}
.del {
  border-radius: 25px;
  background-color: rgb(255, 110, 110);
  padding: 2px;
  width: 25px;
  height: 25px;
}
form {
  position: relative;
  float: right;
  padding: 50px;
}
.fileInput {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
