import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, Subscription, tap } from 'rxjs';

const DEBOUNCE_TIME = 500;
const MIN_CHARS_TO_EMIT_VALUE = 0;

@Component({
  selector: 'a-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = 'Search';
  @Output() onInputChanges = new EventEmitter<string>();

  inputChangesSubscription: Subscription;

  inputFormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.onInputChange();
  }

  onInputChange() {
    this.inputChangesSubscription = this.inputFormControl.valueChanges
      .pipe(
        debounceTime(DEBOUNCE_TIME),
        filter(
          (value: string | any) => value.length >= MIN_CHARS_TO_EMIT_VALUE
        ),
        tap((value: string | any) => {          
          this.onInputChanges.emit(encodeURIComponent(value));
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.inputChangesSubscription.unsubscribe();
  }
}
