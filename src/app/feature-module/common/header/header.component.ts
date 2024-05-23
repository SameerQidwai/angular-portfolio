import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { LangService } from 'src/app/shared/services/language/lang.service';
import { header } from 'src/app/shared/services/model/model';
import { SidebarService } from 'src/app/shared/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  base = '';
  page = '';
  last = '';
  header: header[] = [];
  public routes = routes;

  url: string = '';
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar : SidebarService,
    public app: AppComponent,
    public lang: LangService,
    private router: Router) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;

    console.log(this.router.url);
  }

  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }

  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }


  async selectlanguage(_lang:any) {
    this.app.current_lang = _lang;
    await localStorage.setItem('current_lang', _lang);
    await this.lang.load();
    await this.app.setupStorageVariables();
    await window.location.reload();
  }


}
