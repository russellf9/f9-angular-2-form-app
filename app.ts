import { Component } from 'angular2/core';

import { FORM_DIRECTIVES, FormBuilder, ControlGroup } from 'angular2/common';

import {bootstrap} from 'angular2/platform/browser';


/**
 * @DemoFormSkuBuilder: the top-level component for our application
 */
@Component({
    selector: 'demo-form-sku-builder',
    directives: [FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
        <h2 class="ui header">Form with builder:</h2>
        <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">
            <div class="field">
                <label for="skuInput">SKU</label>
                <input type="text"
                        id="skuInput"
                        placeholder="SKU"
                        [ngFormControl]="myForm.controls['sku']"
                        >
            </div>
            <button type="submit"
                    class="ui button">
                    submit
            </button>
        </form>
    </div>
    `
})

class DemoFormSkuBuilder {
    myForm:ControlGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['AB234', ]
        });
    }

    onSubmit(value:string) {
        console.log('you submitted value: ', value);
    }
}

bootstrap(DemoFormSkuBuilder);


