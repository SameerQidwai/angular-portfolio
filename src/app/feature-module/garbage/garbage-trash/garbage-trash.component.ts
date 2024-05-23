import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { LangService } from 'src/app/shared/services/language/lang.service';

@Component({
  selector: 'app-garbage-trash',
  templateUrl: './garbage-trash.component.html',
  styleUrls: ['./garbage-trash.component.css']
})
export class GarbageTrashComponent {

  constructor(public app: AppComponent,
    public lang: LangService,
  private titleService: Title,) {
    
  }
  ngOnInit() {
    this.titleService.setTitle("FlyttomApp");
}

}
