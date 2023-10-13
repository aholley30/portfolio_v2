<template>
    <div class="main">
        <div class="container">
            <ul>
                <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
                <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
                <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.main, div.container {
    height: 100vh;
    width: 100vw;
}
div.container {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
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
