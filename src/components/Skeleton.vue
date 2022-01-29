<template>
  <div class="col-12 col-md-4 col-lg-3 mb-3">
    <div class="card p-2">
      <div class="d-flex align-items-center justify-content-center">
        <div class="img-circle rounded-circle">
          <span></span>
        </div>
        <div class="card-body ml-2">
          <h5 class="card-title"></h5>
          <p class="p"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skeleton",
};
</script>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
  border: none;
  box-shadow: 8px 8px 12px #f4f4f4;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.card .p {
  width: 40%;
  height: 10px;
  background-color: #f4f4f4;
}
.card h5.card-title {
  width: 80%;
  height: 10px;
  background-color: #f4f4f4;
}
.img-circle {
  width: 70px;
  height: 70px;
  background-color: #f4f4f4;
}
@media (max-width: 500px) {
  .card:hover {
    cursor: pointer;
    transform: scale(1);
  }
}
</style>
