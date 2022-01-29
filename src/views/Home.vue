<template>
  <div class="home container-fluid">
    <div class="mt-5 input-container row">
      <div class="col-md-7 position-relative">
        <Input v-model="searchedUser" @keypress.enter="getGithubUsers" />
        <img
          src="../assets/loupe.png"
          alt="not found"
          @click="getGithubUsers"
        />
      </div>
    </div>

    <div class="row my-4">
      <div v-if="isLoading" class="row">
        <SkeletonVue v-for="i in 30" :key="i" class="fadein" />
      </div>
      <GitUser
        v-else
        v-for="user in users"
        :key="user.id"
        :user="user"
        class="fadein"
      />
    </div>
    <ModalVue @close="closeModal" v-if="isEmpty === true" />
  </div>
</template>
<script>
import GitUser from "./gitusers/GitUser.vue";
import Input from "../components/Input.vue";
import SkeletonVue from "../components/Skeleton.vue";
import ModalVue from "../components/Modal.vue";

export default {
  components: { GitUser, Input, SkeletonVue, ModalVue },
  data() {
    return {
      users: [],
      searchedUser: "",
      isLoading: false,
      isEmpty: false,
    };
  },
  methods: {
    async getGithubUsers() {
      try {
        if (this.searchedUser.length === 0) {
          this.isEmpty = true;
          return;
        }
        this.isLoading = true;
        const response = await fetch(
          `https://api.github.com/search/users?q=${this.searchedUser}`
        );
        const data = await response.json();

        this.searchedUser = "";

        this.isLoading = false;
        this.users = data.items;
      } catch (e) {
        this.searchedUser = "";
        console.log("failed to fetch", e);
      }
    },
    closeModal(value) {
      this.isEmpty = value;
    },
  },
};
</script>

<style scoped>
.fadein {
  animation: fade-in 1s ease;
}

.input-container img {
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(12px) translateX(-50px);
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.input-container input {
  border: none;
  appearance: none;
  box-shadow: 8px 10px 15px #f4f4f4;
  padding: 15px;
  color: #212529;
}

.input-container img:hover {
  cursor: pointer;
}
.input-container input::placeholder {
  color: #212529;
}
.input-container img {
  color: #f4f4f4;
  width: 30px;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

// ?client_id=${ClientID}&client_secret=${ClientSecret}
