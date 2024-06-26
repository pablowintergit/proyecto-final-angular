import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'students',
    loadChildren: () => import('./pages/students/students-table/students-table.module').then(m => m.StudentsModule)
  },
  {
    path:'courses',
    loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path:'classes',
    loadChildren: () => import('./pages/classes/classes.module').then(m => m.ClassesModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
