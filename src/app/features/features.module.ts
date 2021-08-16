import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  imports: [SharedModule, FeaturesRoutingModule, MatFormFieldModule],
  declarations: [FeaturesComponent],
})
export class FeaturesModule { }
