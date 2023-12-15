import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
interface SideNavToggle {
  screenWidth: number;
  collaspsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToglleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.collaspsed;
    this.screenWidth = data.screenWidth;
  }
}
