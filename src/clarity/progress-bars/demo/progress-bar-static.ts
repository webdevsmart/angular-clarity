import {Component, OnInit} from "@angular/core";

@Component({
    selector: "clr-progress-bar-static-demo",
    styleUrls: ["progress-bars.demo.css"],
    templateUrl: "./progress-bar-static.html"
})
export class ProgressBarStaticDemo implements OnInit {
    staticProgbarValue: number = 0;
    staticDangerValue: number = 0;
    staticSuccessValue: number = 0;
    staticLabeledProgbarValue: number = 0;

    getNewValue(): number {
        let random: number = Math.floor(Math.random() * 98) + 1;
        return parseInt(random + "", 10);
    }

    setNewValues(): void {
        this.staticProgbarValue = this.getNewValue();
        this.staticLabeledProgbarValue = this.getNewValue();
        this.staticDangerValue = this.getNewValue();
        this.staticSuccessValue = this.getNewValue();
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.setNewValues();
        }, 800);
    }
}
