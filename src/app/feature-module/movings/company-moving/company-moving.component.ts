import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';

@Component({
  selector: 'app-company-moving',
  templateUrl: './company-moving.component.html',
  styleUrls: ['./company-moving.component.css']
})
export class CompanyMovingComponent {
  
  current_form: number = 1;

  desiredmoving_date: string = '';
  ismoving_dateflexible: string = 'yes';
  flexiblemoving_date: string = '';
  movingagency_packinventory: string = 'yes';
  haveobjectsstoredbetween_movingoutin: string = 'yes';
  washyour_currentpremises: string = 'yes';

  insuremoving_load: string = 'no';
  approx_insurancevalue: string = '';
  size_movingload: string = '';

  current_address: string = '';
  street_no: string = '';
  postal_code: string = '';
  size_room: string = '';
  floors_number: string = '';
  numberof_employee: string = '';

  onwhichfloor_entrance: string = '';
  lift_inbuilding: string = 'yes';
  isgoodsreception_inbuilding: string = 'yes';
  distanceto_parking: string = '';

  new_address: string = '';
  street_no2: string = '';
  postal_code2: string = '';
  size_room2: string = '';
  floors_number2: string = '';

  onwhichfloor_entrance2: string = '';
  lift_inbuilding2: string = 'yes';
  isgoodsreception_inbuilding2: string = 'yes';
  distanceto_parking2: string = '';

  moving_heavyobjects: string = 'yes';
  moving_heavyobjectsinput: string = '';
  movingfragile_valuableitems: string = 'yes';
  movingfragile_valuableitemsinput: string = '';

  additional_information: string = '';
  company: string = '';
  contact_person: string = '';
  email: string = '';
  telephone: string = '';

  terms_condition: boolean = false;

  setup_formlist: any = [];

  
  constructor(public app: AppComponent,
    private http: HttpClient,
    private loadingService: LoadingService,
    public datepipe: DatePipe,
    public lang: LangService,
    private titleService: Title,
    private metaService: Meta,) {

  }
  ngOnInit() {
    this.titleService.setTitle(this.lang.v.company_moving_page_title);
    this.metaService.updateTag( {name: 'keywords', content: 'Bedriftsflytting. Flytting Bedrift, Kontorflytting, Flytting, Bedriftsflytting Stavanger.'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Skal bedriften flytte? Flyttom AS tilbyr skreddersydde løsninger for bedriftsflytting i Rogaland. Med vår ekspertise og omfattende tjenester sikrer vi en problemfri overgang for din bedrift.'});
  }

  changeTab(tab: number){
    this.current_form = tab;
  }

  submitform(form:any){
    if(form == 1){
      if(!this.app.record_validation(this.desiredmoving_date)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.desired_moving_date);

      } else if(this.ismoving_dateflexible == 'yes' && !this.app.record_validation(this.flexiblemoving_date)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.flexible_moving_date);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 2){

      if(!this.app.record_validation(this.size_movingload)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.approximately_how_big_is_moving_load);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 3){

      if(!this.app.record_validation(this.current_address)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.current_address);

      } else if(!this.app.record_validation(this.street_no)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.street_no);

      } else if(!this.app.record_validation(this.postal_code)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.postal_code);

      } else if(!this.app.record_validation(this.size_room)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.size_of_the_room);

      } else if(!this.app.record_validation(this.floors_number)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.how_many_floors_do_you_have);

      } else if(!this.app.record_validation(this.numberof_employee)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.number_of_employees);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 4){

      if(!this.app.record_validation(this.onwhichfloor_entrance)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.which_floor_entrance);

      } else if(!this.app.record_validation(this.distanceto_parking)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.distance_to_parking);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 5){

      if(!this.app.record_validation(this.new_address)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.new_adress);

      } else if(!this.app.record_validation(this.street_no2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.street_no);

      } else if(!this.app.record_validation(this.postal_code2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.postal_code);

      } else if(!this.app.record_validation(this.size_room2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.size_of_the_room);

      } else if(!this.app.record_validation(this.floors_number2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.how_many_floors_do_you_have);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 6){

      if(!this.app.record_validation(this.onwhichfloor_entrance2)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.which_floor_entrance);

      } else if(!this.app.record_validation(this.distanceto_parking2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.distance_to_parking);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 7){
        this.current_form = form + 1;
      
    } else if (form == 8){

      if(!this.app.record_validation(this.company)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.company);

      } else if(!this.app.record_validation(this.contact_person)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.contact_person);

      } else if(!this.app.record_validation(this.email)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.email);

      } else if(!this.app.record_validation(this.telephone)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.telephone);

      } else if(!this.terms_condition) {
        this.app.showAlertError(this.lang.v.must_be_accept_terms_and_conditions);

      } else {
        this.setup_formlistarray();
        this.call_customemail();
      }
    }

  }


  setup_formlistarray(){
    let setup_formlist: any = [];

    setup_formlist.push(
        {title: this.lang.v.desired_moving_date, value: this.datepipe.transform(this.desiredmoving_date,'dd-MM-yyyy')},
        {title: this.lang.v.is_the_moving_date_flexible, value: this.validate_valueyes(this.ismoving_dateflexible)},
        this.ismoving_dateflexible == 'yes'? { title: this.lang.v.flexible_moving_date, value: this.flexiblemoving_date} : { title: '', value: ''},
        {title: this.lang.v.moving_agency_to_pack_your_inventory, value: this.validate_valueyes(this.movingagency_packinventory)},
        {title: this.lang.v.do_the_objects_have_to_be_stored, value: this.validate_valueyes(this.haveobjectsstoredbetween_movingoutin)},
        {title: this.lang.v.do_you_want_your_current_premises_cleaned, value: this.validate_valueyes(this.washyour_currentpremises)},

        {title: this.lang.v.do_you_want_to_insure_the_moving_load, value: this.validate_valueyes(this.insuremoving_load)},
        this.insuremoving_load == 'yes'? { title: this.lang.v.approx_insurance_value_optional, value: this.approx_insurancevalue} : { title: '', value: ''},
        {title: this.lang.v.approximately_how_big_is_moving_load, value: this.size_movingload},

        {title: this.lang.v.current_address, value: this.current_address},
        {title: this.lang.v.street_no, value: this.street_no},
        {title: this.lang.v.postal_code, value: this.postal_code},
        {title: this.lang.v.size_of_the_room, value: this.size_room},
        {title:  this.lang.v.how_many_floors_do_you_have, value: this.floors_number},
        {title: this.lang.v.number_of_employees, value: this.numberof_employee},

        {title: this.lang.v.which_floor_entrance, value: this.onwhichfloor_entrance},
        {title: this.lang.v.is_there_a_lift_in_the_building, value: this.validate_valueyes(this.lift_inbuilding)},
        {title: this.lang.v.is_there_a_goods_reception_in_the_building, value: this.validate_valueyes(this.isgoodsreception_inbuilding)},
        {title: this.lang.v.distance_to_parking, value: this.distanceto_parking},

        {title: this.lang.v.new_adress, value: this.new_address},
        {title: this.lang.v.street_no, value: this.street_no2},
        {title: this.lang.v.postal_code, value: this.postal_code2},
        {title: this.lang.v.size_of_the_room, value: this.size_room2},
        {title: this.lang.v.how_many_floors_do_you_have, value: this.floors_number2},
       
        {title: this.lang.v.which_floor_entrance, value: this.onwhichfloor_entrance2},
        {title: this.lang.v.is_there_a_lift_in_the_building, value: this.validate_valueyes(this.lift_inbuilding2)},
        {title: this.lang.v.is_there_a_goods_reception_in_the_building, value: this.validate_valueyes(this.isgoodsreception_inbuilding2)},
        {title: this.lang.v.distance_to_parking, value: this.distanceto_parking2},

        {title: this.lang.v.are_you_moving_heavy_objects, value: this.validate_valueyes(this.moving_heavyobjects)},
        this.moving_heavyobjects == 'yes'? {title: this.lang.v.which_heavy_objects_are_to_be_moved, value: this.moving_heavyobjectsinput} : { title: '', value: ''},
        {title: this.lang.v.are_you_moving_fragile_or_valuable_items, value: this.validate_valueyes(this.movingfragile_valuableitems)},
        this.movingfragile_valuableitems == 'yes'? {title: this.lang.v.which_fragile_or_valuable_items_should_be_moved, value: this.movingfragile_valuableitemsinput} : { title: '', value: ''},

        {title: this.lang.v.additional_information_optional, value: this.additional_information},
        {title: this.lang.v.company, value: this.company},
        {title: this.lang.v.contact_person, value: this.contact_person},
        {title: this.lang.v.email, value: this.email},
        {title: this.lang.v.telephone, value: this.telephone},

    );

    this.setup_formlist = [];

    for (let i = 0; i < setup_formlist.length; i++) {
      if(this.app.record_validation(setup_formlist[i]['value'])){
        this.setup_formlist.push(setup_formlist[i]);
      }
    }

    console.log(this.setup_formlist);

  }


  validate_valueyes(value:any){
    if(value == 'yes'){
      return this.lang.v.yes;
    } else {
      return this.lang.v.no;
    }
  }


  async call_customemail(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_customemail', '1');
    formData.append('toemail', 'flytting@flyttom.no'); 
    formData.append('subject', this.lang.v.company_moving +" "+ this.lang.v.request_from +" "+ this.contact_person); 

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

        this.current_form = 1;
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
