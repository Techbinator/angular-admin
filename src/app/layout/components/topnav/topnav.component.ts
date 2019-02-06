import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from 'src/app/shared/services/auth.type';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  public pushRightClass: string;
  name: String = '';
  constructor(public router: Router, private translate: TranslateService) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });

    const lcData: string = localStorage.getItem('seaTool');
    if (lcData) {
      const lcParsedData: LocalStorage = JSON.parse(lcData);
      this.name = lcParsedData.username;
    }
  }

  ngOnInit() {
    this.pushRightClass = 'push-right';
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    localStorage.removeItem('seaTool');
    this.router.navigate(['/login']);
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
