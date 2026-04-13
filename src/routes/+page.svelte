<script>

</script>

<main>
    <div id="main-circle">
        <div class="small-circle">

        </div>
        <div class="small-circle">

        </div>
        <div class="small-circle">

        </div>
        <div class="small-circle">

        </div>
        <div class="small-circle">

        </div>
    </div>
</main>

<style>
main {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-color);
}

#main-circle {
    display: grid;

    width: 50vh;
    height: 50vh;
    margin: auto;
    
    border: 16px inset var(--main-color);
    border-radius: 50%;

    box-shadow: 0px 0px 20px 0px var(--main-color);

    transition: all 0.5s;
}

#main-circle:hover {
    border: 25px inset var(--main-hover-color);
    box-shadow: 0px 0px 30px 0px var(--main-hover-color);
}

.small-circle {
    width: 100px;
    height: 100px;
    border: 16px solid;
    border-color: inherit;
    background-color: var(--bg-color);
    border-radius: 50%;

    transition: inherit;
}

.small-circle:hover {
    border-width: 5px;
}

</style>