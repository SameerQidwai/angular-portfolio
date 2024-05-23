import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/shared/routes/routes';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {
  
  active_boxsize: number = 1;

  storage_spacesize: string = '';
  name: string = '';
  email: string = '';
  phone: string = '';
  comments: string = '';

  fromModal: string = '';

  setup_formlist: any = [];
  
  constructor(public app: AppComponent,
    private http: HttpClient,
    private loadingService: LoadingService,
    public lang: LangService,
    private titleService: Title,
    private metaService: Meta) {

  }

  ngOnInit() {
    this.titleService.setTitle(this.lang.v.warehouse +" Stavanger  | "+ this.lang.v.mini_warehouse + " Stavanger - Flyttom.no");
    this.metaService.updateTag( {name: 'keywords', content: 'Lagerhotell, Lagerhotell Stavanger, Leie lagerplass, Minilager'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Vi tilbyr lagerhotell i Stavanger og har også minilager i Stavanger tilgjengelige for private og bedrifter. Vi har ledige lagerhotell.'});
  }

  changeBoxSizeType(box: number){
    this.active_boxsize = box;
    this.storage_spacesize = '';
  }


  submitform(){
    if(!this.app.record_validation(this.storage_spacesize)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.storage_space);

    } else if(!this.app.record_validation(this.name)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.name);
    
    } else if(!this.app.record_validation(this.email)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.email_address);

    } else if(!this.app.record_validation(this.phone)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.phone_number);

    } else if(!this.app.record_validation(this.comments)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.comments);

    } else {
      this.setup_formlistarray();
    }
  }

  setup_formlistarray(){
    let setup_formlist: any = [];
    let storage_space: string = '';

    if(this.active_boxsize == 1){
      storage_space = this.lang.v.small;
    } else if(this.active_boxsize == 2){
      storage_space = this.lang.v.medium;
    } else if(this.active_boxsize == 3){
      storage_space = this.lang.v.large;
    } else if(this.active_boxsize == 4){
      storage_space = this.lang.v.mega;
    }

    setup_formlist.push(
        {title: this.lang.v.storage_space, value: storage_space},
        {title: this.lang.v.space_size, value: this.storage_spacesize},
        {title: this.lang.v.name, value: this.name},
        {title: this.lang.v.email_address, value: this.email},
        {title: this.lang.v.phone_number, value: this.phone},
        {title: this.lang.v.comments, value: this.comments},
    );

    this.setup_formlist = setup_formlist;
    this.call_customemail();

  }


  async call_customemail(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_customemail', '1');
    formData.append('toemail', 'bestilling@flyttom.no'); 
    formData.append('subject', this.lang.v.warehouse +" "+ this.lang.v.request_from +" "+ this.name);

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

        this.storage_spacesize = '';
        this.name = '';
        this.email = '';
        this.phone = '';
        this.comments = '';
        this.fromModal = 'modal'

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

}
