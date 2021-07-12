import { Component, OnInit } from '@angular/core'
import { Project } from 'models/Project'
import { ProjectsService } from '../../services/projects.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = []

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects
    })
  }

  decreaseImageIndex = (project: Project) => {
    if (project.imageIndex != 0) { 
      project.imageIndex = project.imageIndex - 1 
    } else { 
      project.imageIndex = project.images.length - 1 
    }
  }

  increaseImageIndex = (project: Project) => {
    if (project.imageIndex != project.images.length - 1) { 
      project.imageIndex = project.imageIndex + 1 
    } else { 
      project.imageIndex = 0 
    }
  }

}
