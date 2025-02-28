import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from './demo.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {BindingsComponent} from './bindings/bindings.component';

const routes: Routes = [
  {
    path: "",
    component: DemoComponent
  },
  {
    path: "hello-world",
    component: HelloWorldComponent
  },
  {
    path: "bindings",
    component: BindingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
