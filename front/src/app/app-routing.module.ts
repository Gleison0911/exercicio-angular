import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GabinetesComponent } from './pages/gabinetes/gabinetes.component';

import { LoginComponent } from './pages/login/login.component';
import { LotacoesComponent } from './pages/lotacoes/lotacoes.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { SetoresComponent } from './pages/setores/setores.component';
import { VarasComponent } from './pages/varas/varas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'pessoas', component: PessoasComponent, title: 'Pessoas' },
  { path: 'setores', component: SetoresComponent, title: 'Setores' },
  { path: 'varas', component: VarasComponent, title: 'Varas' },
  { path: 'gabinetes', component: GabinetesComponent, title: 'Gabinetes' },
  { path: 'lotacoes', component: LotacoesComponent, title: 'Lotacoes' },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
