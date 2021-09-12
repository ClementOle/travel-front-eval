import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Travel} from "../../models/travel.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-travel-form',
  templateUrl: './add-travel-form.component.html',
  styleUrls: ['./add-travel-form.component.css']
})
export class AddTravelFormComponent implements OnInit {

  @Input() travel: Travel = new Travel('', '', new Date(), new Date(), '', '', new Date(), new Date());

  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      description: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(10000)]),
      imgUrl: new FormControl(undefined, [Validators.required, Validators.pattern("https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)")]),
      dateBegin: new FormControl(undefined, [Validators.required, this.validateDate]),
      dateEnd: new FormControl(undefined, [Validators.required, this.validateDate])
    })
  }

  onSubmitForm() {
    if (this.form.valid) {
      this.travel.updatedAt = new Date();
      this.travel.createdAt = new Date();

      this.submitForm.emit(this.travel);

    }
  }

  /**
   * Validators to check if date is after current date
   * @param formControl
   */
  validateDate(formControl: FormControl) {
    let value = formControl.value;

    return new Date(value) > new Date() ? null :
      {
        validateDate: {
          valid: false
        }
      };
  }
}
