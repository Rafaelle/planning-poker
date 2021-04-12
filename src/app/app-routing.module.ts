import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredGuard } from './shared/guards/registered.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/registration/registration.module')
        .then(m => m.RegistrationModule)
  }, {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate: [RegisteredGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
