import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AbpModule } from '@abp/abp.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppSessionService } from './session/app-session.service';
import { AppUrlService } from './nav/app-url.service';
import { AppAuthService } from './auth/app-auth.service';
import { AppRouteGuard } from './auth/auth-route-guard';
import { AbpPaginationControlsComponent } from './pagination/abp-pagination-controls.component';
import { LocalizePipe } from '@shared/pipes/localize.pipe';
import { BlockDirective } from './directives/block.directive';
import { BusyDirective } from './directives/busy.directive';
import { EqualValidator } from './directives/equal-validator.directive';
@NgModule({
  imports: [CommonModule, AbpModule, RouterModule, NgxPaginationModule],
  declarations: [
    AbpPaginationControlsComponent,
    LocalizePipe,
    BlockDirective,
    BusyDirective,
    EqualValidator
  ],
  exports: [
    AbpPaginationControlsComponent,
    LocalizePipe,
    BlockDirective,
    BusyDirective,
    EqualValidator
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AppSessionService,
        AppUrlService,
        AppAuthService,
        AppRouteGuard
      ]
    };
  }
}
