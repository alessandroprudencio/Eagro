<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import "./assets/css/bootstrap.min.css";

import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoList
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(100deg, #1fc8db 51%, #2cb5e8 75%);
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 10vh;
}
</style>
