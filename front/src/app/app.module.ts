import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { SetoresComponent } from './pages/setores/setores.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { SearchboxComponent } from './shared/searchbox/searchbox.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VarasComponent } from './pages/varas/varas.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { GabinetesComponent } from './pages/gabinetes/gabinetes.component';
import { LotacoesComponent } from './pages/lotacoes/lotacoes.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PessoasComponent,
    SetoresComponent,
    SidebarComponent,
    SearchboxComponent,
    VarasComponent,
    GabinetesComponent,
    LotacoesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    TableModule,
    SplitButtonModule,
    SidebarModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    ToastModule,
    PaginatorModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
