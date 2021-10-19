import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-select/src/vaadin-select.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import './bug-component.js';

class BugView extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-styles">

                :host {
                    display: block;
                    height: 100%;
                }
            </style>
            <vaadin-vertical-layout style="width: 100%; height: 100%; padding: 20px">
             <bug-component id="bugComponent" propy="red"></bug-component>
            </vaadin-vertical-layout>

        `;
    }

    static get is() {
        return 'bug-view';
    }

    static get properties() {
        return {};
    }
}

customElements.define(BugView.is, BugView);
