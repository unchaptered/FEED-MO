<script lang="js">
    
    import Nav from '../components/navigation.svelte';
    import Footer from '../components/footer.svelte';

</script>

<Nav />

<main>
    <slot />
</main>

<Footer />

<style global>
    * {
        margin: 0;
        padding: 0;
    }
</style>