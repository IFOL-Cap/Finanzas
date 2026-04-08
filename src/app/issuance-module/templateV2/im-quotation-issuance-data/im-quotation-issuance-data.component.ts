import { Component } from '@angular/core';
import { LabelInputComponent } from '../../../shared/components/forms-elements/label-input/label-input.component';
import { LabelUploadComponent } from '../../../shared/components/forms-elements/label-upload/label-upload.component';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { Router } from '@angular/router';
import { EncryptedStorageService } from '../../../shared/services/encrypted-storage.service';
import { LabelSelectComponent } from '../../../shared/components/forms-elements/label-select/label-select.component';

@Component({
  selector: 'app-im-quotation-issuance-data',
  standalone: true,
  imports: [
    LabelInputComponent, 
    LabelUploadComponent, 
    ButtonComponent,
    LabelSelectComponent
  ],
  templateUrl: './im-quotation-issuance-data.component.html',
  styleUrl: './im-quotation-issuance-data.component.css'
})
export class ImQuotationIssuanceDataComponent {
constructor(private router: Router, private localStorage: EncryptedStorageService){}

continue():void
  {
     this.router.navigate(['/im/step2']);
  }

}
