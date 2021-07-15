import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { NinjaComponent } from "./ninja/ninja.component";
import { SamuraiComponent } from "./samurai/samurai.component";

const routes: Routes = [
  { path: "image/ninja", component: NinjaComponent },
  { path: "image/samurai", component: SamuraiComponent },
  {
    path: 'image/lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  { path: "**", component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule { }
