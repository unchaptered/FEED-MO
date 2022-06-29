export type errorCode = 1000 | 1001 | 1002 | 1003;
import { userCases } from './messages/1000.user';

export default class MessageProvider {

    constructor() {}

    getMessage(code: errorCode) {
        
        return userCases[code];
        
    }

}