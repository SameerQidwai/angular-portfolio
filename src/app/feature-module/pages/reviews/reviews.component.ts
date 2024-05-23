import { HttpClient } from '@angular/common/http';
import { Title, Meta} from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DataService } from 'src/app/shared/services/data/data.service';
import { LangService } from 'src/app/shared/services/language/lang.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  testimonial: any;

  constructor(private data: DataService,
    public app: AppComponent,
    private http: HttpClient,
    public lang: LangService,
  private titleService: Title,) {
    this.testimonial = this.data.testimonial;
    
  }
  ngOnInit() {
    this.titleService.setTitle("FlyttomApp");
}

}
