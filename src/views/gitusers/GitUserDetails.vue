<template>
  <div class="container">
    <div v-if="isloading" class="text-center my-5"><DetailsSkeletonVue /></div>
    <div v-else class="row align-items-center my-5" style="margin-top: 120px">
      <div class="col-md-6">
        <div class="card p-2">
          <div class="d-md-flex align-item-center justify-content-between">
            <img
              :src="userInfo.avatar_url"
              alt="not found"
              class="img-fluid rounded-circle"
              style="width: 100px"
            />
            <div class="transform">
              <p class="h5 mt-4 text-dark">{{ userInfo.name }}</p>
              <p class="text-muted">{{ userInfo.location }}</p>
            </div>

            <div>
              <p class="h5 mt-4 text-dark">Public repos</p>
              <p class="h6 text-muted">{{ userInfo.public_repos }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-2 mt-2 mt-md-0">
          <h5 class="card-title text-dark">Bio</h5>
          <h5 v-if="userInfo.bio" style="color: #333; font-size: 15px">
            <p class="text-muted">{{ userInfo.bio }}</p>
          </h5>
          <p v-else class="text-muted">No Bio Found</p>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md mb-2 mb-md-0">
          <div class="card p-2">
            <h4 class="card-title text-dark" style="font-size: 16px">
              Followers
            </h4>
            <p class="text-muted">{{ userInfo.followers }}</p>
          </div>
        </div>
        <div class="col-md mb-2 mb-md-0">
          <div class="card p-2">
            <h4 class="card-title text-dark" style="font-size: 16px">
              Following
            </h4>
            <p class="text-muted">{{ userInfo.following }}</p>
          </div>
        </div>
        <div class="col-md mb-2 mb-md-0">
          <div class="card p-2 d-flex">
            <h4 class="card-title text-dark" style="font-size: 16px">
              Public Gist
            </h4>
            <p class="text-muted">{{ userInfo.public_gists }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsSkeletonVue from "../../components/userDetailsSkeleton/DetailsSkeleton.vue";

export default {
  props: {
    id: String,
    name: String,
  },
  components: { DetailsSkeletonVue },
  data() {
    return {
      userInfo: {},
      isloading: false,
    };
  },
  methods: {
    async getSingleGitHubUsers() {
      const ClientID = "8d93a59cd57455e0dfd9";
      const ClientSecret = "fe26b64d479e1f9807ce426194ae65274e2e785c";

      try {
        this.isloading = true;
        const response = await fetch(
          `https://api.github.com/users/${this.name}?client_id=${ClientID}&client_secret=${ClientSecret}`
        );
        const data = await response.json();
        this.isloading = false;
        this.userInfo = data;
      } catch (e) {
        console.log("failed to fetch", e);
      }
    },
  },
  mounted() {
    this.getSingleGitHubUsers();
  },
};
</script>

<style scoped>
.card {
  border: none !important;
  box-shadow: 8px 10px 15px #f4f4f4;
}
</style>
