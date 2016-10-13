/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer';
import { IconShapeTuple } from '../interfaces/icon.interfaces';

const icon = {
  outline:
    '<path d="M29.1,27.1C28,27,26.9,27.4,26,28.2c-1.1,1.1-2.9,1.1-4.1,0c-1-0.7-2.1-1.1-3.3-1.1c-1.2-0.1-2.4,0.3-3.3,1.1C14.7,28.7,14,29,13.2,29s-1.5-0.3-2.1-0.8c-1-0.8-2.2-1.2-3.4-1.2s-2.4,0.4-3.4,1.2C3.7,28.7,2.8,29,2,29v2c1.3,0.1,2.6-0.3,3.6-1.2C6.2,29.3,7.1,29,7.9,29c0.7,0,1.5,0.3,2.1,0.8c1.8,1.6,4.6,1.6,6.5,0c0.6-0.5,1.3-0.8,2.1-0.8c0.7,0,1.4,0.3,2,0.8c1.9,1.6,4.6,1.6,6.5,0c0.5-0.5,1.3-0.8,2-0.8c0.7,0,1.4,0.3,1.9,0.8c0.9,0.7,1.9,1.1,3,1.2v-2c-1,0-1.2-0.4-1.7-0.8C31.4,27.5,30.3,27.1,29.1,27.1z"/><path d="M6,23c0-0.6,0.5-1,1.1-1H32l-3.5,3.1h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2c0.7-0.8,0.6-2.1-0.2-2.8C33,20.2,32.6,20,32.1,20h-25c-1.7,0-3,1.3-3,3v3.2c0.5-0.5,1.2-0.8,1.9-1.1V23z"/><path d="M8.9,19H15v-7.8c0-0.6-0.3-1.2-0.8-1.6C13.3,8.9,12,9.1,11.4,10l-4.1,5.9c-0.4,0.6-0.4,1.4-0.1,2.1C7.5,18.6,8.2,19,8.9,19z M13.1,11.2L13,17H8.9L13.1,11.2z"/><path d="M26,18c0.4-0.6,0.4-1.4,0-2L19.7,5.6c-0.4-0.6-1-1-1.7-1c-1.1,0-2,0.9-2,2V19h8.3C25,19,25.7,18.6,26,18z M17.9,6.6l6.4,10.5h-6.4V6.6z"/>',
  solid:
    '<path d="M34,31c-1.1-0.1-2.1-0.5-3-1.2c-0.5-0.5-1.2-0.8-2-0.8c-0.7,0-1.5,0.3-2,0.8c-0.9,0.8-2,1.1-3.1,1.1c-1.2,0-2.4-0.4-3.3-1.1c-1.2-1.1-3-1.1-4.1,0c-0.9,0.8-2.1,1.2-3.4,1.2c-1.2,0-2.3-0.4-3.2-1.2c-0.6-0.5-1.3-0.8-2-0.8c-0.8,0-1.7,0.3-2.3,0.8c-1,0.8-2.3,1.2-3.5,1.1V29c0.8,0,1.7-0.3,2.3-0.9c1-0.8,2.2-1.2,3.4-1.1c1.2,0,2.4,0.4,3.3,1.2c1.2,1.1,3,1.1,4.2,0c1.9-1.6,4.7-1.6,6.5,0c1.2,1.1,3,1.1,4.1,0c0.9-0.8,2.1-1.2,3.3-1.2c1.1,0,2.2,0.4,3,1.2C32.8,28.7,33,29,34,29L34,31z"/><path d="M4.1,26.2c0.6-0.5,1.2-0.8,1.9-1V23c0-0.6,0.4-1.1,1-1.1h25L28.4,25h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2c0.7-0.9,0.5-2.1-0.4-2.8C32.9,20.1,32.4,20,32,20H7c-1.7,0-3,1.3-3,3L4.1,26.2L4.1,26.2z"/><path d="M14.9,18.9H8.9c-1.1,0-2-0.9-2-2c0-0.4,0.1-0.8,0.4-1.2l4.1-5.8c0.6-0.9,1.9-1.1,2.8-0.5c0.5,0.4,0.8,1,0.8,1.6V18.9z"/><path d="M24.3,18.9H16V6.4c0-1.1,0.9-2,2-2c0.7,0,1.3,0.4,1.7,1L26,15.8c0.6,1,0.2,2.2-0.7,2.7C25,18.7,24.6,18.8,24.3,18.9L24.3,18.9z"/>',
};

export const boatIconName = 'boat';
export const boatIcon: IconShapeTuple = [boatIconName, renderIcon(icon)];
