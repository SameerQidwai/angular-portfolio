import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { LangService } from 'src/app/shared/services/language/lang.service';

@Component({
  selector: 'app-roadside-assistant',
  templateUrl: './roadside-assistant.component.html',
  styleUrls: ['./roadside-assistant.component.css']
})
export class RoadsideAssistantComponent {

  constructor(public lang: LangService ,
    private titleService: Title,
    private metaService: Meta,
  ){

  }
  
  ngOnInit() {
    this.titleService.setTitle(this.lang.v.car_rental + " Stavanger" + " | " + this.lang.v.rent + " " + this.lang.v.moving_car + " Stavanger - Flyttom.no");
    this.metaService.updateTag( {name: 'keywords', content: 'Bilutleie, Leie bil, Leie flyttebil, Bilutleie Stavanger'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Flyttom AS tilbyr bilutleie i Stavanger for både private og bedrifter. Du kan også leie varebil, leie flyttebil. Best på Leiebil i Stavanger'});
  }

}
