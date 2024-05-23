import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { routes } from 'src/app/shared/routes/routes';
import { LangService } from 'src/app/shared/services/language/lang.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  public routes = routes;

  constructor(public lang: LangService,
    private titleService: Title,
  ) {

  }
  ngOnInit() {
    this.titleService.setTitle("FlyttomApp");
  }

}
