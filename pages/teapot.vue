<template>
</template>

<script>
export default {
  fetch({ error }){
    error({ statusCode: 418, message: "I'm a teapot" });
  }
}
</script>

<style>

</style>