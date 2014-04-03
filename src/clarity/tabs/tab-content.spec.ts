import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, QueryList, ViewChildren} from "@angular/core";
import {ClarityModule} from "../clarity.module";
import {TabContent} from "./tab-content";

@Component({
    template: `
        <clr-tab-content [clrTabContentActive]="true">Content1</clr-tab-content>
        <clr-tab-content>Content2</clr-tab-content>
   `
})
class TestComponent {
    @ViewChildren(TabContent) tabContentChildren: QueryList<TabContent>;
}

describe("TabContent", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule],
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    it("initializes the correct property values", () => {
        let tabContents: TabContent[] = fixture.componentInstance.tabContentChildren.toArray();

        expect(tabContents[0].active).toEqual(true);
        expect(tabContents[1].active).toEqual(false);
    });

});
