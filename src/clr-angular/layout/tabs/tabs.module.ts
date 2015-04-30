/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";

import {ClrIconModule} from "../../icon/icon.module";
import {ClrCommonPopoverModule} from "../../popover/common/popover.module";
import {ClrConditionalModule} from "../../utils/conditional/conditional.module";
import {ClrTemplateRefModule} from "../../utils/template-ref/template-ref.module";

import {ActiveOompaLoompa} from "./chocolate/active-oompa-loompa";
import {TabsWillyWonka} from "./chocolate/tabs-willy-wonka";
import {ClrTab} from "./tab";
import {ClrTabContent} from "./tab-content";
import {ClrTabLink} from "./tab-link.directive";
import {ClrTabOverflowContent} from "./tab-overflow-content";
import {ClrTabs} from "./tabs";

export const CLR_TABS_DIRECTIVES: Type<any>[] =
    [ClrTabContent, ClrTab, ClrTabs, ClrTabOverflowContent, ClrTabLink, TabsWillyWonka, ActiveOompaLoompa];

@NgModule({
    imports: [CommonModule, ClrCommonPopoverModule, ClrConditionalModule, ClrIconModule, ClrTemplateRefModule],
    declarations: [CLR_TABS_DIRECTIVES],
    exports: [CLR_TABS_DIRECTIVES, ClrConditionalModule]
})
export class ClrTabsModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export class Tab extends ClrTab {}
/** @deprecated since 0.11 */
export class Tabs extends ClrTabs {}
/** @deprecated since 0.11 */
export class TabContent extends ClrTabContent {}
/** @deprecated since 0.11 */
export class TabOverflowContent extends ClrTabOverflowContent {}
/** @deprecated since 0.11 */
export class TabLinkDirective extends ClrTabLink {}
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const TABS_DIRECTIVES = CLR_TABS_DIRECTIVES;
