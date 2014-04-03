import {
    AfterContentInit,
    Directive,
    ElementRef,
    HostListener,
    Input
} from "@angular/core";

import { ClrResponsiveNavigationService } from "./clrResponsiveNavigationService";
import { ClrResponsiveNavCodes } from "./clrResponsiveNavCodes";

@Directive({
    selector: "[clr-nav-level]"
})
export class NavLevelDirective implements AfterContentInit {
    @Input("clr-nav-level") _level: number;

    constructor(
        private responsiveNavService: ClrResponsiveNavigationService,
        private elementRef: ElementRef
    ) {}

    ngAfterContentInit() {
        if (this.level !== ClrResponsiveNavCodes.NAV_LEVEL_1 &&
            this.level !== ClrResponsiveNavCodes.NAV_LEVEL_2) {
                console.error("Nav Level can only be 1 or 2");
                return;
        }
        this.responsiveNavService.registerNav(this.level);
        this.addNavClass(this.level);
    }

    addNavClass(level: number) {
        let navHostClassList = this.elementRef.nativeElement.classList;
        if (level === ClrResponsiveNavCodes.NAV_LEVEL_1) {
            navHostClassList.add(ClrResponsiveNavCodes.NAV_CLASS_LEVEL_1);
        } else if (level === ClrResponsiveNavCodes.NAV_LEVEL_2) {
            navHostClassList.add(ClrResponsiveNavCodes.NAV_CLASS_LEVEL_2);
        }
    }

    get level(): number {
        return this._level;
    }

    //getter to access the responsive navigation codes from the template
    get responsiveNavCodes(): ClrResponsiveNavCodes {
        return ClrResponsiveNavCodes;
    }

    open(): void {
        this.responsiveNavService.sendControlMessage(ClrResponsiveNavCodes.NAV_OPEN, this.level);
    }

    close(): void {
        this.responsiveNavService.sendControlMessage(ClrResponsiveNavCodes.NAV_CLOSE, this.level);
    }

    //TODO: Figure out whats the best way to do this. Possible methods
    //1. HostListener (current solution)
    //2. Directives on the .nav-link class. We discussed on moving away from class selectors but I forget the reason why
    @HostListener("click", ["$event.target"])
    onMouseClick(target: any) {
        let current: any = target; //Get the element in the DOM on which the mouse was clicked
        let navHost: any = this.elementRef.nativeElement; //Get the current nav native HTML element

        //Start checking if current and navHost are equal.
        //If not traverse to the parentNode and check again.
        while (current) {
            if (current === navHost) {
                return;
            } else if (current.classList.contains("nav-link")) {
                this.close();
                return;
            }
            current = current.parentNode;
        }
    }

    ngOnDestroy() {
        this.responsiveNavService.unregisterNav(this.level);
    }
}
