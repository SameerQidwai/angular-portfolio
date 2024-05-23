import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Title, Meta} from '@angular/platform-browser';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { carTypes, popularCars1, popularCars2, popularCars3, popularCars4, popularCars5, popularCars6, testimonial } from 'src/app/shared/services/model/model';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';
import { LangService } from 'src/app/shared/services/language/lang.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  public routes = routes;
  public testimonial: testimonial[] = [];

  servicelist: any;

  mainSlider = [
    {
      title: 'Privatflytting',
      description: 'Trenger du flyttebil eller hjelp med flytting? Vi tilbyr flyttehjelp med mannskap og varebil.',
      image: 'assets/img/slider/private_moving.png',
      route: '/movings/private-moving',
    },
    {
      title: 'Bedriftsflytting',
      description: 'Bestill oss for bedriftsflytting. Vi flytter kontorer, og har lang erfaring innen bedriftsflytting.',
      image: 'assets/img/slider/company_moving.png',
      route: '/movings/company-moving',
    },
    {
      title: 'Pakking',
      description: 'Vi tilbyr pakketjeneste i forbindelse med flytting, transport og lagring. ',
      image: 'assets/img/slider/packing.png',
      route: '/movings/packing',
    },
    {
      title: 'Dødsbo',
      description: 'Overlat jobben til oss og vi rydder dødsboet med verdighet. Velger du oss trenger du kun å forholde deg til ett firma. ',
      image: 'assets/img/slider/estate.png',
      route: '/garbage/estate',
    },
    {
      title: 'Søppelkast',
      description: 'Ønsker du å kjøre bort søppel eller rydde vekk restavfall? Vi kjører søppel til miljøstasjon.',
      image: 'assets/img/slider/garbage.png',
      route: '/garbage/garbage-trash',
    },
    {
      title: 'Lagerbod',
      description: 'Vi har lagerhotell til både privat og bedrifter. Ulike størrelser som kan tilpasses ditt behov.',
      image: 'assets/img/slider/warehouse.png',
      route: '/pages/warehouse',
    },
  ];

  currentIndex = 0;

  recommendedCarOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  testimonialOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  carTypesOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  };

  item_list: any;
  manufacturer_list: any;
  manufacturer_id: any;

  constructor(private data: DataService,
    public app: AppComponent,
    private http: HttpClient,
    private loadingService: LoadingService,
    public lang: LangService,
  private titleService: Title,
private metaService: Meta,) {
    this.testimonial = this.data.testimonial;
    
  }

  
  ngOnInit() {
    this.titleService.setTitle(this.lang.v.home_page_title);
    this.metaService.updateTag( {name: 'keywords', content: 'Flytting, Bilutleie, Lagerhotell, Flyttebyrå, Bil Til Leie, Leie Av Bil'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Med over 20 års erfaring tilbyr Flyttom AS en rekke tjenester inkludert bilutleie, flytting og lagerhotell. Velg pålitelige og rimelige løsninger for dine behov i Rogaland.'});

    this.changeImageAndTypeWriter();
    this.call_manufacturelist();


    this.servicelist = [
      {
        id: 0,
        title: this.lang.v.car_rental,
        description:this.lang.v.car_rental_service_description,
        img: "assets/img/services/s1.png",
        hoverImg: "assets/img/services/s1.png",
        moreRoute: "/personbiler",
        enjuiryRoute: "/personbiler",
        alt:"Bilutleie"
      },
      {
        id: 1,
        title: this.lang.v.moving,
        description:this.lang.v.moving_service_description,
        img: "assets/img/services/s2.png",
        hoverImg: "assets/img/services/s2.png",
        moreRoute: "/movings/private-moving",
        enjuiryRoute: "/movings/private-moving",
        alt: "Flytting"
      },
      {
        id: 2,
        title: this.lang.v.warehouse,
        description:this.lang.v.warehouse_service_description,
        img: "assets/img/services/s3.png",
        hoverImg: "assets/img/services/s3.png",
        moreRoute: "/pages/warehouse",
        enjuiryRoute: "/pages/warehouse",
        alt: "Lagerhotell"
      }
    ];

  }


  changeImageAndTypeWriter() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.mainSlider.length;
    }, 10000); 
  }


  async call_manufacturelist(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_manufacturelist', '1');
    formData.append('call_firstmanufacturepopularitemlist', '1'); 

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
        this.loadingService.hide();
        console.log("response");
        console.log(response); 

        this.item_list = response['item_list'];
        this.manufacturer_list = response['manufacturer_list'];
      
      },error => {
        this.loadingService.hide();
        if( error.error.messagedetail == undefined ) {
          this.app.showAlertError(this.lang.v.error_to_connect);
        } else {
          this.app.showAlertError(error.error.messagedetail);
        }
    });
  }


  async call_manufacturepopularitemlist(manufacturer_id: any){
    this.loadingService.show();
    this.manufacturer_id = manufacturer_id;

    const formData = new FormData();
    formData.append('call_manufacturepopularitemlist', '1');
    formData.append('manufacturer_id',  this.manufacturer_id); 

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
        this.loadingService.hide();
        console.log("response");
        console.log(response); 

        this.item_list = response['item_list'];
      
      },error => {
        this.loadingService.hide();
        if( error.error.messagedetail == undefined ) {
          this.app.showAlertError(this.lang.v.error_to_connect);
        } else {
          this.app.showAlertError(error.error.messagedetail);
        }
    });
  }
  
}
