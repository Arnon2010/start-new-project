import { ReportComponent } from './report/report.component';
import { UploadComponent } from './uploadfile/uploadfile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentComponent } from './home-student/home-student.component';
import { LoginComponent } from './login/login.component';
import { FaculutyWebManagementComponent } from './faculuty-web-management/faculuty-web-management.component';
import { MasteradminComponent } from './masteradmin/masteradmin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SelectloginComponent } from './selectlogin/selectlogin.component';
import { LogoutComponent } from './logout/logout.component';
import { FacultyCapconfirmComponent } from './faculty-capconfirm/faculty-capconfirm.component';
import { AuthGuard } from './services/auth.guard';
import { LoginrutsappComponent } from './loginrutsapp/loginrutsapp.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PositionsComponent } from './positions/positions.component';
import { MeetingTypeComponent } from './meeting-type/meeting-type.component';
import { MeetingAgendaComponent } from './meeting-agenda/meeting-agenda.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent}, // route Home
  { path: 'report', component: ReportComponent}, // route report
  { path: 'loginrutsapp/:token', component: LoginrutsappComponent}, // route ไปหน้าหลักของนักศึกษา
  { path: 'homestudent', component: HomeStudentComponent, canActivate: [AuthGuard] }, // route ไปหน้าหลักของนักศึกษา
  { path: 'uploadfile', component: UploadComponent, canActivate: [AuthGuard] }, // route ไปหน้าของอัพโหลดเอกสาร
  { path: 'selectlogin', component: SelectloginComponent}, // route ไปหน้าเลือกการ Login
  { path: 'login', component: LoginComponent }, // route ไปการ Login ของนักศึกษา
  { path: 'adminlogin', component: AdminloginComponent }, // route ไปการ Login ของ คณะเเละกองพัฒ
  { path: 'fmanagement', component: FaculutyWebManagementComponent, canActivate: [AuthGuard] }, // route ไปหน้าหลักคณะ
  { path: 'logout', component: LogoutComponent },
  { path: 'masteradmin', component: MasteradminComponent, canActivate: [AuthGuard] }, // route ไปหน้าหลักกองพัฒ
  { path: 'adduser', component: AdduserComponent, canActivate: [AuthGuard] }, // route ไปหน้าเพิ่ม user ของกองพัฒ
  { path: 'fcapconfirm/:id', component: FacultyCapconfirmComponent, canActivate: [AuthGuard] }, // route ไปหน้าเพิ่ม user ของคณะเพื่อยืนยันสมรรถนะ
  
  //new 
  { path: 'user', component: UsersComponent, canActivate: [AuthGuard]}, //เพิ่มผู้ใช้ระบบ Admin,user
  { path: 'position', component: PositionsComponent, canActivate: [AuthGuard]}, //เพิ่มผู้ใช้ระบบ Admin,user
  { path: 'meeting-type', component: MeetingTypeComponent, canActivate: [AuthGuard]}, //เพิ่มผู้ใช้ระบบ Admin,user
  { path: 'meeting-agenda', component: MeetingAgendaComponent, canActivate: [AuthGuard]}, //เพิ่มผู้ใช้ระบบ Admin,user

  { path: '**', redirectTo: '/login' }, // หากใส่ url ไม่ถูกต้องจะทำการ Redirect ไป หน้าเลือกการ Login 


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
