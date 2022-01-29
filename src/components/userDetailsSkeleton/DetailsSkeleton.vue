<template>
  <div class="container">
    <div class="row align-items-center my-5" style="margin-top: 120px">
      <div class="col-md-6">
        <div class="card p-2">
          <div class="d-md-flex align-item-center justify-content-between">
            <div class="img-circle rounded-circle"></div>
            <div class="transform">
              <p class="h5 mt-4 text-dark"></p>
              <p class="text-muted"></p>
            </div>

            <div>
              <p class="h5 mt-4 text-dark"></p>
              <p class="h6 text-muted"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-2 mt-2 mt-md-0">
          <h5 class="card-title text-dark"></h5>
          <p class="text-muted"></p>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md mb-2 mb-md-0">
          <div class="card p-2">
            <h4 class="card-title text-dark" style="font-size: 16px"></h4>
            <p class="text-muted"></p>
          </div>
        </div>
        <div class="col-md mb-2 mb-md-0">
          <div class="card p-2">
            <h4 class="card-title text-dark" style="font-size: 16px"></h4>
            <p class="text-muted"></p>
          </div>
        </div>
        <div class="col-md mb-2 mb-md-0">
          <div class="card p-2 d-flex">
            <h4 class="card-title text-dark" style="font-size: 16px"></h4>
            <p class="text-muted"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none !important;
  box-shadow: 8px 10px 15px #f4f4f4;
}
.img-circle {
  width: 70px;
  height: 70px;
  background-color: #f4f4f4;
}
.transform {
  width: 70%;
  height: 70px;
  background-color: #f4f4f4;
}
.text-dark,
.text-muted {
  width: 60%;
  height: 10px;
  background-color: #f4f4f4;
}
</style>
