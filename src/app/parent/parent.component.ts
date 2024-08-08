import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  parentData = 'Data from parent';
  childData?: string;

  @ViewChild(ChildComponent, {static: true})
  child!: ChildComponent;

  ngOnInit() {
    this.childData = this.child.childData;
  }

  updateData(data: string) {
    this.parentData = data;
    return this.parentData;
  }

  receiveData(event: any) {
    this.childData = event;
  }

}
