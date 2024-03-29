import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() isMobile: boolean = false;
  @Output() closeSideNavEvent: EventEmitter<void> = new EventEmitter<void>();
  demandaAtual = 1386;

  closeSideNavIfOnMobile(): void {
    if (this.isMobile) {
      this.closeSideNavEvent.emit();
    }
  }

  downloadData(): void {
    alert('Em desenvolvimento.');
  }
}
