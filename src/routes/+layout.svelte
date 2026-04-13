<script>
import favicon from '$lib/assets/favicon.svg';

let {
    children
} = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    </svelte:head>

    {@render children()}

<style>
:global(body),
:global(html) {
    margin: 0%;
    padding: 0%;
    height: 100vh;
    width: 100vw;

	--bg-color: black;
	--inner-color: #FFEF99AA;
	--inner-hover-color: #FFC4FFAA;
	--main-color: #FFEF99;
	--main-hover-color: #FFC4FF;
}
</style>
