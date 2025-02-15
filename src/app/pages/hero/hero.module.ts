import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { HeroComponent } from './hero.component';
import { HeroMainComponent } from './main/hero-main.component';
import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  declarations: [HeroComponent, HeroMainComponent],
  imports: [CommonModule, SharedModule, HeroRoutingModule],
})
export class HeroModule {}
