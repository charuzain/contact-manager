<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img
                  src="https://png.pngitem.com/pimgs/s/130-1300380_female-user-image-icon-hd-png-download.png"
                  alt="user image"
                  class="user-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name: </li>
                  <li class="list-group-item">Email Address: </li>
                  <li class="list-group-item">Contact No: </li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/contacts/edit/:Id" class="btn btn-primary my-1">
                <i class="bi bi-pen-fill"></i>
                </router-link>
                <router-link to="/contacts/view/:Id" class="btn btn-warning my-1">
                  <i class="bi bi-eye-fill"></i>
                </router-link>
                <i class="bi bi-trash-fill btn btn-danger my-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactManager',
};
</script>
<style>
.user-img {
  width: 150px;
  border-radius: 50%;
}
</style>
