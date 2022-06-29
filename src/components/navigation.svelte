<script lang='ts'>

    import { routes } from '@store/link';

</script>

<!-- Components of Navigation Bar(top of screen) -->
<nav class='nav'>
    
    <section>
        <a href={routes.forntend.home}>FEED MO</a>
    </section>

    <section>
        <a href={routes.forntend.join}>JOIN</a>
        <a href={routes.forntend.login}>LOGIN</a>
    </section>

</nav>

<!-- CSS in HTML -->
<style lang='scss'>
    .nav {

        // size
        height: fit-content;
        width: calc(100vw - 20px);
        padding: 10px 10px 5px 10px;

        @media screen and (min-width: 1080px) {

            & { 
                margin: 0 auto;
                width: 1080px;
            }
            
        }

        // display
        display: flex;
        justify-content: space-between;

        // areas
        & section {
            &:nth-child(1) {
                & a {
                    font-size: large;
                    font-weight: 600;
                }
            }

            &:nth-child(2) {
                & a {
                    font-size: medium;
                    font-weight: 400;
                }
            }
        }

        // components
        & a {
            color: initial;
            text-decoration: none;
            &:active, &:checked {
                color: initial;
                text-decoration: none;
            }
        }
    }
</style>