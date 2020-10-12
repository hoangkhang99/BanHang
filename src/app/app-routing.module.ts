import { from } from 'rxjs';
import { ProductModule } from './product/product.module';
import { MainModule } from './main/main.module';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path : 'home',
        component: MainComponent,
    },
    {
        path: 'product',
        loadChildren: () => import ('./product/product.module').then((p) => p.ProductModule),
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule{}