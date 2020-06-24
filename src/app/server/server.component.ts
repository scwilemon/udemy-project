import { Component } from '@angular/core'


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
    

})






export class ServerComponent {

    serverID = 10;
    serverStatus = 'running';


    getServerStatus(){
        return this.serverStatus
    }

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor() {
        if (this.serverStatus === 'online') {
            return 'green'
        }
        else {
            return 'red'
        }
    }
}