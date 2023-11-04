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

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}

</script>

<style scoped>
div.container {
    height: 100vh;
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
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
