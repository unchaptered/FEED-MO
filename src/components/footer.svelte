<script lang='ts'>

    import { callPage } from '../store/functions/button.linker';
    import { repositories } from '../store/constants/link';

</script>

<!-- Components of Footer Bar(bottom of screen) -->
<footer class='footer'>

    <section>
        <p> FeedMo was developed on May 28, 2022. </p>
    </section>

    <section>

        <p> If you wanna see more, check it out! </p>
        <p> frontend : <button
            on:click={ () => callPage(repositories.frontend) }>{ repositories.frontend }</button> </p>
        <p> backend : <button
            on:click={ () => callPage(repositories.backend) }>{ repositories.backend }</button></p>

    </section>

</footer>

<!-- CSS in HTML -->
<style lang='scss'>

    .footer {
        gap: 0;
        margin: 0;
        padding: 0;

        // size
        width: 100vw;
        height: fit-content;

        // position
        bottom: 10px;
        position: absolute;

        // display
        display: flex;
        flex-direction: column;

        // area
        & section {
            margin: 0;
            padding: 0;

            display: flex;
            
            &:nth-child(1) {
                justify-content: center;
                & p {
                    font-size: large;
                }
            }

            &:nth-child(2) {
                align-items: center;
                flex-direction: column;
                & p {
                    font-size: medium;
                }
                & button {
                    font-size: small;
                }
            }
        }

        // components
        & button {
            border: none;
            font-style: oblique;
            background-color: initial;
            &:hover {
                transform: scale(1.02);
            }
        }

    }

</style>