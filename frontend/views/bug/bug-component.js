import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-select/src/vaadin-select.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-notification/src/vaadin-notification.js';

class BugComponent extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-styles">

                :host {
                    display: block;
                    height: 100%;
                }

                vaadin-button[highlighted] {
                    background-color: #f00;
                }
            </style>
<vaadin-button id="btn" highlighted$="[[_equals(propy, 'red')]]">Button1</vaadin-button>
<label id="lbl"></label>
        `;
    }

    static get is() {
        return 'bug-component';
    }

    _equals(value1, value2) {
      console.log(value1 + " / "+ value2);
      return value1 === value2;
    }

    static get properties() {
        return {
            propy: {
                type: String
            }
        };
    }
}

customElements.define(BugComponent.is, BugComponent);