<template>
    <div class="container">
        <div class="row">
            <a
                href="https://drive.google.com/file/d/1LwYKIJ3_fs1t08xuut_Mizt1V5MHlBS3/preview?usp=drive_link"
                download="download"
            >Download PDF</a>
        </div>
        <div class="row">
            <iframe
                :src="source1"
                width="75%"
                height="100%"
            />
        </div>
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

<style scoped>
div.container {
    text-align: center;
    width: 100%;
    z-index: -1;
    height: 100%;
}
iframe {
    position: absolute;
    inset: 0px;
    margin: 155px auto;
    width: 75%;
    padding-bottom: 50px;
    z-index: -1;
}
a {
    display: block;
    margin-bottom: 10px;
    margin-top: 100px;
    color: white;
}
</style>