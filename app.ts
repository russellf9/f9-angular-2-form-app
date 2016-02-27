import { Component } from 'angular2/core';

import {
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators,
    AbstractControl
} from 'angular2/common';

import {bootstrap} from 'angular2/platform/browser';


/**
 * @DemoFormSkuBuilder: the top-level component for our application
 */
@Component({
    selector: 'demo-form-with-validations-explicit',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
        <h2 class="ui header">Form with Validation:</h2>
        <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)" class="ui form">

            <div class="field" [class.error]="!sku.valid && sku.touched">
                 <label for="skuInput">SKU</label>

                 <input type="text"
                    id="skuInput"
                    placeholder="SKU"
                    [ngFormControl]="sku">
                    <div *ngIf="!sku.valid" class="ui error">SKU is invalid</div>
                    <div *ngIf="sku.hasError('required')" class="ui error">SKU is required</div>
            </div>
           <div *ngIf="!myForm.valid"
      class="ui error message">Form is invalid</div>
            <button type="submit"
                    class="ui button">
                    submit
            </button>
        </form>
    </div>
    `
})


class DemoFormWithValidationsExplicit {

    myForm:ControlGroup;
    sku:AbstractControl;

    constructor(fb:FormBuilder) {
        this.myForm = fb.group ({
            'sku': ['', Validators.required]
        });

        this.sku = this.myForm.controls['sku'];
    }

    onSubmit(value:string):void {
        console.log('you submitted value: ', value);
    }


}

bootstrap(DemoFormWithValidationsExplicit);


/*
 this.myForm = fb.group ({
 'sku': ['', Validators.required]
 });



 this.sku = this.myForm.controls['sku'];

 onSubmit(value:string) {
 console.log('you submitted value: ', value);
 }
 */


