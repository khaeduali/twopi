<script>
/** @type {import('./$types').PageData} */
let {data} = $props()

import {
    onMount
} from "svelte";

const time_type = 0
const weather_type = 1
const news_type = 2
const settings_type = 3
const notes_type = 4
const media_type = 5

const circle_count = 6;

let expanded_circle_index = $state(-1);

let time = $state(new Date(0));

let temp = $state(0)

onMount(() => init());

function init() {
    let circles = document.getElementsByClassName("small-circle")

    for (let i = 0; i < circle_count; i++) {
        circles[i].style.offsetDistance = "calc(100% * " + (i / circle_count) + ")";
    }

    setInterval(() => update(), 100)
}

function update() {
    time = new Date(Date.now())
}

function clickSmallCircle(index) {
    expanded_circle_index = index
}
</script>

<main>
    <div id="main-circle">
        {#each {length: circle_count}, i}
        <button class="small-circle" class:expanded= {i === expanded_circle_index} on:click={() => clickSmallCircle(i)}>
        {#switch i}
        {:case time_type}   
            {#if expanded_circle_index === i}
            <p>{time.toLocaleDateString()}</p>
            {/if}
            <p>{time.toLocaleTimeString()}</p>

        {:case weather_type}
        {#await data}
            <p>...</p>
        {:then weather} 
            <p>{weather.response_weather.current.temperature_2m}° C</p>
        {/await}

        {:case news_type}
            <p>NEWS</p>
            
        {:case settings_type}
            <p>SETTINGS</p>
            
        {:case notes_type}
            <p>NOTES</p>
            
        {:case media_type}
            <p>MEDIA</p>
        {/switch}
        </button>
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

    transition: all var(--transition-length);
}

.small-circle {
    width: 11vh;
    height: 11vh;
    border: 16px solid;
    border-color: inherit;
    background-color: var(--bg-color);
    border-radius: 50%;

    grid-area: 1/1;
    offset: circle(36vh) 0deg;
    display: flex;

    z-index: 0;
    transition: offset var(--transition-length) ease-in-out var(--transition-length), width var(--transition-length) ease-in-out 0s, height var(--transition-length) ease-in-out 0s;
}

.small-circle:not(.expanded) {
    cursor: pointer;
}

.small-circle:not(.expanded):active {
    border-width: 5px;
}

.small-circle:nth-child(4),
.small-circle:nth-child(8) {
    border-style: inset;
}

.small-circle:nth-child(5),
.small-circle:nth-child(6),
.small-circle:nth-child(7) {
    border-color: var(--inner-color);
}

.expanded {
    offset: circle(0vh) 0deg;
    width: 50vh;
    height: 50vh;

    z-index: 9;
    transition: offset var(--transition-length) ease-in-out 0s, width var(--transition-length) ease-in-out var(--transition-length), height var(--transition-length) ease-in-out var(--transition-length);
}

p {
    color: var(--main-color);
    font-family: 'Courier New', Courier, monospace;
    margin: auto;
    font-weight: bolder;
    user-select: none;
}
</style>
