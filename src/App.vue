<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

#app {
  font-family: "Roboto", sans-serif;

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-transform: capitalize;
}
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(199, 196, 196);
  border-radius: 1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(185, 183, 183);
}
</style>
