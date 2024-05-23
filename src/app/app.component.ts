import { Component } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'; 
import { LoadingService } from './shared/services/loader/loading.service';
import { AlertService } from './shared/services/alertpopup/alert.service';
import { HttpClient } from '@angular/common/http';
import { LangService } from './shared/services/language/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  API_URL = 'https://apps.foodsted.com/api/flyttom/aa/api/';
  SOURCE_URL = 'https://apps.foodsted.com/api/flyttom/aa/';

  title = 'Flytom';
  current_lang: any = 'no';

  alertErrorMessage: string = '';
  alertSuccessMessage: string = '';

  name: string = '';
  email: string = '';
  phone: string = '';
  comments: string = '';

  current_url: string = '';

  setup_formlist: any = [];

  constructor(private router: Router,
    public loadingService: LoadingService,
    public alertService: AlertService,
    private http: HttpClient,
    public lang: LangService){

    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd){
          //scroll to top
          window.scrollTo(0,0);`enter code here`
          this.current_url = event.url;
        }
    });

    this.setupStorageVariables();
  }


  ngOnInit() {
    this.alertService.getErrorAlerts().subscribe((message: any) => {
      this.alertErrorMessage = message;
    });

    this.alertService.getSuccessAlerts().subscribe((message: any) => {
      this.alertSuccessMessage = message;
      setTimeout(() => this.alertSuccessMessage = '', 5000);
    });
  }


  showAlertError(message: any) {
    this.alertService.showErrorAlert(message);
  }

  closeAlertError() {
    this.alertErrorMessage = ''
  }

  showAlertSuccess(message: any) {
    this.alertService.showSuccessAlert(message);
  }

  closeAlertSuccess() {
    this.alertSuccessMessage = ''
  }

  async setupStorageVariables(){
    let lang = await localStorage.getItem('current_lang');

    if(this.record_validation(lang)){
      this.current_lang = lang;
    } else {
      this.current_lang = 'no';
      await localStorage.setItem('current_lang', this.current_lang);
    }
  }

  record_validation(value:any){
    return value !== null && value !== undefined && value !== '' &&  value !== 'null';
  }


  async call_contactus(subject: any){
    this.loadingService.show();

    if(!this.record_validation(this.name)){
      this.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.name);
      this.loadingService.hide();

    } else if(!this.record_validation(this.email)){
      this.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.email_address);
      this.loadingService.hide();

    } else if(!this.record_validation(this.phone)){
      this.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.phone_number);
      this.loadingService.hide();

    } else if(!this.record_validation(this.comments)){
      this.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.comments);
      this.loadingService.hide();

    } else {
      let setup_formlist: any = [];

      setup_formlist.push(
          {title: this.lang.v.name, value: this.name},
          {title: this.lang.v.email_address, value: this.email},
          {title: this.lang.v.phone_number, value: this.phone},
          {title: this.lang.v.comments, value: this.comments},
      );

      this.setup_formlist = setup_formlist;
      
      const formData = new FormData();
      formData.append('call_customemail', '1'); 

      if(subject == 1){
        formData.append('toemail', 'post@flyttom.no'); 
        formData.append('subject', this.lang.v.contact_us +" "+ this.lang.v.request_from +" "+ this.name);
      
      } else if(subject == 2){
        formData.append('toemail', 'flytting@flyttom.no'); 
        formData.append('subject', this.lang.v.estate +" "+ this.lang.v.request_from +" "+ this.name);
      
      } else if(subject == 3){
        formData.append('toemail', 'flytting@flyttom.no'); 
        formData.append('subject', this.lang.v.garbage_trash +" "+ this.lang.v.request_from +" "+ this.name);
      
      }else if(subject == 4){
        formData.append('toemail', 'flytting@flyttom.no'); 
        formData.append('subject', this.lang.v.packing +" "+ this.lang.v.request_from +" "+ this.name);
      }

      formData.append('total_tag', this.setup_formlist.length);

      for (let i = 0; i < this.setup_formlist.length; i++) {
        formData.append('tagtitle_'+i, this.setup_formlist[i]['title']);
        formData.append('tagvalue_'+i, this.setup_formlist[i]['value']);
      }

      this.http.post(this.API_URL+'web', formData).subscribe(
        (response: any) => {
          this.loadingService.hide();
          console.log("response");
          console.log(response); 

          this.name = '';
          this.email = '';
          this.phone = '';
          this.comments = '';

          this.showAlertSuccess(this.lang.v.request_has_been_submitted_successfully);
        
        },error => {
          this.loadingService.hide();
          if( error.error.messagedetail == undefined ) {
            this.showAlertError("Error to connect");
          } else {
            this.showAlertError(error.error.messagedetail);
          }
      });

    }
  }
  
}
