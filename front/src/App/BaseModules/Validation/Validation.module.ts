import { NgModule } from '@angular/core';
import { ValidationComponent } from './Validation.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatorService } from './Validation.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        ValidatorService
    ],
    declarations: [
        ValidationComponent
    ],
    exports: [
        ValidationComponent
    ]
})

export class ValidationModule {}
