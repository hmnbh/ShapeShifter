import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
