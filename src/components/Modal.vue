<template>
  <div class="back-drop">
    <div class="card p-5">
      <h4 class="lead">
        Please fill in the
        <span class="text-danger">Input</span> with a user's name from Github
      </h4>
      <span class="close" @click="$emit('close', false)">X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
.card {
  width: 18rem;
  position: relative;
}
.back-drop {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
}
.close {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  color: #c20d0d;
  height: 30px;
  top: 0;
  transform: translateX(12px) translateY(-18px);
  right: 0;
  position: absolute;
  border-radius: 50%;
}
.close:hover {
  background-color: rgb(236, 231, 231);
  cursor: pointer;
}
</style>
