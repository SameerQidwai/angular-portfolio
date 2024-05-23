import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { carousel } from 'src/app/shared/services/model/model';
import { LangService } from 'src/app/shared/services/language/lang.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  public carousel: Array<carousel> = [];
  public routes = routes;

  constructor(public data: DataService,
    public lang: LangService,
  private titleService: Title,) {
    this.carousel = this.data.carousel;
  }
  ngOnInit() {
    this.titleService.setTitle("FlyttomApp");
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
}
