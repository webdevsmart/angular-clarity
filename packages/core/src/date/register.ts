/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@clr/core/internal';
import { CdsDate } from './date.element.js';
import '@clr/core/forms/register.js';

registerElementSafely('cds-date', CdsDate);

declare global {
  interface HTMLElementTagNameMap {
    'cds-date': CdsDate;
  }
}
