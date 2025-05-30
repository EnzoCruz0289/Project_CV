import { Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProjectsComponent } from './pages/projects_jdac/projects.component';
import { PersonalinformationComponent } from './pages/personalinformation/personalinformation.component';

export const routes: Routes = [
    {path: 'cv', component: CvComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'personalinformation', component:PersonalinformationComponent}
];
