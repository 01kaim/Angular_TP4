import { Component, Input } from '@angular/core';
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
  screenWidth1 = 0;
  onToglleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.collaspsed;
    this.screenWidth1 = data.screenWidth;
  }
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed ';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
