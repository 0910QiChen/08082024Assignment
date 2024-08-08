import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  parentData?: string;

  @Output()
  childEvent: EventEmitter<any> = new EventEmitter<any>();

  childData = 'Data from child';

  updateData(data: string) {
    this.childEvent.emit(data);
  }

  ngOnChanges() {
    console.log('Child ngOnChanges');
  }

  ngOnInit() {
    console.log('Child ngOnInit');
  }

  ngDoCheck() {
    console.log('Child ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Child ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child ngOnDestroy');
  }
}
