import {  Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <event-thumbnail [event]="event1" ></event-thumbnail>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: 'assets/images/angularconnect-sheld.png',
        location: {
            address: 'Little Whinging',
            city: 'Surrey',
            country: 'England'
        }
    }
}