import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() project: any;
  ProjectID: string | undefined;
  ProjectName: string | undefined;
  Builder: string | undefined;
  ProjectAddress: string | undefined;
  ProjectTown: string | undefined;
  Council: string | undefined;
  ProjectState: string | undefined;
  ApproxValue: number | undefined;
  StartDate: string | undefined;
  ExpectEnd: string | undefined;

  BuilderList: any = [];

  ngOnInit(): void {
    this.loadBuilderList();
  }

  loadBuilderList() {
    this.service.getAllBuilderNames().subscribe((data: any) => {
      this.BuilderList = data;

      this.ProjectID = this.project.ProjectID;
      this.ProjectName = this.project.ProjectName;
      this.Builder = this.project.Builder;
      this.ProjectAddress = this.project.ProjectAddress;
      this.ProjectTown = this.project.ProjectTown;
      this.Council = this.project.Council;
      this.ProjectState = this.project.ProjectState;
      this.ApproxValue = this.project.ApproxValue;
      this.StartDate = this.project.StartDate;
      this.ExpectEnd = this.project.ExpectEnd;
    });
  }

  addProject() {
    var val = {
      ProjectID: this.ProjectID,
      ProjectName: this.ProjectName,
      Builder: this.Builder,
      ProjectAddress: this.ProjectAddress,
      ProjectTown: this.ProjectTown,
      Council: this.Council,
      ProjectState: this.ProjectState,
      ApproxValue: this.ApproxValue,
      StartDate: this.StartDate,
      ExpectEnd: this.ExpectEnd
    };

    this.service.addProject(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateProject() {
    var val = {
      ProjectID: this.ProjectID,
      ProjectName: this.ProjectName,
      Builder: this.Builder,
      ProjectAddress: this.ProjectAddress,
      ProjectTown: this.ProjectTown,
      Council: this.Council,
      ProjectState: this.ProjectState,
      ApproxValue: this.ApproxValue,
      StartDate: this.StartDate,
      ExpectEnd: this.ExpectEnd
    };

    this.service.updateProject(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
