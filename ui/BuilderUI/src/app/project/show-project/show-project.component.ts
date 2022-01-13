import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  constructor(private service: SharedService) { }

  ProjectList: any = [];

  ModalTitle: string | undefined;
  ActivateAddEditProject: boolean = false;
  project: any;

  ngOnInit(): void {
    this.refreshProjectList();
  }

  addClick() {
    this.project = {
      ProjectID: 0,
      ProjectName: "",
      Builder: "",
      ProjectAddress: "",
      ProjectTown: "",
      Council: "",
      ProjectState: "",
      ApproxValue: "",
      StartDate: "",
      ExpectEnd: ""
    }
    this.ModalTitle = "Add Project";
    this.ActivateAddEditProject = true;
  }

  editClick(item: any) {
    this.project = item;
    this.ModalTitle = "Edit Project";
    this.ActivateAddEditProject = true;
  }

  deleteClick(item: { ProjectID: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteProject(item.ProjectID).subscribe(data => {
        alert(data.toString());
        this.refreshProjectList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditProject = false;
    this.refreshProjectList();
  }


  refreshProjectList() {
    this.service.getProjectList().subscribe(data => {
      this.ProjectList = data;
    });
  }

}
