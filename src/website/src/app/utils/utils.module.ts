/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';

import { SketchTemplateLinkDirective } from './sketch-template-link.directive';
import { HashListener } from './hash-listener.directive';
import { ScrollSpy } from './scrollspy.directive';
import { ClarityModule } from '@clr/angular';
import { CodeSnippet } from './code-snippet';
import { CommonModule } from '@angular/common';
import { CodeHighlight } from './code-highlight';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [SketchTemplateLinkDirective, HashListener, ScrollSpy, CodeSnippet, CodeHighlight],
  exports: [SketchTemplateLinkDirective, HashListener, ScrollSpy, CodeSnippet, CodeHighlight],
})
export class UtilsModule {}
