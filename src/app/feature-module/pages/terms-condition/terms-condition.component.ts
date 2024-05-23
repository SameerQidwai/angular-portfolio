import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/shared/routes/routes';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent {
  
  public routes = routes;

  id: any;
  rentalterms_desc: any;
  rentalterms_desc_no: any;


  constructor(public app: AppComponent,
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    public loadingService: LoadingService,
    public lang: LangService) {

    this.id = this.actRoute.snapshot.paramMap.get('id');

  }


  ngOnInit() {   
    if(this.app.record_validation(this.id)){
      this.call_rentalterms();
    }
  }


  async call_rentalterms(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_rentalterms', '1');
    formData.append('rentalterms_id', this.id.toString());

    this.http.post(this.app.API_URL+'web', formData).subscribe(
      (response: any) => {
        this.loadingService.hide();
        console.log("response");
        console.log(response); 

        let decoded_rentalterms_desc = decodeURIComponent(response['rentalterms_result']['rentalterms_desc']);
        let decoded_rentalterms_desc_no = decodeURIComponent(response['rentalterms_result']['rentalterms_desc_no']);

        this.rentalterms_desc = decoded_rentalterms_desc;
        this.rentalterms_desc_no = decoded_rentalterms_desc_no;

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
