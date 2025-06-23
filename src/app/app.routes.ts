import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Productos } from './pages/products/products';
import { Checkout } from './components/checkout/checkout';
import { Opiniones } from './pages/opiniones/opiniones';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'productos', component: Productos },
  { path: 'contacto', component: Contact },
  { path: 'checkout', component: Checkout },
  { path: 'opiniones', component: Opiniones },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
