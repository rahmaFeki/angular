import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { GLOBAL } from '../app.config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab:Member[]=GLOBAL._DB.membres;
  constructor(private httpClient:HttpClient) { }
  saveMember(member:Member):Promise<Member>{
   const memberToSave={ ...member}
   memberToSave.id=member.id??Math.ceil(Math.random()*10000).toString()
   memberToSave.createDate=member.createDate??new Date().toISOString()
    this.tab=[memberToSave,...this.tab.filter(item=>item.id!==memberToSave.id)]
    //return this.httpClient.post<Member>('linktoRestApi',member).toPromise();
    return new Promise(resolve=>resolve(memberToSave));
  }
}
