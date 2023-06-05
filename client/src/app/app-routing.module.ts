import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
