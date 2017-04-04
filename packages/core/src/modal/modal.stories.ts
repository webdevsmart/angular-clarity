/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/modal/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@clr/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Components/Modal/Stories',
  component: 'cds-modal',
  argTypes: getElementStorybookArgTypes('cds-modal', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A548',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-demo popover>
      <cds-modal __demo-mode ...="${spreadProps(getElementStorybookArgs(args))}">
        <cds-modal-header>
          <div cds-layout="vertical gap:lg p-y:sm"><p cds-text="body">This is a modal.</p></div>
        </cds-modal-header>
        <cds-modal-content>
          <div cds-layout="vertical gap:lg p-y:sm"><p cds-text="body">This is a modal.</p></div>
        </cds-modal-content>
        <cds-modal-actions>
          <div cds-layout="horizontal align:right"><cds-button>Ok</cds-button></div>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const defaultSize = () => {
  return html`
    <cds-demo popover>
      <cds-modal __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <div cds-layout="vertical gap:lg p-y:sm">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </cds-modal-content>
        <cds-modal-actions>
          <div cds-layout="horizontal gap:md align:right">
            <cds-button action="outline">Cancel</cds-button>
            <cds-button>Ok</cds-button>
          </div>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const small = () => {
  return html`
    <cds-demo popover>
      <cds-modal size="sm" __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <div cds-layout="vertical gap:lg p-y:sm">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </cds-modal-content>
        <cds-modal-actions>
          <div cds-layout="horizontal gap:md align:right">
            <cds-button action="outline">Cancel</cds-button>
            <cds-button>Ok</cds-button>
          </div>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const large = () => {
  return html`
    <cds-demo popover>
      <cds-modal size="lg" __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <div cds-layout="vertical gap:lg p-y:sm">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </cds-modal-content>
        <cds-modal-actions>
          <div cds-layout="horizontal gap:md align:right">
            <cds-button action="outline">Cancel</cds-button>
            <cds-button>Ok</cds-button>
          </div>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const extraLarge = () => {
  return html`
    <cds-demo popover>
      <cds-modal size="xl" __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <div cds-layout="vertical gap:lg p-y:sm">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </cds-modal-content>
        <cds-modal-actions>
          <div cds-layout="horizontal gap:md align:right">
            <cds-button action="outline">Cancel</cds-button>
            <cds-button>Ok</cds-button>
          </div>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const focusTrap = () => {
  return html`
    <cds-modal>
      <cds-modal-header>
        <h3 cds-text="title">My Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <div cds-layout="vertical gap:lg p-y:sm">
          <p cds-text="body">Lorem Ipsum</p>
        </div>
      </cds-modal-content>
      <cds-modal-actions>
        <div cds-layout="horizontal gap:md align:right">
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </div>
      </cds-modal-actions>
    </cds-modal>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .modal-branding {
        --backdrop-color: #004b6b;
        --background-color: #e3f5fc;
        --border-color: #00567a;
        --close-icon-color: #00567a;
        --close-icon-color-hover: #004b6b;
        --content-box-shadow-color: rgba(0, 54, 77, 0.3);
      }
    </style>
    <cds-demo popover>
      <cds-modal class="modal-branding" __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <div cds-layout="vertical gap:lg p-y:sm">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </cds-modal-content>
        <cds-modal-actions>
          <div cds-layout="horizontal gap:md align:right">
            <cds-button action="outline">Cancel</cds-button>
            <cds-button>Ok</cds-button>
          </div>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};
