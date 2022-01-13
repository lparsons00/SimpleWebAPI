import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-builder',
  templateUrl: './show-builder.component.html',
  styleUrls: ['./show-builder.component.css']
})
export class ShowBuilderComponent implements OnInit {

  constructor(private service: SharedService) { }

  BuilderList: any = [];
  ModalTitle: string | undefined;
  ActivateAddEditBuilder: boolean = false;
  builder: any;
  AccountNameFilter: string = "";
  BuilderListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshBuilderList();
  }

  addClick() {
    this.builder = {
      BuilderID: 0,
      AccountName: "",
      ContactName: "",
      BuilderAddress: "",
      ABN: 0
    }
    this.ModalTitle = "Add Builder";
    this.ActivateAddEditBuilder = true;
  }

  editClick(item: any) {
    this.builder = item;
    this.ModalTitle = "Edit Builder";
    this.ActivateAddEditBuilder = true;
  }

  deleteClick(item: { BuilderID: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteBuilder(item.BuilderID).subscribe(data => {
        alert(data.toString());
        this.refreshBuilderList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditBuilder = false;
    this.refreshBuilderList();
  }


  refreshBuilderList() {
    this.service.getBuilderList().subscribe(data => {
      this.BuilderList = data;
      this.BuilderListWithoutFilter = data;
    });
  }

  FilterFn() {
    var AccountNameFilter = this.AccountNameFilter;

    this.BuilderList = this.BuilderListWithoutFilter.filter(function (el: {
      AccountName: { toString: () => string; };
    }) {
      return el.AccountName.toString().toLowerCase().includes(
          AccountNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number, asc: any) {
    this.BuilderList = this.BuilderListWithoutFilter.sort(function (a: { [x: string]: number; }, b: { [x: string]: number; }) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
