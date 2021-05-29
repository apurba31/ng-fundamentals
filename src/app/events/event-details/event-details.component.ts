import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { ISession, IEvent } from '../shared'

@Component({
    selector: 'create-session',
    templateUrl: './event-details.component.html',
    styles: [`
        .container{ padding-left:20px; padding-right:20px; }
        .event-image { height:100px; }
        a {cursor: pointer}
    `]
})
export class EventDetailsComponent{
    event: any
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'

    constructor(private eventService: EventService, 
       private route:ActivatedRoute) {

    }
    ngOnInit(){
        //this.event = this.eventService.getEvent(
            this.route.params.forEach((params:Params)=>{
            this.event = this.route.snapshot.data['event']
                this.addMode = false
                })
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session:ISession){
        const nextId= Math.max.apply(null, this.event.sessions.map( s =>
            s.id ));
        session.id = nextId + 1
        this.event.session.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession(){
        this.addMode = false
    }


}