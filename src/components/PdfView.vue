<template>
<div class="container">
<a href="https://drive.google.com/file/d/1LwYKIJ3_fs1t08xuut_Mizt1V5MHlBS3/preview?usp=drive_link" download="download">Download PDF</a>
<iframe :src="source1" width="75%" height="100%"></iframe>
</div>
</template>

<script>

export default {
  data() {
    return {
      source1: 'https://drive.google.com/file/d/1LwYKIJ3_fs1t08xuut_Mizt1V5MHlBS3/preview?usp=drive_link',
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: -1;
    height: 75%;
}
iframe {
    position: absolute;
    inset: 0px;
    margin: 155px auto;
}
a {
    display: block;
    margin-bottom: 10px;
    margin-top: 100px;
    color: white;
}
</style>