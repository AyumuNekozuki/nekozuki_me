<template>
  <canvas id="universe"></canvas>
</template>

<style lang="scss">
#universe {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(1600px at 70% 120%, #212750 10%, #020409 100%);
  display: block;
  position: fixed;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -5;
}
</style>