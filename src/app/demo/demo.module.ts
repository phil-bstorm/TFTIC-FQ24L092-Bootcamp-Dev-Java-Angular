import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [
    HelloWorldComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class DemoModule { }
