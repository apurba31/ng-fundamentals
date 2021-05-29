import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent, SessionListComponent } from './events/event-details';
//import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe, EventResolver } from './events';
import { JQ_Token, CollapsibleWellComponent} from './common/index'
import { HttpClientModule } from '@angular/common/http'

//declare let toastr: Toastr
let jQuery = window['$']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventService, 
    //{provide: TOASTR_TOKEN, useValue: toastr}, 
    EventRouteActivator,
    EventResolver,
    EventListResolver,
    AuthService,
  { 
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }
],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm(`You have not saved this event, do you really want to cancel?`)
     return true
}
