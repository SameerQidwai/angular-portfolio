import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  {
    path: 'terms-condition/:id',
    loadChildren: () =>
      import('./terms-condition/terms-condition.module').then(
        (m) => m.TermsConditionModule
      ),
  },
  // { { added in home
  //   path: 'contact-us',
  //   loadChildren: () =>
  //     import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  // },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  
  // { added in home
  //   path: 'about-us',
  //   loadChildren: () =>
  //     import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  // },
  // { { added in home
  //   path: 'faq',
  //   loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  // },
  // { { added in home
  //   path: 'warehouse',
  //   loadChildren: () => import('./warehouse/warehouse.module').then((m) => m.WarehouseModule),
  // },
  // { { added in home
  //   path: 'longterm-rent',
  //   loadChildren: () => import('./longterm-rent/longterm-rent.module').then((m) => m.LongtermRentModule),
  // },
  // { { added in home
  //   path: 'roadside-assistant',
  //   loadChildren: () => import('../roadside-assistant/roadside-assistant.module').then((m) => m.RoadsideAssistantModule),
  // },
  // { added in home
  //   path: 'reviews',
  //   loadChildren: () => import('./reviews/reviews.module').then((m) => m.ReviewsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
