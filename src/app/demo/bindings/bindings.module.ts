import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BindingsComponent} from './bindings.component';
import {OneWayComponent} from './one-way/one-way.component';
import {TwoWaysComponent} from './two-ways/two-ways.component';
import {FormsModule} from "@angular/forms";
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';


@NgModule({
    declarations: [
        BindingsComponent,
        OneWayComponent,
        TwoWaysComponent,
        EventComponent,
        PropertyComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class BindingsModule {
}
