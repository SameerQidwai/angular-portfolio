import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { GarbageModule } from './garbage/garbage.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FeatureModuleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    GarbageModule,
    NgxPaginationModule,
  ]
})
export class FeatureModuleModule { }
