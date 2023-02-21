import { Injectable } from '@angular/core';
import { FIELDS, EXCLUDED_FIELDS, PROCEDURES, SCORES, COEFFS, DISPLAY_NAMES } from './fields';

@Injectable()
export class FieldsService {
    accepted: boolean;
    withVariables: boolean;

    getFields(): object {
        return FIELDS;
    }

    getDisplayNames(): object {
        return DISPLAY_NAMES;
    }

    getExcluded(): object {
        return EXCLUDED_FIELDS;
    }

    getStatus(): boolean {
        return this.accepted;
    }

    getProcedures(): object[] {
        return PROCEDURES;
    }

    getScores(): object[] {
        return SCORES;
    }

    getCoeffs(): object[] {
        return COEFFS;
    }

    getWithVariables(): boolean {
        return this.withVariables;
    }

    setStatus(accepted: boolean): void {
        this.accepted = accepted;
    }

    setWithVariables(withVariables: boolean): void {
        this.withVariables = withVariables;
    }
}



// WEBPACK FOOTER //
// /home/jenkins/agent/workspace/risk-calc_develop/risk-calc-ts/src/app/fields.service.ts