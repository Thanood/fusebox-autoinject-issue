import {autoinject} from 'aurelia-framework';
import {TestService} from './services/test-service';

@autoinject(TestService)
export class App {
    msg: string;

    constructor(private testService: TestService) { }
    attached() {
        this.msg = this.testService.verifyExistence();
    }
}
