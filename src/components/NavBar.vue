<template>
<nav class="navbar navbar-expand-sm navbar-dark" style="background-color:#007500">
  <div class="container-fluid navbar-nav">
  <div>
  <router-link to="/" class="navbar-brand ms-3">
  <i class="bi bi-person-lines-fill me-2"></i>Contact Manager</router-link>
   <router-link to="/contacts/add" class="navbar-brand ms-3">
  <i class="bi bi-plus-circle-fill me-2"></i>Add Contact</router-link>
   <router-link to="/contacts/edit/:id" class="navbar-brand ms-3">
  <i class="bi bi-pen-fill me-2"></i>Edit Contact</router-link>
  </div>
      <form class="d-flex ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success" type="submit">Search</button>
      </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
</style>
