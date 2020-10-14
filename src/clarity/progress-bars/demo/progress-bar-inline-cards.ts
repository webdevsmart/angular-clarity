import {Component, OnInit} from "@angular/core";

@Component({
    selector: "clr-progress-bar-inline-cards-demo",
    styleUrls: ["progress-bars.demo.css"],
    templateUrl: "./progress-bar-inline-cards.html"
})
export class ProgressBarInlineCardsDemo implements OnInit {
    value1: number = 0;
    value2: number = 0;
    value3: number = 0;

    getNewValue(): number {
        let random: number = Math.floor(Math.random() * 98) + 1;
        return parseInt(random + "", 10);
    }

    setNewValues(): void {
        this.value1 = this.getNewValue();
        this.value2 = this.getNewValue();
        this.value3 = this.getNewValue();
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.setNewValues();
        }, 500);
    }
}
