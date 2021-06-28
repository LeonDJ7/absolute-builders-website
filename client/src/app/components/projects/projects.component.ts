import { Component, OnInit } from '@angular/core'
import { Project } from 'models/Project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      images: ['assets/images/fake-project-1.jpeg', 'assets/images/fake-project-2.jpg'],
      title: 'Kitchen Renovation',
      location: '216 High St, Abington MA',
      imageIndex: 0
    },
    {
      images: ['assets/images/fake-project-2.jpg', 'assets/images/fake-project-1.jpeg'],
      title: 'New Home',
      location: '2 Kearsarge Rd, Yarmouth MA',
      imageIndex: 0
    },
    {
      images: ['assets/images/fake-project-2.jpg', 'assets/images/fake-project-1.jpeg'],
      title: 'New Home',
      location: '2 Kearsarge Rd, Yarmouth MA',
      imageIndex: 0
    },
    {
      images: ['assets/images/fake-project-1.jpeg', 'assets/images/fake-project-2.jpg'],
      title: 'Kitchen Renovation',
      location: '216 High St, Abington MA',
      imageIndex: 0
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  decreaseImageIndex = (project: Project) => {
    if (project.imageIndex != 0) { 
      project.imageIndex = project.imageIndex - 1 
    } else { 
      project.imageIndex = project.images.length - 1 
    }
  }

  increaseImageIndex = (project: Project) => {
    if (project.imageIndex != 0) { 
      project.imageIndex = project.imageIndex - 1 
    } else { 
      project.imageIndex = project.images.length - 1 
    }
  }

}
