<!-- JS in HTML-->
<script lang='ts'>

    import UserValidator from '../store/modules/validator/user.validator';
    import MessageProvider from '../store/modules/providers/message.provider';

    const validator = new UserValidator();
    const messenger = new MessageProvider();

    let userEmail: string = '';
    let isValidEmail: boolean = false;
    const validateEmail = () => isValidEmail = validator.isEmail(userEmail);

    let password: string = '';
    let isValidPassword: boolean = false;
    const validatePassowrd = () => isValidPassword = validator.isPassword(password);

    const handleSubmit = (event: Event) => {

    event.preventDefault();
            !isValidEmail ? window.alert(messenger.getMessage(1001))
            : !isValidPassword ? window.alert(messenger.getMessage(1002))
            : 'Correct!';

    }

</script>

<section class='routes_join'>
    
    <form>
        
        <h3> Login Us </h3>

        <label for='email'> Verify Email </label>
        <input id='email' placeholder='Type your personal email'bind:value={userEmail} on:keyup={validateEmail} />

        <label for='password'> Password </label>
        <input id='password' placeholder='Type your password' bind:value={password} on:keyup={validatePassowrd} />

        <input type='submit' on:click={(event) => handleSubmit(event)}/>

        <span>{
                !isValidEmail ? messenger.getMessage(1001)
                : !isValidPassword ? messenger.getMessage(1002)
                : 'Correct!'
        }</span>

    </form>

</section>

<!-- CSS in HTML -->
<style lang='scss'>
    .routes_join {

        width: 100%;
        height: calc(100vh - 160px - 10%);

        padding-top: 10%;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        @media screen and (min-width: 1080px) {

            & { 
                margin: 0 auto;
                width: 1080px;
            }

        }

        & form {

            width: 480px;
            height: fit-content;

            gap: 8px;
            display: grid;
            grid-template: repeat(1, 1fr)/repeat(6, 1fr);

            padding: 30px 20px;
            border: 1px solid black;
            border-radius: 5px;
            border-style: dotted;

        & h3,span {

            text-align: center;
            grid-column: span 6;

        }
        & label {

            grid-column: span 2;

        }
        & input {
            grid-column: span 4;

            &[type='submit'] {

                grid-column: span 6;

            }
        }

        }

    }
</style>