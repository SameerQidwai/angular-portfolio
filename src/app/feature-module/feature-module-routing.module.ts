import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';


const routes: Routes = [
  {
    path: '',
    component: FeatureModuleComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
          
      },
      {
        path: 'listings',
        loadChildren: () =>
          import('./listings/listings.module').then((m) => m.ListingsModule),
      },
      {
        path: 'bilutleie',
        loadChildren: () => import('./pages/car-rental/car-rental.module').then((m) => m.CarRentalModule),
      },
      {
        path: 'bilutleie/:id',
        loadChildren: () => import('./listings/listing-details/listing-details.module').then((m) => m.ListingDetailsModule),
      },
      {
        path: 'varebiler',
        loadChildren: () =>
          import('./listings/listing-list/listing-list.module').then((m) => m.ListingListModule),
      },
      {
        path: 'personbiler',
        loadChildren: () =>
          import('./listings/listing-list/listing-list.module').then((m) => m.ListingListModule),
      },
      {
        path: 'elbiler',
        loadChildren: () =>
          import('./listings/listing-list/listing-list.module').then((m) => m.ListingListModule),
      },
      {
        path: 'hybrid',
        loadChildren: () =>
          import('./listings/listing-list/listing-list.module').then((m) => m.ListingListModule),
      },
      {
        path: 'langtidsleie',
        loadChildren: () => import('./pages/longterm-rent/longterm-rent.module').then((m) => m.LongtermRentModule),
      },
      {
        path: 'veihjelp',
        loadChildren: () => import('./pages/roadside-assistant/roadside-assistant.module').then((m) => m.RoadsideAssistantModule),
      },
      // {
      //   path: 'movings',
      //   loadChildren: () =>
      //     import('./movings/movings.module').then((m) => m.MovingsModule),
      // },
      {
        path: 'flytting',
        loadChildren: () =>
          import('./movings/movings.module').then((m) => m.MovingsModule),
      },
      {
        path: 'privatflytting',
        loadChildren: () =>
          import('./movings/private-moving/private-moving.module').then((m) => m.PrivateMovingModule),
      },
      {
        path: 'bedriftsflytting',
        loadChildren: () =>
          import('./movings/company-moving/company-moving.module').then((m) => m.CompanyMovingModule),
      },
      {
        path: 'pakking',
        loadChildren: () =>
          import('./movings/packing/packing.module').then((m) => m.PackingModule),
      },
      // {
      //   path: 'garbage',
      //   loadChildren: () =>
      //     import('./garbage/garbage.module').then((m) => m.GarbageModule),
          
      // },
      {
        path: 'dødsbo',
        loadChildren: () =>
          import('./garbage/estate/estate.module').then((m) => m.EstateModule),
      },
      {
        path: 'søppelkast',
        loadChildren: () =>
          import('./garbage/garbage-trash/garbage-trash.module').then((m) => m.GarbageTrashModule),
      },
      {
        path: 'lagerhotell',
        loadChildren: () =>
          import('./pages/warehouse/warehouse.module').then((m) => m.WarehouseModule),
      },
      {
        path: 'kontakt-oss',
        loadChildren: () =>
          import('./pages/contact-us/contact-us.module').then((m) => m.ContactUsModule),
      },
      {
        path: 'vår-intro',
        loadChildren: () =>
          import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: 'anmeldelser',
        loadChildren: () =>
          import('./pages/reviews/reviews.module').then((m) => m.ReviewsModule),
      },
      {
        path: 'faqs',
        loadChildren: () =>
          import('./pages/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./error/error.module').then((m) => m.ErrorModule),
          
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModuleRoutingModule {}
