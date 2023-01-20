import { Component, h, Prop, Element, getAssetPath} from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-timeline',
  styleUrls: {
    ec: './build/styles/ecl-timeline-ec.css',
    eu: './build/styles/ecl-timeline-eu.css',
  },
  shadow: false,
  scoped: false,
  assetsDirs: ['build'],
})
export class EclTimeline {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-timeline`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-timeline__item');
    this.el.querySelector('.ecl-timeline').innerHTML = '';
    this.el.querySelector('.ecl-timeline').append(...items);

    if (this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-timeline-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const timeline = new ECL.Timeline(this.el.firstElementChild);
        timeline.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <ol 
        class={this.getClass()}
        data-ecl-timeline
      >
        <slot></slot>
      </ol>
    );
  }
}