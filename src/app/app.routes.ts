import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'web', loadChildren: () => import('./web/web.module').then(m => m.WebModule) },
    // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '', redirectTo: 'web', pathMatch: 'full' },  // Redirect to web by default
];
