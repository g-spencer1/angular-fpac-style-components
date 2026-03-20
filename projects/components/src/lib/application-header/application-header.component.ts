import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'fpac-application-header',
  imports: [CommonModule],
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.css']
})
export class ApplicationHeaderComponent {
  /** Whether the header is in primary mode */
  @Input()
  primary = true;

  /** Logical application name */
  @Input()
  applicationName = "FPAC Components";

  /** Application acronym */
  @Input()
  applicationAcronym = "SPA";

  /** User name */
  @Input()
  userName = "FPAC User";

  @Input()
  applicationHomepage = "";

  @Input()
  fullscreen = true;

  @Output()
  applicationNameClick = new EventEmitter<Event>();

  public get classes():string[] {
    const mode = this.primary ? '' : 'fsa-bg--secondary';
    const fullscreenClass = this.fullscreen ? 'fsa-header-app--fullscreen' : '';
    return ["fsa-header-app", mode, fullscreenClass];
  }
}
