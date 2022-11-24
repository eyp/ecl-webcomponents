import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'ecl-icon',
  styleUrls: {
    ec: './build/styles/ecl-icon-ec.css',
    eu: './build/styles/ecl-icon-eu.css',
  },
  shadow: false,
  assetsDirs: ['build'],
})

export class EclIcon {
  @Prop() styleClass: string;
  @Prop() icon: string;
  @Prop() size: string = 'xs';
  @Prop() color: string;
  @Prop() path: string;
  @Prop() transform: string;
  @Prop() theme: string = 'ec';

  componentWillLoad() {
    this.path = getAssetPath(`./build/images/${this.theme}/icons.svg`);
  }

  getClass(): string {
    const styleClasses = [
      `ecl-icon`,
      `ecl-icon--${this.size}`,
      this.styleClass,
    ];
    if (this.color) {
      styleClasses.push(
        `ecl-icon--${this.color}`
      );
    }
    if (this.transform) {
      styleClasses.push(
        `ecl-icon--${this.transform}`
      );
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <svg class={this.getClass()}>
        <use xlinkHref={`${this.path}#${this.icon}`}></use>
      </svg>
    )
  }
}