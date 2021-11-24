<template>
  <div class="col-12 col-md-4 col-lg-3 mb-3">
    <router-link
      style="text-decoration-none"
      :to="{
        name: 'GitUserDetails',
        params: { id: user.id, name: user.login },
      }"
    >
      <div class="card p-2">
        <div class="d-flex align-items-center justify-content-center">
          <div>
            <img :src="user.avatar_url" alt="" class="img-fluid" />
          </div>
          <div class="card-body ml-2">
            <h5 class="card-title">
              {{ user.login }}
            </h5>
            <p class="p">{{ user.html_url }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GitUser",
  props: {
    user: Object,
  },
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
.card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.col-12 a {
  text-decoration: none !important;
  color: #333;
}
.card .p {
  font-size: 12px;
}
.card h5.card-title {
  font-size: 15px !important;
}

@media (max-width: 500px) {
  .card:hover {
    cursor: pointer;
    transform: scale(1);
  }
}
</style>
