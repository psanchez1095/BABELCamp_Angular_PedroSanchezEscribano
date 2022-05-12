import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { CredentialDto } from 'src/model/CredentialDto';
import { Student } from 'src/model/Student';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  url:string="http://localhost:8000/academia"
  token!: string;
  pwd!: string;
  user!: string;
  constructor(private http : HttpClient ) { }

  login(_seccion : string){
   
  }
  getToken(){
  let dto :CredentialDto = new CredentialDto();
  dto.pwd = this.pwd;
  dto.user = this.user;
  this.http.post<string>(this.url+"/login",dto)
  .subscribe(tk =>this.token=tk)
  }
  getStudentNota(nota : number){
    if(this.token ==null ||this.token==""){
        this.getToken()
    }
    let headers:HttpHeaders = new HttpHeaders();
    headers.append("Authorization","Bearer "+ this.token)
    return this.http.get<Student[]>(this.url +"/Alumno"+nota,{headers:headers})
  } 
}
