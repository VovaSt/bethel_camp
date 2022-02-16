import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'camp' // remove after main pages developing
        // loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
    },
    {
        path: 'camp',
        loadChildren: () => import('./modules/camp/camp.module').then(m => m.CampModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
