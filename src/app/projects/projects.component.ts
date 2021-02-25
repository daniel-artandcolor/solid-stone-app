import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  nextProjects = false;
  test = 'Next';

  constructor(config: NgbCarouselConfig) { 
    // customize default values of carousels used by this component tree
    config.interval = 20000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  nextProjectsImage(){
    this.nextProjects = !this.nextProjects;
   
    if(this.test == 'Next'){
      this.test = 'Prev';
    }else{
      this.test = 'Next';
    }
  }

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images = ['image-project-1.png', 'image-project-2.png', 'image-project-3.png','image-project-4.png', 'image-project-5.png', 'image-project-6.png','image-project-7.png', 'image-project-8.png'].map((n) => `../assets/img/${n}`);

}
