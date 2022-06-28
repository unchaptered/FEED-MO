<script lang='ts'>

    import { routes } from '../store/constants/link';

</script>

<!-- Components of Navigation Bar(top of screen) -->
<nav class='nav'>
    
    <section>
        <a href={routes.forntend.home}>FEED MO</a>
    </section>

    <section>
        <a href={routes.forntend.join}>JOIN</a>
        <a href={routes.forntend.join}>LOGIN</a>
    </section>

</nav>

<!-- CSS in HTML -->
<style lang='scss'>
    .nav {

        // size
        height: fit-content;
        width: calc(100vw - 20px);
        padding: 10px 10px 5px 10px;

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