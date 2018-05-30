<template>
  <section>点击</section>
</template>

<script>
  export default {
    props: ['toNum'],
    data () {
      return {}
    },
    updated () {
      console.log(this.toNum)
    }
  }
</script>
