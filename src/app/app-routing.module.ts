import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

import { environment } from 'src/environments/environment';


// if you don't want to lazy load the features module,
// simply put the loadFeaturesModule as value of loadChildren
// import { FeaturesModule } from './features/features.module';

// export function loadFeaturesModule() {
//   return FeaturesModule;
// }

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/features/features.module').then(m => m.FeaturesModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: environment.preloadAllLazyLoadedModules
        ? PreloadAllModules
        : NoPreloading,
    }),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule {}
