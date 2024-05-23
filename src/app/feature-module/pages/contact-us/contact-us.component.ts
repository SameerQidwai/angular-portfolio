import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/shared/routes/routes';
import { LangService } from 'src/app/shared/services/language/lang.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  public routes = routes;

  constructor(public app: AppComponent,
    public lang: LangService,
  private titleService: Title,) {
    
  }
  ngOnInit() {
    this.titleService.setTitle("FlyttomApp");
}

}
