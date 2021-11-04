import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { // Home page
    path: 'cog',
    data: { title: 'HOME' },
    loadChildren: () => import('./cog/cog.module').then(m => m.CogModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
