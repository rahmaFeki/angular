import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
 form:any;
 
  constructor(private memberService: MemberService, private router:Router) { 
    
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
    
        '';
  }
  initForm():void{
    this.form=new FormGroup(
      {
        cin:new FormControl(null,[Validators.required]),
        name:new FormControl(null,[Validators.required]),
        cv:new FormControl(null,[]),
        type:new FormControl(null,[Validators.required]),

      })
   
  }
  ngOnInit(): void {
    this.initForm()

  }
  OnSubmit():void{
console.log(this.form.value)
const objectToSubmit=this.form.value;
this.memberService.saveMember(objectToSubmit).then(()=>{this.router.navigate(['./members'])})
//retourne thread alors .then((result)=>action);
  }

}
