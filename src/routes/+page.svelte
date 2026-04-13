<script>
	import { onMount } from "svelte";

const circle_count = 8;

onMount(() => init());

function init() {
    let circles = document.getElementsByClassName("small-circle")

    for (let i = 0; i < circle_count; i++) {
        circles[i].style.offsetDistance = "calc(100% * " + (i / circle_count) + ")";
    }
}

</script>

<main>
    <div id="main-circle">
        {#each {length: 8}}
        <div class="small-circle">

        </div>  
        {/each}
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
    display: inline-grid;

    width: 50vh;
    height: 50vh;
    margin: auto;
    
    border: 16px inset var(--main-color);
    border-radius: 50%;

    transition: all 0.5s;
}

.small-circle {
    width: 100px;
    height: 100px;
    border: 16px solid;
    border-color: inherit;
    background-color: var(--bg-color);
    border-radius: 50%;

    grid-area: 1/1;
    offset: circle(36vh) 0deg;

    transition: inherit;
}

.small-circle:hover {
    border-width: 5px;
}

.small-circle:nth-child(4), .small-circle:nth-child(8) {
    border-style: inset;
}

.small-circle:nth-child(5), .small-circle:nth-child(6), .small-circle:nth-child(7) {
    border-color: var(--inner-color);
}

</style>