import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { LoadingService } from 'src/app/shared/services/loader/loading.service';

@Component({
  selector: 'app-private-moving',
  templateUrl: './private-moving.component.html',
  styleUrls: ['./private-moving.component.css']
})
export class PrivateMovingComponent {

  current_form: number = 1;

  desiredmoving_date: string = '';
  ismovingdate_flexible: string = 'yes';
  flexible_movingdate: string = '';
  movingagency_packitems: string = 'yes';
  haveobjectsstoredbetween_moving_outin: string = 'yes';
  // washyour_currenthome: string = 'yes';

  insuremoving_load: string = 'no';
  approx_insurancevalue: string = '';
  size_movingload: string = '';
  nopeople_household: string = '';

  current_address: string = '';
  street_no: string = '';
  postal_code: string = '';
  size_home: string = '';
  total_rooms: string = '';
  housing_type: string = '';

  numberof_floors: string = '';
  floor_apartmenton: string = '';
  lift_inbuilding: string = 'yes';
  somethingmovedfrom_storagerooms: string = 'no';
  loft_storage: boolean = false;
  basement_storage: boolean = false;
  outdoor_storage: boolean = false;
  somethingmovedfrom_garage: string = 'no';
  distance_to_parking: string = '';

  new_adress: string = '';
  street_no2: string = '';
  postal_code2: string = '';
  size_home2: string = '';
  total_rooms2: string = '';
  housing_type2: string = '';

  numberof_floors2: string = '';
  floor_apartmenton2: string = '';
  lift_inbuilding2: string = 'no';
  distance_to_parking2: string = '';

  moving_heavyobjects: string = 'yes';
  moving_heavyobjectsinput: string = '';
  movingfragile_valuableitems: string = 'yes';
  movingfragile_valuableitemsinput: string = '';

  additional_information: string = '';
  your_name: string = '';
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
    this.titleService.setTitle(this.lang.v.private_moving_page_title);
    this.metaService.updateTag( {name: 'keywords', content: 'Privatflytting, Flytting, Flyttebyrå, Privat Flyttehjelp, Privatflytting Stavanger'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Flyttom AS gjør din private flytteprosess enkel og stressfri. Med vårt erfarne team og bredt utvalg av tjenester, sikrer vi en sømløs overgang til ditt nye hjem i Rogaland.'});
  }
  

  changeTab(tab: number){
    this.current_form = tab;
  }


  submitform(form:any){
    if(form == 1){

      if(!this.app.record_validation(this.desiredmoving_date)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.desired_moving_date);

      } else if(this.ismovingdate_flexible == 'yes' && !this.app.record_validation(this.flexible_movingdate)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.flexible_moving_date);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 2){

      if(!this.app.record_validation(this.size_movingload)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.approximately_how_big_is_moving_load);

      } else if(!this.app.record_validation(this.nopeople_household)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.number_of_people_in_the_household);

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

      } else if(!this.app.record_validation(this.size_home)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.the_size_of_the_home);

      } else if(!this.app.record_validation(this.total_rooms)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.total_number_of_rooms);

      } else if(!this.app.record_validation(this.housing_type)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.housing_type);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 4){

      if(this.housing_type != 'Apartment' && this.housing_type != 'Leilighet' && !this.app.record_validation(this.numberof_floors)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.number_of_floors);

      } else if((this.housing_type == 'Apartment' || this.housing_type == 'Leilighet') && !this.app.record_validation(this.floor_apartmenton)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.what_floor_is_the_apartment_on);

      } else if(!this.app.record_validation(this.distance_to_parking)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.distance_to_parking);

      } else if(this.somethingmovedfrom_storagerooms == 'yes' && !this.loft_storage && !this.basement_storage && !this.outdoor_storage) {
        this.app.showAlertError(this.lang.v.must_be_checked_storage_location);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 5){

      if(!this.app.record_validation(this.new_adress)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.new_adress);

      } else if(!this.app.record_validation(this.street_no2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.street_no);

      } else if(!this.app.record_validation(this.postal_code2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.postal_code);

      } else if(!this.app.record_validation(this.size_home2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.the_size_of_the_home);

      } else if(!this.app.record_validation(this.total_rooms2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.total_number_of_rooms);

      } else if(!this.app.record_validation(this.housing_type2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.housing_type);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 6){

      if(this.housing_type2 != 'Apartment' && this.housing_type2 != 'Leilighet' && !this.app.record_validation(this.numberof_floors2)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.number_of_floors);

      } else if((this.housing_type2 == 'Apartment' || this.housing_type2 == 'Leilighet') && !this.app.record_validation(this.floor_apartmenton2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.what_floor_is_the_apartment_on);

      } else if(!this.app.record_validation(this.distance_to_parking2)) {
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.distance_to_parking);

      } else {
        this.current_form = form + 1;
      }

    } else if (form == 7){
        this.current_form = form + 1;
      
    } else if (form == 8){

      if(!this.app.record_validation(this.your_name)){
        this.app.showAlertError(this.lang.v.must_be_filled +" "+ this.lang.v.name);

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
        {title: this.lang.v.is_the_moving_date_flexible, value: this.validate_valueyes(this.ismovingdate_flexible)},
        this.ismovingdate_flexible == 'yes'? { title: this.lang.v.flexible_moving_date, value: this.flexible_movingdate} : { title: '', value: ''},
        {title: this.lang.v.do_you_want_the_moving_agency_to_pack_the_items, value: this.validate_valueyes(this.movingagency_packitems)},
        {title: this.lang.v.do_the_objects_have_to_be_stored, value: this.validate_valueyes(this.haveobjectsstoredbetween_moving_outin)},

        {title: this.lang.v.do_you_want_to_insure_the_moving_load, value: this.validate_valueyes(this.insuremoving_load)},
        this.insuremoving_load == 'yes'? { title: this.lang.v.approx_insurance_value_optional, value: this.approx_insurancevalue} : { title: '', value: ''},
        {title: this.lang.v.approximately_how_big_is_moving_load, value: this.size_movingload},
        {title: this.lang.v.number_of_people_in_the_household, value: this.nopeople_household},

        {title: this.lang.v.current_address, value: this.current_address},
        {title: this.lang.v.street_no, value: this.street_no},
        {title: this.lang.v.postal_code, value: this.postal_code},
        {title: this.lang.v.the_size_of_the_home, value: this.size_home},
        {title: this.lang.v.total_number_of_rooms, value: this.total_rooms},
        {title: this.lang.v.housing_type, value: this.housing_type},

        this.housing_type != 'Apartment' && this.housing_type != 'Leilighet'? {title: this.lang.v.number_of_floors, value: this.numberof_floors} : { title: '', value: ''},
        this.housing_type == 'Apartment' || this.housing_type != 'Leilighet'? {title: this.lang.v.what_floor_is_the_apartment_on, value: this.floor_apartmenton} : { title: '', value: ''},
        this.housing_type == 'Apartment' || this.housing_type != 'Leilighet'?  {title: this.lang.v.is_there_a_lift_in_the_building, value: this.validate_valueyes(this.lift_inbuilding)} : { title: '', value: ''},
        {title: this.lang.v.should_something_be_moved_from_the_storage_room, value: this.validate_valueyes(this.somethingmovedfrom_storagerooms)},
        this.somethingmovedfrom_storagerooms == 'yes'? {title: this.lang.v.should_something_be_moved_from_the_storage_room, value: this.getstorage_rooms(this.loft_storage, this.basement_storage, this.outdoor_storage)} : { title: '', value: ''},
        {title: this.lang.v.should_something_be_moved_from_the_garage, value: this.validate_valueyes(this.somethingmovedfrom_garage)},
        {title: this.lang.v.distance_to_parking, value: this.distance_to_parking},

        {title: this.lang.v.new_adress, value: this.new_adress},
        {title: this.lang.v.street_no, value: this.street_no2},
        {title: this.lang.v.postal_code, value: this.postal_code2},
        {title: this.lang.v.the_size_of_the_home, value: this.size_home2},
        {title: this.lang.v.total_number_of_rooms, value: this.total_rooms2},
        {title: this.lang.v.housing_type, value: this.housing_type2},

        this.housing_type2 != 'Apartment' && this.housing_type2 != 'Leilighet'? {title: this.lang.v.number_of_floors, value: this.numberof_floors2} : { title: '', value: ''},
        this.housing_type2 == 'Apartment' || this.housing_type2 != 'Leilighet'? {title: this.lang.v.what_floor_is_the_apartment_on, value: this.floor_apartmenton2} : { title: '', value: ''},
        this.housing_type2 == 'Apartment' || this.housing_type2 != 'Leilighet'?  {title: this.lang.v.is_there_a_lift_in_the_building, value: this.validate_valueyes(this.lift_inbuilding2)} : { title: '', value: ''},
        {title: this.lang.v.distance_to_parking, value: this.distance_to_parking2},

        {title: this.lang.v.are_you_moving_heavy_objects, value: this.validate_valueyes(this.moving_heavyobjects)},
        this.moving_heavyobjects == 'yes'? {title: this.lang.v.which_heavy_objects_are_to_be_moved, value: this.moving_heavyobjectsinput} : { title: '', value: ''},
        {title: this.lang.v.are_you_moving_fragile_or_valuable_items, value:  this.validate_valueyes(this.movingfragile_valuableitems)},
        this.movingfragile_valuableitems == 'yes'? {title: this.lang.v.which_fragile_or_valuable_items_should_be_moved, value: this.movingfragile_valuableitemsinput} : { title: '', value: ''},

        {title: this.lang.v.additional_information_optional, value: this.additional_information},
        {title: this.lang.v.your_name, value: this.your_name},
        {title: this.lang.v.email, value: this.email},
        {title: this.lang.v.telephone, value: this.telephone},
    );

    this.setup_formlist = [];

    for (let i = 0; i < setup_formlist.length; i++) {
      if(this.app.record_validation(setup_formlist[i]['value'])){
        this.setup_formlist.push(setup_formlist[i]);
      }
    }

  }


  validate_valueyes(value:any){
    if(value == 'yes'){
      return this.lang.v.yes;
    } else {
      return this.lang.v.no;
    }
  }


  getstorage_rooms(loft_storage: any, basement_storage: any, outdoor_storage: any){
    let value = '';
    if(loft_storage){
      value = this.lang.v.loft_storage;
    }
    if(basement_storage){
      value = value + this.lang.v.basement_storage;
    }
    if(outdoor_storage){
      value = value + this.lang.v.outdoor_storage;
    }

    return value;
  }


  async call_customemail(){
    this.loadingService.show();

    const formData = new FormData();
    formData.append('call_customemail', '1');
    formData.append('toemail', 'flytting@flyttom.no'); 
    formData.append('subject', this.lang.v.private_moving +" "+ this.lang.v.request_from +" "+ this.your_name); 

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
