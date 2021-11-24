<template>
  <div class="home container">
    <div class="mt-5 input-container row">
      <div class="col-md-7 position-relative">
        <Input v-model="searchedUser" />
        <span class="search-btn" @click="getGitHubUsers">
          <i class="fas fa-search bg-secondary"></i>
        </span>
      </div>
    </div>

    <div class="row my-4">
      <div v-if="isLoading" class="my-4 text-center">Loading....</div>
      <GitUser
        v-else
        v-for="user in users"
        :key="user.id"
        :user="user"
        class="fadein"
      />
    </div>
  </div>
</template>

<script>
import GitUser from "./gitusers/GitUser.vue";
import Input from "../components/Input.vue";

export default {
  components: { GitUser, Input },
  data() {
    return {
      users: [],
      searchedUser: "",
      isLoading: false,
    };
  },
  methods: {
    async getGitHubUsers() {
      try {
        if (this.searchedUser.length === 0) {
          alert("please enter a value in the input field");
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
        console.log("failed to fetch", e);
      }
    },
  },
};
</script>

<style scoped>
.fadein {
  animation: fade-in 1s ease;
}

.input-container .search-btn {
  padding: 1.6rem 1.75rem;
  background-color: #212529;
   box-shadow: 8px 10px 15px #f4f4f4;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(2px) translateX(-15px);
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.input-container input {
  border: none;
  box-shadow: 8px 10px 15px #f4f4f4;
  padding: 15px;
  color: #212529;
}

.input-container .search-btn:hover {
  cursor: pointer;
}
.input-container input::placeholder {
  color: #212529;
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
