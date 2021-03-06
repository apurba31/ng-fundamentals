import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component"
import { Routes } from '@angular/router'
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
import { CreateSessionComponent } from "./events/event-details";
import { EventResolver } from "./events";

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve:{events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, 
    // canActivate: [EventRouteActivator] },
    resolve:{event:EventResolver}},
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component:Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { 
        path: 'user', 
        loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule)
    }
]