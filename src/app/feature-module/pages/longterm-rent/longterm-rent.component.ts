import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';

@Component({
  selector: 'app-longterm-rent',
  templateUrl: './longterm-rent.component.html',
  styleUrls: ['./longterm-rent.component.css']
})
export class LongtermRentComponent {

  rental_duration: string = '';
  name: string = '';
  email: string = '';
  phone: string = '';
  comments: string = '';

  setup_formlist: any = [];

  constructor(public app: AppComponent,
    private http: HttpClient,
    private loadingService: LoadingService,
    public lang: LangService,
    private titleService: Title,
    private metaService: Meta,) {

  }

  ngOnInit() {
    this.titleService.setTitle(this.lang.v.car_rental + " Stavanger" + " | " + this.lang.v.rent + " " + this.lang.v.moving_car + " Stavanger - Flyttom.no");
    this.metaService.updateTag( {name: 'keywords', content: 'Bilutleie, Leie bil, Leie flyttebil, Bilutleie Stavanger'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Flyttom AS tilbyr bilutleie i Stavanger for både private og bedrifter. Du kan også leie varebil, leie flyttebil. Best på Leiebil i Stavanger'});
  }


  submitform(){
    if(!this.app.record_validation(this.rental_duration)){
      this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.rental_duration);

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

    setup_formlist.push(
        {title: this.lang.v.rental_duration, value: this.rental_duration},
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
    formData.append('toemail', 'bilutleie@flyttom.no'); 
    formData.append('subject', this.lang.v.longterm_rent +" "+ this.lang.v.request_from +" "+ this.name); 
 
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

        this.rental_duration = '';
        this.name = '';
        this.email = '';
        this.phone = '';
        this.comments = '';

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
