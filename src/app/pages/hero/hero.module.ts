import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero.component';
import { HeroMainComponent } from './main/hero-main.component';
import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HeroComponent, HeroMainComponent],
  imports: [CommonModule, SharedModule, HeroRoutingModule],
})
export class HeroModule {}
