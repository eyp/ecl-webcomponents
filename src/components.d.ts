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
        "ecl-date-block": HTMLEclDateBlockElement;
        "ecl-expandable": HTMLEclExpandableElement;
        "ecl-icon": HTMLEclIconElement;
        "ecl-label": HTMLEclLabelElement;
        "ecl-link": HTMLEclLinkElement;
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
        "ecl-date-block": EclDateBlock;
        "ecl-expandable": EclExpandable;
        "ecl-icon": EclIcon;
        "ecl-label": EclLabel;
        "ecl-link": EclLink;
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
            "ecl-date-block": LocalJSX.EclDateBlock & JSXBase.HTMLAttributes<HTMLEclDateBlockElement>;
            "ecl-expandable": LocalJSX.EclExpandable & JSXBase.HTMLAttributes<HTMLEclExpandableElement>;
            "ecl-icon": LocalJSX.EclIcon & JSXBase.HTMLAttributes<HTMLEclIconElement>;
            "ecl-label": LocalJSX.EclLabel & JSXBase.HTMLAttributes<HTMLEclLabelElement>;
            "ecl-link": LocalJSX.EclLink & JSXBase.HTMLAttributes<HTMLEclLinkElement>;
            "ecl-social-media-share": LocalJSX.EclSocialMediaShare & JSXBase.HTMLAttributes<HTMLEclSocialMediaShareElement>;
            "ecl-tag": LocalJSX.EclTag & JSXBase.HTMLAttributes<HTMLEclTagElement>;
        }
    }
}
