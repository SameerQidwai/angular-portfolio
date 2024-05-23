import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Options } from '@angular-slider/ngx-slider';
import { DataService } from 'src/app/shared/services/data/data.service';
import { listingGrid } from 'src/app/shared/services/model/model';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
interface data {
  value: string ;
}
@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent {

  public selectedValue1 !: string;
  public selectedValue2 !: string;
  public selectedValue3 !: string;
  public listingGrid: listingGrid[] = [];

  filtertype_list: any = [
    {
      type_id: 1,
      type_name: "Personal Car"
    },
    {
      type_id: 2,
      type_name: "Electric Car"
    },
    {
      type_id: 3,
      type_name: "Vans"
    },
    {
      type_id: 4,
      type_name: "Cars"
    },
    {
      type_id: 5,
      type_name: "Truck"
    },
    {
      type_id: 6,
      type_name: "Hybrid"
    }
  ];

  manufacturer_list: any;
  item_list: any;

  constructor(private data: DataService,
    public app: AppComponent,
    private http: HttpClient,) {
    this.listingGrid = this.data.listingGrid;
  }

  ngOnInit() {
    this.call_manufacturelist();
  }

  public routes = routes;

  slidevalue = 55;
  options: Options = {
    floor: 0,
    ceil: 300,
  };

  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
  ];
  selectedList2: data[] = [
    { value: 'Low to High' },
    { value: 'High to Low' },
  ];
  selectedList3: data[] = [
    { value: 'Popular' },
    { value: 'Toyota Camry SE 350' },
    { value: 'Audi A3 2019 new' },
    { value: 'Ferrari 458 MM Speciale' },
    { value: 'Chevrolet Camaro' },
    { value: 'Acura Sport Version' },
  ];

  async call_manufacturelist(){
    const formData = new FormData();
    formData.append('call_manufacturelist', '1');
    formData.append('call_firstmanufacturepopularitemlist', '1'); 

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
       
        console.log("response");
        console.log(response); 

        this.manufacturer_list = response['manufacturer_list'];
      
      },error => {
        if( error.error.messagedetail == undefined ) {
          alert("Error to connect");
        } else {
          alert(error.error.messagedetail);
        }
    });
  }


  async call_item_list(){
    const formData = new FormData();
    formData.append('call_manufacturelist', '1');
    formData.append('call_firstmanufacturepopularitemlist', '1'); 

    // item_personalcar: any;
    // item_electriccar: any;
    // item_vans: any;
    // item_cars: any;
    // item_truck: any;
    // item_hybrid: any;

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
       
        console.log("response");
        console.log(response); 

        

        this.item_list = response['item_list'];
        this.manufacturer_list = response['manufacturer_list'];
      
      },error => {
        if( error.error.messagedetail == undefined ) {
          alert("Error to connect");
        } else {
          alert(error.error.messagedetail);
        }
    });
  }





  
}
