/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="row">
    <div class="col-xs-12 col-md-12 col-lg-6 col-xl-4">
        <table class="table">
            <thead>
                <tr>
                    <th class="left">Language</th>
                    <th>Foo</th>
                    <th>Bar</th>
                    <th>Baz</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="left">Pig Latin</td>
                    <td>Oofay</td>
                    <td>Arbay</td>
                    <td>Azbay</td>
                </tr>
                <tr>
                    <td class="left">Bizarro</td>
                    <td>Bar</td>
                    <td>Foo</td>
                    <td>Bang</td>
                </tr>
                <tr>
                    <td class="left">Hodor</td>
                    <td>Hodor</td>
                    <td>Hodor</td>
                    <td>Hodor</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-6 col-xl-4">
        <table class="table">
            <thead>
                <tr>
                    <th class="left">Color</th>
                    <th>R</th>
                    <th>G</th>
                    <th>B</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="left">Black</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="left">New Black</td>
                    <td>255</td>
                    <td>165</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td class="left">Pantone 292</td>
                    <td>98</td>
                    <td>168</td>
                    <td>229</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-6 col-xl-4">
        <table class="table">
            <thead>
                <tr>
                    <th class="left">Name</th>
                    <th class="left">Weakness</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="left">Frankenstein</td>
                    <td class="left">Fire</td>
                </tr>
                <tr>
                    <td class="left">Dracula</td>
                    <td class="left">Garlic</td>
                </tr>
                <tr>
                    <td class="left">Wolfman</td>
                    <td class="left">Squirrels</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;

@Component({
  selector: 'clr-tables-width-demo',
  templateUrl: './tables-width.html',
})
export class TablesWidthDemo {
  example = EXAMPLE;
}
