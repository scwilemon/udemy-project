import { Component, OnInit } from '@angular/core'


@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})






export class ServersComponent implements OnInit{
    serverName = 'Test Server';
    allowNewServer = false;
    serverCreationStatus = 'No server created.';
    serverCreated = false; 
    servers = ['Test', 'Test Server 2'];
    showSecret = false;
    log = [];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        },4500)
    }

    onCreateServer(){
        this.serverCreationStatus = `Server ${this.serverName} was created.`
        // console.log(this.serverCreationStatus);
        this.serverCreated = true;
        this.servers.push(this.serverName);

    }

    onToggleDetails(){
        this.showSecret = !this.showSecret;
        this.log.push(new Date())
    }

    // onUpdateServerName(event: any) {
    //    this.serverName = event.target.value
    // }

    ngOnInit() {}



}