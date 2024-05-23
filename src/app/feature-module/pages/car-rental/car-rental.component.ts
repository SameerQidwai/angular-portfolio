import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent {

  public routes = routes;

  per_page: number = 15;
  total_page: number = 1;

  orderby_list: any;
  popular_list: any;

  public order_by !: string;
  public onlypopularitem !: string;

  item_personalcar: boolean = true;
  item_electriccar: boolean = true;
  item_vans: boolean = true;
  item_cars: boolean = true;
  item_truck: boolean = true;
  item_hybrid: boolean = true;
  search: string = '';

  active_listingstyle: boolean = true;
  
  manufacturer_list: any;
  item_list: any;
  pagenumber: number = 1;
  nextpageavailable: boolean = false;

  currentPath: string = ''

  constructor(private data: DataService,
    public app: AppComponent,
    public lang: LangService,
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient,
    private loadingService: LoadingService
  ){

  }
  
  
  ngOnInit() {
    this.titleService.setTitle(this.lang.v.car_rental + " Stavanger" + " | " + this.lang.v.rent + " " + this.lang.v.moving_car + " Stavanger - Flyttom.no");
    this.metaService.updateTag( {name: 'keywords', content: 'Bilutleie, Leie bil, Leie flyttebil, Bilutleie Stavanger'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Flyttom AS tilbyr bilutleie i Stavanger for både private og bedrifter. Du kan også leie varebil, leie flyttebil. Best på Leiebil i Stavanger'});

    this.orderby_list = [
      { 
        id: '1',
        value: this.lang.v.low_to_high 
      },
      { 
        id: '2',
        value: this.lang.v.high_to_low  
      },
      { 
        id: '3',
        value: this.lang.v.name_asc  
      },
      { 
        id: '4',
        value: this.lang.v.name_desc  
      },
    ];
  
    this.popular_list = [
      { 
        id: '1',
        value: this.lang.v.all  
      },
      { 
        id: '2',
        value: this.lang.v.popular  
      },
    ];

    this.call_manufacturelist();
  }

  async call_manufacturelist(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_manufacturelist', '1');

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
        this.loadingService.hide();
        console.log("response");
        console.log(response); 

        this.manufacturer_list = response['manufacturer_list'];

        this.manufacturer_list.forEach((element: any) => {
          element.status = false;
        });
  
        this.call_filteritem();

      },error => {
        this.loadingService.hide();
        if( error.error.messagedetail == undefined ) {
          this.app.showAlertError(this.lang.v.error_to_connect);
        } else {
          this.app.showAlertError(error.error.messagedetail);
        }
    });
  }


  async call_filteritem(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_filteritem', '1');
    formData.append('page', this.pagenumber.toString());
  
    if(this.item_personalcar){
      formData.append('item_personalcar', '1'); 
    }

    if(this.item_electriccar){
      formData.append('item_electriccar', '1'); 
    }

    if(this.item_vans){
      formData.append('item_vans', '1'); 
    }

    if(this.item_cars){
      formData.append('item_cars', '1'); 
    }

    if(this.item_truck){
      formData.append('item_truck', '1'); 
    }

    if(this.item_hybrid){
      formData.append('item_hybrid', '1'); 
    }

    formData.append('search', this.search); 

    let filter_manufacturerlist: any = [];

    for (let i = 0; i < this.manufacturer_list.length; i++) {
      if(this.manufacturer_list[i]['status']){
        filter_manufacturerlist.push(this.manufacturer_list[i]['manufacturer_id']);
      }      
    }

    if(this.app.record_validation(filter_manufacturerlist) && filter_manufacturerlist.length > 0){
      formData.append('total_manufacturer', filter_manufacturerlist.length);

      for (let i = 0; i < filter_manufacturerlist.length; i++) {
        formData.append('manufacturerid_'+i, filter_manufacturerlist[i]);
      } 
    }

    if(this.app.record_validation(this.order_by)){
      if(this.order_by == '1'){
        formData.append('order_by', 'itemrate_asc'); 
      }

      if(this.order_by == '2'){
        formData.append('order_by', 'itemrate_desc'); 
      }

      if(this.order_by == '3'){
        formData.append('order_by', 'itemname_asc'); 
      }

      if(this.order_by == '4'){
        formData.append('order_by', 'itemname_desc'); 
      }
    }

    if(this.app.record_validation(this.onlypopularitem)){
      if(this.onlypopularitem == '2'){
        formData.append('onlypopularitem', '1'); 
      }
    }

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
        this.loadingService.hide();
        console.log("response");
        console.log(response); 

        this.item_list = response['item_list'].data;   
        
        if(response['item_list'].next_page_url) {
          this.nextpageavailable = true;
        } else {
          this.nextpageavailable = false;
        }

        this.per_page = response['item_list'].per_page;
        this.total_page = response['item_list'].total;
      
      },error => {
        this.loadingService.hide();
        if( error.error.messagedetail == undefined ) {
          this.app.showAlertError(this.lang.v.error_to_connect);
        } else {
          this.app.showAlertError(error.error.messagedetail);
        }
    });
  }

  async call_resetfilter(){
    window.location.reload();
  }

  call_search() {
    this.pagenumber = 1;
    this.call_filteritem();
  }


  async call_manufacturefilter(index: any, status: any){
    if(status){
      this.manufacturer_list[index]['status'] = false;
    } else {
      this.manufacturer_list[index]['status'] = true;
    }
  }

  change_orderby(){
    if(this.order_by){
      this.pagenumber == 1;
      this.call_filteritem();
    }
  }

  change_popular(){
    if(this.app.record_validation(this.onlypopularitem)){
      this.pagenumber == 1;
      this.call_filteritem();
    }
  }


  toggle_listingstyle(value: any){
    if(value == 1){
      this.active_listingstyle = true;
    } else {
      this.active_listingstyle = false;
    }
  }

  pageDataChange(event: any) {
    this.pagenumber = event;
    this.call_filteritem();
  }


  perPageSizeChange(event: any): void {
    console.log(event.target.value);
    this.per_page = event.target.value;
    this.pagenumber = event;
    this.call_filteritem();
  }
}
