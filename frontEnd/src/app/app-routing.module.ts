import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangePasswordFormComponent, CreateAccountFormComponent, LoginFormComponent, ResetPasswordFormComponent} from './shared/components';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {DxDataGridModule, DxFormModule, DxLoadIndicatorModule, DxSelectBoxModule} from 'devextreme-angular';
import {EstadosCidadesModule} from "./shared/components/estados-cidades/estados-cidades.component";
import {CommonModule} from "@angular/common";
import {EstadosPageComponent} from "./pages/estados-page/estados-page.component";
import {ClientesComponent} from "./shared/components/clientes/clientes.component";
import {ProdutosComponent} from "./shared/components/produtos/produtos.component";
import {NotasComponent} from "./shared/components/notas/notas.component";

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'notas-fiscais',
    component: NotasComponent
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'estadocidade',
    component: EstadosPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false}), DxDataGridModule, DxFormModule, DxSelectBoxModule, CommonModule, DxLoadIndicatorModule, EstadosCidadesModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    EstadosPageComponent
  ]
})
export class AppRoutingModule { }
