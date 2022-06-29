import validator from 'validator';

export default class UserValidator {

    isId(target: string): boolean {

        const { length } = target;
        return length >= 5 && length < 30;

    }
    
    isEmail(target: string): boolean {
        return validator.isEmail(target)
    }

    isPassword(target: string): boolean {

        const { length } = target;
        return length >= 5 && length < 30;

    }

    isPasswordConfirm(target: string, target2: string) {
        
        const { length } = target;
        return ( length >= 5 && length < 30 )
            ? target === target2
            : false;

    }



}