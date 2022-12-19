/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EclAccordion {
        "eclScript": boolean;
        "styleClass": string;
        "theme": string;
        "withUtils": boolean;
    }
    interface EclAccordionItem {
        "expanded": boolean;
        "label": string;
        "styleClass": string;
        "theme": string;
    }
    interface EclButton {
        "styleClass": string;
        "theme": string;
        "type": string;
    }
    interface EclCarousel {
        "carouselId": string;
        "counterLabel": string;
        "eclScript": boolean;
        "slidesNumber": number;
        "srNavigation": string;
        "srNext": string;
        "srPause": string;
        "srPlay": string;
        "srPrevious": string;
        "styleClass": string;
        "theme": string;
        "withUtils": boolean;
    }
    interface EclCarouselItem {
        "ariaLabel": string;
        "bannerTitle": string;
        "bannerVariant": string;
        "ctaLabel": string;
        "ctaLink": string;
        "image": string;
        "styleClass": string;
        "theme": string;
    }
    interface EclDateBlock {
        "dateTime": string;
        "day": string;
        "month": string;
        "monthFull": string;
        "styleClass": string;
        "theme": string;
        "variant": string;
        "year": string;
    }
    interface EclExpandable {
        "eclScript": boolean;
        "isExpanded": boolean;
        "labelCollapsed": string;
        "labelExpanded": string;
        "styleClass": string;
        "theme": string;
        "withUtils": boolean;
    }
    interface EclFactFigures {
        "columns": number;
        "displayIcons": boolean;
        "styleClass": string;
        "theme": string;
        "withUtils": boolean;
    }
    interface EclFactFiguresItem {
        "icon": string;
        "iconTransform": string;
        "itemTitle": string;
        "styleClass": string;
        "theme": string;
        "value": string;
    }
    interface EclHeroBanner {
        "bannerTitle": string;
        "centered": boolean;
        "ctaLabel": string;
        "ctaLink": string;
        "external": boolean;
        "fullWidth": boolean;
        "image": string;
        "styleClass": string;
        "theme": string;
        "variant": string;
    }
    interface EclIcon {
        "color": string;
        "icon": string;
        "path": string;
        "size": string;
        "sprite": string;
        "styleClass": string;
        "theme": string;
        "transform": string;
    }
    interface EclLabel {
        "styleClass": string;
        "theme": string;
        "variant": string;
    }
    interface EclLink {
        "external": boolean;
        "path": string;
        "styleClass": string;
        "theme": string;
        "titleAttr": string;
        "variant": string;
    }
    interface EclMediaContainer {
        "alt": string;
        "description": string;
        "eclScript": boolean;
        "embeddedMedia": boolean;
        "fullWidth": boolean;
        "image": string;
        "ratio": string;
        "sources": string;
        "styleClass": string;
        "theme": string;
        "tracks": string;
        "withUtils": boolean;
    }
    interface EclMessage {
        "closeLabel": string;
        "eclScript": boolean;
        "messageTitle": string;
        "styleClass": string;
        "theme": string;
        "variant": string;
        "withUtils": boolean;
    }
    interface EclPageBanner {
        "bannerTitle": string;
        "centered": boolean;
        "credit": string;
        "ctaLabel": string;
        "ctaLink": string;
        "external": boolean;
        "fullWidth": boolean;
        "image": string;
        "styleClass": string;
        "theme": string;
        "variant": string;
    }
    interface EclSocialMediaShare {
        "description": string;
        "items": string;
        "others": string;
        "styleClass": string;
        "theme": string;
        "variant": string;
    }
    interface EclTag {
        "external": boolean;
        "styleClass": string;
        "theme": string;
        "variant": string;
    }
}
declare global {
    interface HTMLEclAccordionElement extends Components.EclAccordion, HTMLStencilElement {
    }
    var HTMLEclAccordionElement: {
        prototype: HTMLEclAccordionElement;
        new (): HTMLEclAccordionElement;
    };
    interface HTMLEclAccordionItemElement extends Components.EclAccordionItem, HTMLStencilElement {
    }
    var HTMLEclAccordionItemElement: {
        prototype: HTMLEclAccordionItemElement;
        new (): HTMLEclAccordionItemElement;
    };
    interface HTMLEclButtonElement extends Components.EclButton, HTMLStencilElement {
    }
    var HTMLEclButtonElement: {
        prototype: HTMLEclButtonElement;
        new (): HTMLEclButtonElement;
    };
    interface HTMLEclCarouselElement extends Components.EclCarousel, HTMLStencilElement {
    }
    var HTMLEclCarouselElement: {
        prototype: HTMLEclCarouselElement;
        new (): HTMLEclCarouselElement;
    };
    interface HTMLEclCarouselItemElement extends Components.EclCarouselItem, HTMLStencilElement {
    }
    var HTMLEclCarouselItemElement: {
        prototype: HTMLEclCarouselItemElement;
        new (): HTMLEclCarouselItemElement;
    };
    interface HTMLEclDateBlockElement extends Components.EclDateBlock, HTMLStencilElement {
    }
    var HTMLEclDateBlockElement: {
        prototype: HTMLEclDateBlockElement;
        new (): HTMLEclDateBlockElement;
    };
    interface HTMLEclExpandableElement extends Components.EclExpandable, HTMLStencilElement {
    }
    var HTMLEclExpandableElement: {
        prototype: HTMLEclExpandableElement;
        new (): HTMLEclExpandableElement;
    };
    interface HTMLEclFactFiguresElement extends Components.EclFactFigures, HTMLStencilElement {
    }
    var HTMLEclFactFiguresElement: {
        prototype: HTMLEclFactFiguresElement;
        new (): HTMLEclFactFiguresElement;
    };
    interface HTMLEclFactFiguresItemElement extends Components.EclFactFiguresItem, HTMLStencilElement {
    }
    var HTMLEclFactFiguresItemElement: {
        prototype: HTMLEclFactFiguresItemElement;
        new (): HTMLEclFactFiguresItemElement;
    };
    interface HTMLEclHeroBannerElement extends Components.EclHeroBanner, HTMLStencilElement {
    }
    var HTMLEclHeroBannerElement: {
        prototype: HTMLEclHeroBannerElement;
        new (): HTMLEclHeroBannerElement;
    };
    interface HTMLEclIconElement extends Components.EclIcon, HTMLStencilElement {
    }
    var HTMLEclIconElement: {
        prototype: HTMLEclIconElement;
        new (): HTMLEclIconElement;
    };
    interface HTMLEclLabelElement extends Components.EclLabel, HTMLStencilElement {
    }
    var HTMLEclLabelElement: {
        prototype: HTMLEclLabelElement;
        new (): HTMLEclLabelElement;
    };
    interface HTMLEclLinkElement extends Components.EclLink, HTMLStencilElement {
    }
    var HTMLEclLinkElement: {
        prototype: HTMLEclLinkElement;
        new (): HTMLEclLinkElement;
    };
    interface HTMLEclMediaContainerElement extends Components.EclMediaContainer, HTMLStencilElement {
    }
    var HTMLEclMediaContainerElement: {
        prototype: HTMLEclMediaContainerElement;
        new (): HTMLEclMediaContainerElement;
    };
    interface HTMLEclMessageElement extends Components.EclMessage, HTMLStencilElement {
    }
    var HTMLEclMessageElement: {
        prototype: HTMLEclMessageElement;
        new (): HTMLEclMessageElement;
    };
    interface HTMLEclPageBannerElement extends Components.EclPageBanner, HTMLStencilElement {
    }
    var HTMLEclPageBannerElement: {
        prototype: HTMLEclPageBannerElement;
        new (): HTMLEclPageBannerElement;
    };
    interface HTMLEclSocialMediaShareElement extends Components.EclSocialMediaShare, HTMLStencilElement {
    }
    var HTMLEclSocialMediaShareElement: {
        prototype: HTMLEclSocialMediaShareElement;
        new (): HTMLEclSocialMediaShareElement;
    };
    interface HTMLEclTagElement extends Components.EclTag, HTMLStencilElement {
    }
    var HTMLEclTagElement: {
        prototype: HTMLEclTagElement;
        new (): HTMLEclTagElement;
    };
    interface HTMLElementTagNameMap {
        "ecl-accordion": HTMLEclAccordionElement;
        "ecl-accordion-item": HTMLEclAccordionItemElement;
        "ecl-button": HTMLEclButtonElement;
        "ecl-carousel": HTMLEclCarouselElement;
        "ecl-carousel-item": HTMLEclCarouselItemElement;
        "ecl-date-block": HTMLEclDateBlockElement;
        "ecl-expandable": HTMLEclExpandableElement;
        "ecl-fact-figures": HTMLEclFactFiguresElement;
        "ecl-fact-figures-item": HTMLEclFactFiguresItemElement;
        "ecl-hero-banner": HTMLEclHeroBannerElement;
        "ecl-icon": HTMLEclIconElement;
        "ecl-label": HTMLEclLabelElement;
        "ecl-link": HTMLEclLinkElement;
        "ecl-media-container": HTMLEclMediaContainerElement;
        "ecl-message": HTMLEclMessageElement;
        "ecl-page-banner": HTMLEclPageBannerElement;
        "ecl-social-media-share": HTMLEclSocialMediaShareElement;
        "ecl-tag": HTMLEclTagElement;
    }
}
declare namespace LocalJSX {
    interface EclAccordion {
        "eclScript"?: boolean;
        "styleClass"?: string;
        "theme"?: string;
        "withUtils"?: boolean;
    }
    interface EclAccordionItem {
        "expanded"?: boolean;
        "label"?: string;
        "styleClass"?: string;
        "theme"?: string;
    }
    interface EclButton {
        "styleClass"?: string;
        "theme"?: string;
        "type"?: string;
    }
    interface EclCarousel {
        "carouselId"?: string;
        "counterLabel"?: string;
        "eclScript"?: boolean;
        "slidesNumber"?: number;
        "srNavigation"?: string;
        "srNext"?: string;
        "srPause"?: string;
        "srPlay"?: string;
        "srPrevious"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "withUtils"?: boolean;
    }
    interface EclCarouselItem {
        "ariaLabel"?: string;
        "bannerTitle"?: string;
        "bannerVariant"?: string;
        "ctaLabel"?: string;
        "ctaLink"?: string;
        "image"?: string;
        "styleClass"?: string;
        "theme"?: string;
    }
    interface EclDateBlock {
        "dateTime"?: string;
        "day"?: string;
        "month"?: string;
        "monthFull"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "variant"?: string;
        "year"?: string;
    }
    interface EclExpandable {
        "eclScript"?: boolean;
        "isExpanded"?: boolean;
        "labelCollapsed"?: string;
        "labelExpanded"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "withUtils"?: boolean;
    }
    interface EclFactFigures {
        "columns"?: number;
        "displayIcons"?: boolean;
        "styleClass"?: string;
        "theme"?: string;
        "withUtils"?: boolean;
    }
    interface EclFactFiguresItem {
        "icon"?: string;
        "iconTransform"?: string;
        "itemTitle"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "value"?: string;
    }
    interface EclHeroBanner {
        "bannerTitle"?: string;
        "centered"?: boolean;
        "ctaLabel"?: string;
        "ctaLink"?: string;
        "external"?: boolean;
        "fullWidth"?: boolean;
        "image"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "variant"?: string;
    }
    interface EclIcon {
        "color"?: string;
        "icon"?: string;
        "path"?: string;
        "size"?: string;
        "sprite"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "transform"?: string;
    }
    interface EclLabel {
        "styleClass"?: string;
        "theme"?: string;
        "variant"?: string;
    }
    interface EclLink {
        "external"?: boolean;
        "path"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "titleAttr"?: string;
        "variant"?: string;
    }
    interface EclMediaContainer {
        "alt"?: string;
        "description"?: string;
        "eclScript"?: boolean;
        "embeddedMedia"?: boolean;
        "fullWidth"?: boolean;
        "image"?: string;
        "ratio"?: string;
        "sources"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "tracks"?: string;
        "withUtils"?: boolean;
    }
    interface EclMessage {
        "closeLabel"?: string;
        "eclScript"?: boolean;
        "messageTitle"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "variant"?: string;
        "withUtils"?: boolean;
    }
    interface EclPageBanner {
        "bannerTitle"?: string;
        "centered"?: boolean;
        "credit"?: string;
        "ctaLabel"?: string;
        "ctaLink"?: string;
        "external"?: boolean;
        "fullWidth"?: boolean;
        "image"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "variant"?: string;
    }
    interface EclSocialMediaShare {
        "description"?: string;
        "items"?: string;
        "others"?: string;
        "styleClass"?: string;
        "theme"?: string;
        "variant"?: string;
    }
    interface EclTag {
        "external"?: boolean;
        "styleClass"?: string;
        "theme"?: string;
        "variant"?: string;
    }
    interface IntrinsicElements {
        "ecl-accordion": EclAccordion;
        "ecl-accordion-item": EclAccordionItem;
        "ecl-button": EclButton;
        "ecl-carousel": EclCarousel;
        "ecl-carousel-item": EclCarouselItem;
        "ecl-date-block": EclDateBlock;
        "ecl-expandable": EclExpandable;
        "ecl-fact-figures": EclFactFigures;
        "ecl-fact-figures-item": EclFactFiguresItem;
        "ecl-hero-banner": EclHeroBanner;
        "ecl-icon": EclIcon;
        "ecl-label": EclLabel;
        "ecl-link": EclLink;
        "ecl-media-container": EclMediaContainer;
        "ecl-message": EclMessage;
        "ecl-page-banner": EclPageBanner;
        "ecl-social-media-share": EclSocialMediaShare;
        "ecl-tag": EclTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ecl-accordion": LocalJSX.EclAccordion & JSXBase.HTMLAttributes<HTMLEclAccordionElement>;
            "ecl-accordion-item": LocalJSX.EclAccordionItem & JSXBase.HTMLAttributes<HTMLEclAccordionItemElement>;
            "ecl-button": LocalJSX.EclButton & JSXBase.HTMLAttributes<HTMLEclButtonElement>;
            "ecl-carousel": LocalJSX.EclCarousel & JSXBase.HTMLAttributes<HTMLEclCarouselElement>;
            "ecl-carousel-item": LocalJSX.EclCarouselItem & JSXBase.HTMLAttributes<HTMLEclCarouselItemElement>;
            "ecl-date-block": LocalJSX.EclDateBlock & JSXBase.HTMLAttributes<HTMLEclDateBlockElement>;
            "ecl-expandable": LocalJSX.EclExpandable & JSXBase.HTMLAttributes<HTMLEclExpandableElement>;
            "ecl-fact-figures": LocalJSX.EclFactFigures & JSXBase.HTMLAttributes<HTMLEclFactFiguresElement>;
            "ecl-fact-figures-item": LocalJSX.EclFactFiguresItem & JSXBase.HTMLAttributes<HTMLEclFactFiguresItemElement>;
            "ecl-hero-banner": LocalJSX.EclHeroBanner & JSXBase.HTMLAttributes<HTMLEclHeroBannerElement>;
            "ecl-icon": LocalJSX.EclIcon & JSXBase.HTMLAttributes<HTMLEclIconElement>;
            "ecl-label": LocalJSX.EclLabel & JSXBase.HTMLAttributes<HTMLEclLabelElement>;
            "ecl-link": LocalJSX.EclLink & JSXBase.HTMLAttributes<HTMLEclLinkElement>;
            "ecl-media-container": LocalJSX.EclMediaContainer & JSXBase.HTMLAttributes<HTMLEclMediaContainerElement>;
            "ecl-message": LocalJSX.EclMessage & JSXBase.HTMLAttributes<HTMLEclMessageElement>;
            "ecl-page-banner": LocalJSX.EclPageBanner & JSXBase.HTMLAttributes<HTMLEclPageBannerElement>;
            "ecl-social-media-share": LocalJSX.EclSocialMediaShare & JSXBase.HTMLAttributes<HTMLEclSocialMediaShareElement>;
            "ecl-tag": LocalJSX.EclTag & JSXBase.HTMLAttributes<HTMLEclTagElement>;
        }
    }
}
