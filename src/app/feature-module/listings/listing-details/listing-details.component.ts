import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';
import { interestedCars, listingDetails, thumbnails } from 'src/app/shared/services/model/model';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent {

  public routes = routes;
  public listingDetails: listingDetails[] = [];
  public thumbnails: thumbnails[] = [];
  public interestedCars: interestedCars[] = [];

  readMore: boolean = false;

  activeTab:number = 1;

  id: any;
  terms_id: string = '';
  insurance_desc: string = '';
  insurance_desc_no: string = '';
  item_longdescription: string = '';
  item_longdescription_no: string = '';

  response: any;
  item_result: any;
  itemimage_list: any;
  insurance_result: any;
  itemtag_list: any;
  itemfeature_list: any;
  vsize_result: any;

  active_enquiryform: boolean = false;

  name: string = '';
  email: string = '';
  phone: string = '';
  pickupdropoff_location: string = 'Fabrikkveien 7, 4033 Stavanger';
  pickup_date: string = ''; 
  pickup_time: string = ''; 
  return_date: string = '';
  return_time: string = '';

  setup_formlist: any = [];

  constructor(private data: DataService,
    public app: AppComponent,
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    public loadingService: LoadingService,
    private datepipe: DatePipe,
    public lang: LangService) {
    this.listingDetails = this.data.listingDetails;
    this.thumbnails = this.data.thumbnails;
    this.interestedCars = this.data.interestedCars;

    this.id = this.actRoute.snapshot.paramMap.get('id');

  }


  ngOnInit() {   
    if(this.app.record_validation(this.id)){
      this.call_item();
    }
  }


  
  async call_item(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_item', '1');
    formData.append('id', this.id.toString());

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
        this.loadingService.hide();
        console.log("response");
        console.log(response); 

        this.response = response;
        this.item_result = response['item_result'];
        this.itemimage_list = response['itemimage_list'];
        this.itemtag_list = response['itemtag_list'];
        this.itemfeature_list = response['itemfeature_list'];
        this.vsize_result = response['vsize_result'];

        let decoded_item_longdescription = decodeURIComponent(this.item_result.item_longdescription);
        let decoded_item_longdescription_no = decodeURIComponent(this.item_result.item_longdescription_no);

        this.item_longdescription = decoded_item_longdescription;
        this.item_longdescription_no = decoded_item_longdescription_no;

        this.insurance_result = response['insurance_result'];

        let decoded_insurance_desc = decodeURIComponent(this.insurance_result.insurance_desc);
        let decoded_insurance_desc_no = decodeURIComponent(this.insurance_result.insurance_desc_no);

        this.insurance_desc = decoded_insurance_desc;
        this.insurance_desc_no = decoded_insurance_desc_no;

      },error => {
        this.loadingService.hide();
        if( error.error.messagedetail == undefined ) {
          this.app.showAlertError(this.lang.v.error_to_connect);
        } else {
          this.app.showAlertError(error.error.messagedetail);
        }
    });
  }


  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.detail-bigimg',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  interestedCarsOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    loop: true,
    rtl: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };

  toggleReadMore(){
    this.readMore = !this.readMore;
  }

  changeTab(value: number){
    this.activeTab = value;
  }


  openRentalTermsPDF(){
    window.open('/assets/rentalcondition.pdf', '_blank');
  }


  submitform(){  
    if(!this.app.record_validation(this.name)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.name);
    
    } else if(!this.app.record_validation(this.email)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.email_address);
   
    } else if(!this.app.record_validation(this.phone)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.phone_number);
    
    } else if(!this.app.record_validation(this.pickup_date)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.pickup_date);
    
    } else if(!this.app.record_validation(this.pickup_time)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.pickup_time);
    
    } else if(!this.app.record_validation(this.return_date)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.return_date);
    
    } else if(!this.app.record_validation(this.return_time)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.return_time);
    
    } else {
      this.setup_formlistarray();
    }
  }

  setup_formlistarray(){
    let setup_formlist: any = [];
  
    setup_formlist.push(
        {title: this.lang.v.vehicle_name, value: this.item_result.item_name},
        {title: this.lang.v.name, value: this.name},
        {title: this.lang.v.email_address, value: this.email},
        {title: this.lang.v.phone_number, value: this.phone},
        {title: this.lang.v.pickup_and_dropoff_location, value: this.pickupdropoff_location},
        {title: this.lang.v.pickup_date, value: this.datepipe.transform(this.pickup_date,'dd-MM-yyyy')},
        {title: this.lang.v.pickup_time, value: this.pickup_time},
        {title: this.lang.v.return_date, value: this.datepipe.transform(this.return_date,'dd-MM-yyyy')},
        {title: this.lang.v.return_time, value: this.return_time},       
    );

    this.setup_formlist = setup_formlist;
    this.call_customemail();

  }


  async call_customemail(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_customemail', '1');
    formData.append('toemail', 'bilutleie@flyttom.no'); 
    formData.append('subject', this.lang.v.rental +" "+ this.lang.v.request_from +" "+ this.name); 
   
    formData.append('total_tag', this.setup_formlist.length);
    
    for (let i = 0; i < this.setup_formlist.length; i++) {
      formData.append('tagtitle_'+i, this.setup_formlist[i]['title']);
      formData.append('tagvalue_'+i, this.setup_formlist[i]['value']);
    }

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
        this.loadingService.hide();
        console.log("response");
        console.log(response);

        this.name = '';
        this.email = '';
        this.phone = '';
        this.pickup_date = ''; 
        this.pickup_time = ''; 
        this.return_date = '';
        this.return_time = '';

        this.active_enquiryform = false;
        this.app.showAlertSuccess(this.lang.v.request_has_been_submitted_successfully);
      
      },error => {
        this.loadingService.hide();
        if( error.error.messagedetail == undefined ) {
          this.app.showAlertError(this.lang.v.error_to_connect);
        } else {
          this.app.showAlertError(error.error.messagedetail);
        }
    });
  }


  trigger_enquiryform(){
    this.active_enquiryform = !this.active_enquiryform;
  }

}
