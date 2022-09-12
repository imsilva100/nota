import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from './layouts';
import {ChangePasswordFormModule, CreateAccountFormModule, FooterModule, LoginFormModule, ResetPasswordFormModule} from './shared/components';
import {AppInfoService, AuthService, ScreenService} from './shared/services';
import {UnauthenticatedContentModule} from './unauthenticated-content';
import {AppRoutingModule} from './app-routing.module';
import {ClientesService} from "./shared/services/clientes.service";
import {ProdutosService} from "./shared/services/produtos.service";
import {NotasService} from "./shared/services/notas.service";
import {ItensnotaModule} from './shared/components/itensnota/itensnota.component';
import {DxDataGridModule, DxFormModule, DxLookupModule, DxMenuModule, DxSelectBoxModule, DxTreeListModule} from "devextreme-angular";
import {EstadosCidadesService} from "./shared/services/estados-cidades.service";
import {HttpClientModule} from "@angular/common/http";
import {EstadosCidadesModule} from "./shared/components/estados-cidades/estados-cidades.component";
import {FirstKeysToConsolePipe} from "./shared/pipes/first.keys.to.console.pipe";

@NgModule({
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxFormModule,
    DxLookupModule,
    DxSelectBoxModule,
    DxMenuModule,
    EstadosCidadesModule,
    DxTreeListModule,
    ItensnotaModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    EstadosCidadesService,
    ClientesService,
    ProdutosService,
    NotasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
