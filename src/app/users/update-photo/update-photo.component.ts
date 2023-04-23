import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { user } from 'src/app/interfaces/userCompleto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css']
})
export class UpdatePhotoComponent {

  public user: user={} as user
  jwt = localStorage.getItem("jwt")
  username!:string
  userActual!:user


  userDetails!: string|null;

  constructor(private fb: FormBuilder, private router: Router, private servicio:UserService, private route : ActivatedRoute, private authSer: AuthService){}


  //definimos nuestro formulario
  myForm: FormGroup= this.fb.group({  
     fotoPerfil:['',[Validators.required]],
     fileSource:['', [Validators.required]]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"] 
    if(this.jwt!=null){
      this.username=this.authSer.returnUser(this.jwt)
    }

    this.servicio.getUser(this.username).subscribe({
      next:(resp=>{
        
        this.userActual=resp
        this.servicio.getUser(id).subscribe({
          next:(resp)=> {
            this.user=resp
            if(this.userActual.username!=this.user.username){
              this.router.navigate(['**'])
            }
          },
        })
      })
    })
  }


  //método para validar los campos del formulario.
  isValidField(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched && this.myForm?.controls[field].invalid
  }

  onFileChange(event:any) {
      
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }


  save(){
    if(this.myForm.valid){
      this.myForm.markAllAsTouched()
      
    }
  }


  saveUpdate(){
 if(this.myForm.get('fileSource')==null){
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'sorry, The photo cannot be empty!',
         footer: '<a href="">Why do I have this issue?</a>'
       })
       this.router.navigate(['/'])
     }
    this.servicio.updateUserProfilePic(this.user.username,this.myForm.get('fileSource')?.value ).subscribe({
      next:(resp)=> {
        if(resp){
        
          Swal.fire({
            icon: 'success',
            title: 'User Updated',
            text: '¡User Update sucess!',
        });
         window.location.reload()
        this.myForm.reset()
        }
      },error:(err)=> {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'sorry!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        // console.log(this.json,this.myForm.get('fileSource')?.value,this.user.username );
        
      },
    })
    



  }

}
