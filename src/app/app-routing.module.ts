import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisteredGuard } from './shared/guards/registered.guard';

const routes: Routes = [
  {
    /*avaliar nome -> se login ou registration
    (em funcionalidade parece mais com registro
    mas é mais fácil lembrar do nome login)*/
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module')
        .then(m => m.LoginModule)
  }, {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate: [RegisteredGuard]
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
