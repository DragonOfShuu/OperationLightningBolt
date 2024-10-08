import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shuu-lightning-svg',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"  xml:space="preserve">
      <style type="text/css">
        .st0{fill:#021717;}
      </style>
      <g>
        <path class="st0" d="M369.533,177.027h-67.716L367.744,0h-218.25l-37.056,288.551h73.68l-32.431,208.975
          c-0.899,5.808,2.342,11.453,7.805,13.606c5.472,2.144,11.686,0.216,14.98-4.642l223.09-329.462H369.533z M198.384,417.302
          l24.92-160.612h-74.649l28.879-224.828h144.344l-65.926,177.027h83.56L198.384,417.302z"/>
      </g>
    </svg>
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightningSvgComponent { }
