import {
    Component,
    OnInit,
    AfterViewChecked,
    Inject,
    trigger,
    transition,
    style,
    animate,
    state
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    ApplicationRef,
    ChangeDetectorRef,
    NgZone
} from '@angular/core';
import {
    Pipe,
    PipeTransform
} from '@angular/core';
import {
    MdDialog,
    MD_DIALOG_DATA,
    MdDialogRef
} from '@angular/material';
import {
    FieldsService
} from './fields.service';
import {
    ScrollToService,
    ScrollToConfig
} from '@nicky-lenaers/ngx-scroll-to';
import {
    MdSnackBar
} from '@angular/material';
import * as parse from 'csv-parse/lib';
import {
    MdCheckboxModule
} from '@angular/material';

//var parse = require('csv-parse/lib/sync');

@Pipe({
    name: 'values'
})
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let keyArr: any[] = Object.keys(value),
            dataArr = [],
            keyName = args[0];

        keyArr.forEach((key: any) => {
            value[key][keyName] = key;
            dataArr.push(value[key])
        });

        return dataArr;
    }
}

interface RiskScores {
    predmort: number;
    predrenf: number;
    predstro: number;
    predvent: number;
    preddeep: number;
    predreop: number;
    predmm: number;
    pred6d: number;
    pred14d: number;
}

interface RiskCoeffs {
    coeff_predmort: string;
    coeff_predrenf: string;
    coeff_predstro: string;
    coeff_predvent: string;
    coeff_preddeep: string;
    coeff_predreop: string;
    coeff_predmm: string;
    coeff_pred6d: string;
    coeff_pred14d: string;
}

@Component({
    selector: 'app-fields',
    animations: [
        trigger(
            'reveal', [
            transition(
                ':enter', [
                style({
                    'height': 0
                }),
                animate('650ms ease-in-out', style({
                    height: '*'
                }))
            ]
            ),
            transition(
                ':leave', [
                style({
                    'height': '*'
                }),
                animate('650ms ease-in-out', style({
                    height: 0
                }))
            ]
            )
        ]
        )
    ],
    templateUrl: './fields.component.html',
    styleUrls: ['./fields.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FieldsComponent implements OnInit, AfterViewChecked {
    fields: object;
    displayNames: object;
    scores1: object[];
    coeffs: object[];
    excluded: object;
    accepted: boolean;
    detailsInfo: string[];
    withVariables: boolean;
    date: string;

    constructor(private http: HttpClient, private fieldsService: FieldsService, public definition: MdDialog, public clearD: MdDialog, public printD: MdDialog, public navD: MdDialog, private ref: ApplicationRef, private chRef: ChangeDetectorRef, private zone: NgZone, private scrollToService: ScrollToService, public snackBar: MdSnackBar) { }

    changeDetails(fieldName: string, fieldDetails: string) {
        document.getElementById("detailsName").innerHTML = fieldName;
        document.getElementById("detailsText").innerHTML = fieldDetails;
    }


    getFields(): void {
        this.fields = this.fieldsService.getFields();
    }

    getDisplayNames(): void {
        this.displayNames = this.fieldsService.getDisplayNames();
    }

    getExcluded(): void {
        this.excluded = this.fieldsService.getExcluded();
    }

    getStatus(): void {
        this.accepted = this.fieldsService.getStatus();
    }

    getProcedures(): void {
        this.fields['procid'].harvest = this.fieldsService.getProcedures();
    }

    getScores(): void {
        this.scores1 = this.fieldsService.getScores();
    }

    getCoeffs(): void {
        this.coeffs = this.fieldsService.getCoeffs();
    }

    getWithVariables(): void {
        this.withVariables = this.fieldsService.getWithVariables();
    }

    getDate(): void {
        this.date = new Date().toDateString();
    }
    setStatus(accepted: boolean): void {
        this.fieldsService.setStatus(accepted);
        this.getStatus();
    }

    setProc(code: string): void {
        let procedures: string[] = ['opcab', 'opvalve', 'vsav', 'vsavpr', 'vsmv', 'vsmvpr'];

        procedures.map(p => this.fields[p].selected = null);

        let id: number = parseInt(code, 10);

        switch (id) {
            case 1:
                {
                    this.fields["opcab"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.createRequest();
                    break;
                }

            case 2:
                {
                    this.fields["opvalve"].selected = {
                        "code": "1",
                        "text": "Yes"
                    };
                    this.fields["vsav"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsavpr"].selected = {
                        "code": "1",
                        "text": "Replacement"
                    };
                    this.fields["vstv"].selected = {
                        "code": "2",
                        "text": "No"
                    };
                    this.createRequest();
                    break;
                }

            case 3:
                {
                    this.fields["opvalve"].selected = {
                        "code": "1",
                        "text": "Yes"
                    };
                    this.fields["vsmv"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsmvpr"].selected = {
                        "code": "2",
                        "text": "Replacement"
                    };
                    this.createRequest();
                    break;
                }

            case 4:
                {
                    this.fields["opcab"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["opvalve"].selected = {
                        "code": "1",
                        "text": "Yes"
                    };
                    this.fields["vsav"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsavpr"].selected = {
                        "code": "1",
                        "text": "Replacement"
                    };
                    this.fields["vstv"].selected = {
                        "code": "2",
                        "text": "No"
                    };
                    this.createRequest();
                    break;
                }

            case 5:
                {
                    this.fields["opcab"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["opvalve"].selected = {
                        "code": "1",
                        "text": "Yes"
                    };
                    this.fields["vsmv"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsmvpr"].selected = {
                        "code": "2",
                        "text": "Replacement"
                    };
                    this.createRequest();
                    break;
                }

            case 6:
                {
                    this.fields["opvalve"].selected = {
                        "code": "1",
                        "text": "Yes"
                    };
                    this.fields["vsav"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsavpr"].selected = {
                        "code": "1",
                        "text": "Replacement"
                    };
                    this.fields["vsmv"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsmvpr"].selected = {
                        "code": "2",
                        "text": "Replacement"
                    };
                    this.fields["vstv"].selected = {
                        "code": "2",
                        "text": "No"
                    };
                    this.createRequest();
                    break;
                }

            case 7:
                {
                    this.fields["opvalve"].selected = {
                        "code": "1",
                        "text": "Yes"
                    };
                    this.fields["vsmv"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsmvpr"].selected = {
                        "code": "1",
                        "text": "Repair"
                    };
                    this.createRequest();
                    break;
                }

            case 8:
                {
                    this.fields["opcab"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["opvalve"].selected = {
                        "code": "1",
                        "text": "Yes"
                    };
                    this.fields["vsmv"].selected = {
                        "code": "3",
                        "text": "Yes, planned"
                    };
                    this.fields["vsmvpr"].selected = {
                        "code": "1",
                        "text": "Repair"
                    };
                    this.createRequest();
                    break;
                }
        }
    }

    checkCode(code: string, selected: string): boolean {
        if (code[0] === '<') {
            return (code[2] !== selected);
        } else {
            return (code.split('|').indexOf(selected) > -1);
        }
    }

    show(parent: any, field: any): boolean {
        if (this.excluded[field.k] === undefined) {
            if (parent.shortname !== null) {
                if (this.fields[parent.shortname].selected !== null) {

                    // I added the ```|| (this.fields[parent.shortname].selected === true)```
                    // It allows the if statement to return true when a checkbox is checked
                    if (this.checkCode(parent.code, this.fields[parent.shortname].selected.code) || (this.fields[parent.shortname].selected === true)) {
                        return true;
                    } else {
                        this.fields[field.k].selected = null;
                        return false;
                    }
                } else {
                    this.fields[field.k].selected = null;
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    calculateBMI(height: number, weight: number): number {
        if (weight != null && height != null && weight > 0 && height > 0) {
            return weight / ((height / 100) ** 2);
        }

        return null;
    }

    createRequest(): void {

        /* This is required to make sure
         * that the UI is up to date.
         */
        this.ref.tick();

        let req: {
            [k: string]: any
        } = {};
        for (let f in this.fields) {
            if (this.excluded[f] === undefined) {
                if (this.fields[f].selected !== null) {
                    // Dirty hack to prevent calculation on invalid integer input
                    if (this.fields[f].format === "Integer" && !Number.isInteger(this.fields[f].selected)) {
                        return;
                    }
                    if (this.fields[f].format === "Text (categorical values specified by STS)") {
                        req[f] = this.fields[f].selected.text;

                        // this gets true or false values from the checkbox
                        // it's then converted to a "Yes" or a "No"
                        if (this.fields[f].selected == true) {
                            req[f] = "Yes"
                        }
                        if (this.fields[f].selected == false) {
                            req[f] = "No"
                        }

                    } else {
                        if (this.fields[f].k === 'surgdt') {
                            let d = new Date(this.fields[f].selected);
                            req[f] = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
                        } else {
                            req[f] = this.fields[f].selected;
                        }
                    }
                } else {
                    req[f] = '';
                }
            }
        }

        const bmi = this.calculateBMI(req['heightcm'], req['weightkg']);
        req['calculatedbmi'] = bmi == null ? '' : bmi;
        req['procid'] = (this.fields['procid'].selected !== null) ? this.fields['procid'].selected.code : '';

        /* Again, this is required to make sure
         * that the UI is up to date. Or more
         * precisely: the most recent calculation
         * results are reflected on the UI and not
         * lagging behind
         */
        this.http.post<RiskScores>('v1/calculate/stsall', req).subscribe(data => {
            this.zone.run(() => {
                this.scores1[0]["value"] = (data.predmort === null) ? null : (data.predmort * 100).toFixed(3);
                this.scores1[1]["value"] = (data.predrenf === null) ? null : (data.predrenf * 100).toFixed(3);
                this.scores1[2]["value"] = (data.predstro === null) ? null : (data.predstro * 100).toFixed(3);
                this.scores1[3]["value"] = (data.predvent === null) ? null : (data.predvent * 100).toFixed(3);
                this.scores1[4]["value"] = (data.preddeep === null) ? null : (data.preddeep * 100).toFixed(3);
                this.scores1[5]["value"] = (data.predreop === null) ? null : (data.predreop * 100).toFixed(3);
                this.scores1[6]["value"] = (data.predmm === null) ? null : (data.predmm * 100).toFixed(3);
                this.scores1[7]["value"] = (data.pred6d === null) ? null : (data.pred6d * 100).toFixed(3);
                this.scores1[8]["value"] = (data.pred14d === null) ? null : (data.pred14d * 100).toFixed(3);
                this.chRef.detectChanges();
            });
        });

        let parseCoeffs = coeffs => {
            let res = [];
            coeffs.split('|')
                .map(x => {
                    let arr = x.split(',');
                    res.push({
                        name: arr[0],
                        value: arr[1],
                        coefficient: arr[2]
                    });
                });

            return res;
        };

        this.http.post<RiskCoeffs>('v1/calculate/coeffs', req).subscribe(data => {
            this.zone.run(() => {
                this.coeffs[0]["value"] = (data.coeff_predmort === null) ? null : parseCoeffs(data.coeff_predmort);
                this.coeffs[1]["value"] = (data.coeff_predrenf === null) ? null : parseCoeffs(data.coeff_predrenf);
                this.coeffs[2]["value"] = (data.coeff_predstro === null) ? null : parseCoeffs(data.coeff_predstro);
                this.coeffs[3]["value"] = (data.coeff_predvent === null) ? null : parseCoeffs(data.coeff_predvent);
                this.coeffs[4]["value"] = (data.coeff_preddeep === null) ? null : parseCoeffs(data.coeff_preddeep);
                this.coeffs[5]["value"] = (data.coeff_predreop === null) ? null : parseCoeffs(data.coeff_predreop);
                this.coeffs[6]["value"] = (data.coeff_predmm === null) ? null : parseCoeffs(data.coeff_predmm);
                this.coeffs[7]["value"] = (data.coeff_pred6d === null) ? null : parseCoeffs(data.coeff_pred6d);
                this.coeffs[8]["value"] = (data.coeff_pred14d === null) ? null : parseCoeffs(data.coeff_pred14d);
                this.chRef.detectChanges();
            });
        });

    }

    /* A disgusting hack to make the tabbing
     * controls work with the ngx-scroll-to library.
     * The function dispatches a double click
     * event to an element with the given id.
     * This is required, since there is no
     * support for keyboard events in the
     * framework.
     */
    triggerClick(id: string) {
        let el = document.getElementById(id);
        let clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('dblclick', true, true);
        el.dispatchEvent(clickEvent);
    }

    /* This function is bound to the double click
     * event of each risk parameter field input/option, which gets
     * triggerd upon submitting a value via the enter key.
     * After that, this function is called and makes the UI
     * scroll to the next field.
     */
    goTo(ev, id: string) {
        if (parseInt(id) !== 98) {

            //this.scrollToService.scrollTo(ev, {
            //  target: id
            //});

            // Get hold of the current scope
            let _this = this;

            // Wait until hidden elements are rendered.
            // There must be a more elegant way to do this.
            setTimeout(function () {
                let el = document.getElementById(id);

                if (el.getElementsByTagName('md-button-toggle-group')[0] !== undefined) {
                    el = el.getElementsByTagName('md-button-toggle')[0] as HTMLElement;
                } else if (el.getElementsByTagName('input')[0] !== undefined) {
                    el = el.getElementsByTagName('input')[0] as HTMLElement;
                } else {
                    el = el.getElementsByTagName('md-select')[0] as HTMLElement;
                }

                // If the next element remains hidden,
                // proceed to the element after that.
                if (el === undefined) {
                    _this.goTo(ev, id + 1);
                } else {
                    el.focus();
                }
            }, 750);
        }
    }

    clearAll(): void {
        for (let f in this.fields) {
            this.fields[f].selected = null;
        }
        this.chRef.detectChanges();
        this.createRequest();
    }

    clearField(field): void {
        this.fields[field].selected = null;
        this.chRef.detectChanges();
    }

    openDefDialog(arr: string[]) {
        this.definition.open(DefinitionDialog, {
            data: arr,
        });
    }

    openClearDialog() {
        let dRef = this.clearD.open(ClearDialog);

        dRef.afterClosed().subscribe(clear => {
            if (clear === 'true') {
                this.clearAll();
            }
        });
    }

    openPrintDialog() {
        let dRef = this.printD.open(PrintDialog);

        dRef.afterClosed().subscribe(withVariables => {
            this.getWithVariables();
            this.chRef.detectChanges();
            window.print();
        });
    }

    openNavigationDialog() {
        this.navD.open(NavigationDialog);
    }

    openSnackBar() {
        this.snackBar.openFromComponent(DefinitionComponent);
    }

    ngOnInit(): void {
        this.getFields();
        this.getExcluded();
        this.getDisplayNames();
        this.getStatus();
        this.getProcedures();
        this.getScores();
        this.getCoeffs();
        this.getWithVariables();
        this.getDate();
        // this.openSnackBar();
    }

    ngAfterViewChecked(): void {
        let l = document.getElementsByTagName('md-button-toggle');
        for (var i = 0; i < l.length; i++) {
            l[i].getElementsByTagName('input')[0].setAttribute('tabindex', '-1');
        }
    }
}

@Component({
    selector: 'definition-dialog',
    templateUrl: './definition.dialog.html'
})

export class DefinitionDialog {
    constructor(@Inject(MD_DIALOG_DATA) public data: string[]) { }
}

@Component({
    selector: 'clear-dialog',
    templateUrl: './clear.dialog.html',
    styleUrls: ['./fields.component.scss']
})

export class ClearDialog {
    constructor(public dRef: MdDialogRef<ClearDialog>) { }
}

@Component({
    selector: 'print-dialog',
    templateUrl: './print.dialog.html',
    styleUrls: ['./fields.component.scss']
})
export class PrintDialog implements OnInit {
    fields: object;
    excluded: object;
    scores2: object[];
    displayNames: object;
    withVariables: boolean;

    constructor(
        private fieldsService: FieldsService,
        public dRef: MdDialogRef<PrintDialog>
    ) { }

    getFields(): void {
        this.fields = this.fieldsService.getFields();
    }

    getDisplayNames(): void {
        this.displayNames = this.fieldsService.getDisplayNames();
    }

    getExcluded(): void {
        this.excluded = this.fieldsService.getExcluded();
    }

    getScores(): void {
        this.scores2 = this.fieldsService.getScores();
    }

    getWithVariables(): void {
        this.withVariables = this.fieldsService.getWithVariables();
    }

    setWithVariables(withVariables: boolean): void {
        this.fieldsService.setWithVariables(withVariables);
        this.getWithVariables();
    }

    ngOnInit(): void {
        this.getFields();
        this.getExcluded();
        this.getScores();
        this.getDisplayNames();
        this.getWithVariables();
    }

}

@Component({
    selector: 'navigation-dialog',
    templateUrl: './navigation.dialog.html',
    styleUrls: ['./fields.component.scss']
})

export class NavigationDialog {
    constructor() { }
}

@Component({
    selector: 'snack-bar-component-example',
    templateUrl: 'snack-bar-component-example.html',
})
export class SnackBarComponent {
    constructor(public snackBar: MdSnackBar) { }

    openSnackBar() {
        this.snackBar.openFromComponent(DefinitionComponent);
    }
}

@Component({
    selector: 'snack-bar-component-example-snack',
    templateUrl: 'snack-bar-component-example-snack.html',
    styles: [`.example-pizza-party { color: hotpink; }`],
})
export class DefinitionComponent { }



// WEBPACK FOOTER //
// /home/jenkins/agent/workspace/risk-calc_develop/risk-calc-ts/src/app/fields.component.ts