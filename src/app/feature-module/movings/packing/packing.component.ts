import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { LangService } from 'src/app/shared/services/language/lang.service';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.css']
})
export class PackingComponent {

  constructor(public app: AppComponent,
    public lang: LangService,
    private titleService: Title,
    private metaService: Meta,) {

  }
  ngOnInit() {
    this.titleService.setTitle(this.lang.v.packing_page_title);
    this.metaService.updateTag( {name: 'keywords', content: 'Pakking, Flytting, Pakking Stavanger, Flyttebyrå'}, ); 
    this.metaService.updateTag({name: 'description', content: 'La oss ta hånd om pakkingen! Flyttom AS tilbyr profesjonelle pakketjenester i Rogaland for en enkel og trygg flytteprosess. Spar tid og stress med våre erfarne team.'});
  }

}
