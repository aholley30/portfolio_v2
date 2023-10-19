<template>
    <div class="container">
        <div class="box">
            <ul>
                <li id="stop"><router-link
                    :to="{ name: 'Activity' }">
                        Stuff
                    </router-link>
                </li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Community Chat</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
// import router from '@/router'

// const items = router.options.routes
//   .map(route => ({
//     title: route.name,
//     to: {name: route.name},
//   }));

export default {
    name: 'HelloWorld',
    // data: () => ({
    //     items,
    // }),
    props: {
        msg: String
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* canvas {
    height: 100vh;
    width: 100vw;
    position: absolute;
    opacity: 20;
    z-index: -1;
} */
/* :deep(header, .v-toolbar__content) {
    display: none !important;
} */
div.container {
    height: 100vh;
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    position: fixed;
    z-index: -1;
}

.box {
    width: 25%;
    height: 35%;
    margin: auto;
    background-color: black;
    z-index: 1;
    border: 5px solid;
    border-radius: 20px 20px 0px 0px;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    font-family: 'Courier New', Courier, monospace;
    font-size: x-large;
    display: block;
    margin: auto;
    padding: 30px;
}

a {
    color: whitesmoke;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
