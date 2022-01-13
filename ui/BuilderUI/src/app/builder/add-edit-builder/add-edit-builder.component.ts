import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-builder',
  templateUrl: './add-edit-builder.component.html',
  styleUrls: ['./add-edit-builder.component.css']
})
export class AddEditBuilderComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() builder: any;
  BuilderID: string | undefined;
  AccountName: string | undefined;
  ContactName: string | undefined;
  BuilderAddress: string | undefined;
  ABN: string | undefined;

  ngOnInit(): void {
    this.BuilderID = this.builder.BuilderID;
    this.AccountName = this.builder.AccountName;
    this.ContactName = this.builder.ContactName;
    this.BuilderAddress = this.builder.BuilderAddress;
    this.ABN = this.builder.ABN;
  }

  addBuilder() {
    var val = {
      BuilderID: this.BuilderID,
      AccountName: this.AccountName,
      ContactName: this.ContactName,
      BuilderAddress: this.BuilderAddress,
      ABN: this.ABN
    };
    this.service.addBuilder(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateBuilder() {
    var val = {
      BuilderID: this.BuilderID,
      AccountName: this.AccountName,
      ContactName: this.ContactName,
      BuilderAddress: this.BuilderAddress,
      ABN: this.ABN
    };
    this.service.updateBuilder(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
