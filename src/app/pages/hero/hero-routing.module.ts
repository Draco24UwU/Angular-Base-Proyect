import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroMainComponent } from './main/hero-main.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      {
        path: '',
        component: HeroMainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
