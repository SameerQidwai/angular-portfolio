import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { list } from 'src/app/shared/services/model/model';

@Component({
  selector: 'app-movings',
  templateUrl: './movings.component.html',
  styleUrls: ['./movings.component.css']
})
export class MovingsComponent {

  public routes = routes;
  public companyMovingAssignment: list[] = [];
  public packingTips: list[] = [];

  constructor(
    public data: DataService,
    public app: AppComponent,
    public lang: LangService,
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient
  ){
    this.companyMovingAssignment = this.data.companyMovingAssignment;
    this.packingTips = this.data.packingTips;
    
  }

  ngOnInit() {
    this.titleService.setTitle(this.lang.v.moving_agency_stavanger + " | " + this.lang.v.moving_assistance + " Stavanger - Flyttom.no");
    this.metaService.updateTag( {name: 'keywords', content: 'Flyttebyrå, Flyttebyrå Stavanger, Flyttehjelp, Flytting'}, ); 
    this.metaService.updateTag({name: 'description', content: 'Vi er et flyttebyrå i Stavanger som tilbyr alt inne flyttehjelp og pinaoflytting i Stavanger. Vi har 20 års overing som flyttebyrå i Stavanger'});
  }
}
