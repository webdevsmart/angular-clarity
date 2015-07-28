/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, Input, ViewChild} from "@angular/core";

import {ClrCodeHighlight} from "@clr/angular";

/** @deprecated since 0.12 */
@Component({
    selector: "clr-example",
    template: `
        <pre><code [clr-code-highlight]="'language-'+language">{{code.trim()}}</code></pre>
    `,
    styles: [`
        pre {
            background: transparent;
            padding: 12px;
        }
    `]
})
export class Example implements AfterViewInit {
    @ViewChild(ClrCodeHighlight) codeHighlight: ClrCodeHighlight;

    @Input("clrCode") public code: string;
    @Input("clrLanguage") public language: string;

    ngAfterViewInit(): void {
        this.codeHighlight.redraw();
    }
}
