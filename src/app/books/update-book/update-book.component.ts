import { Component, OnInit } from '@angular/core';

import { Categories } from '../../interfaces/categoriesInterface';
import { BooksService } from '../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryService } from '../../categories/services/categories.service';
import { UserService } from '../../users/services/user.service';
import Swal from 'sweetalert2';
import { Books } from '../../interfaces/bookInterface';
import { BookShop } from 'src/app/interfaces/bookshopInterface';
import { BookshopService } from '../../bookshop/bookshop.service';
import { LoginComponent } from 'src/app/auth/login/login.component';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  category!:Categories
  categories:Categories[]=[]

  book:any= {} as any
  Bookshop:BookShop[]=[]
  shop:any
  longitud!:boolean

  jsonLibrari :any={

    name: '',
    location: '',
    description: '',
    img:''
    
  }

  json :any={

    isbn:'',
    title:'',
    dateBook:'',
    author:'',
    price:'',
    stock:'',
    category:''
  }

  jsonBook :any={

    isbn:'',
    title:'',
    dateBook:'',
    author:'',
    price:'',
    stock:'',
    category:''
  }

  constructor(private route: ActivatedRoute,private fb: FormBuilder, private router: Router, private servicio:BooksService, private servicioCat: CategoryService, private servicioUser:UserService,
    private bookshopSer: BookshopService) { }

  ngOnInit(): void {

    this.servicioCat.getCategories().subscribe({
      next:(resp)=> {
        this.categories=resp
      },error:(err)=> {
        console.log(err)
      },
    })

    const isbn=this.route.snapshot.params['id']
    this.servicio.getBook(isbn).subscribe({
      next:(resp)=> {
        this.book=resp
   
      },
    })

    this.bookshopSer.getShop().subscribe({
      next:(resp)=> {
        this.Bookshop=resp;
      },
    })


  }


  myForm: FormGroup= this.fb.group({
    isbn:['', ],
    title:['', [Validators.required, Validators.minLength(5)] ],
    date:['', [Validators.required]],
    author:['', [Validators.required ]],
    price:['', [Validators.required, Validators.min(5) ]],
    stock:['', [Validators.required, Validators.min(5) ]],
    opcionSeleccionado:['', [Validators.required]],
    fotoPerfil:['',[Validators.required]],
    fileSource:['', [Validators.required]]
  });

  bookshopForm : FormGroup= this.fb.group({
    libreria:['',[Validators.required]]
  })



  isValidField(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched && this.myForm?.controls[field].invalid
  }

  saveUpdate(){

    this.json.isbn=this.book.isbn
    this.json.title = this.myForm.get('title')?.value
    this.json.dateBook= this.myForm.get('date')?.value
    this.json.author=this.myForm.get('author')?.value
    this.json.price=this.myForm.get('price')?.value
    this.json.stock=this.myForm.get('stock')?.value

    this.servicioCat.getCategoryId(this.myForm.get('opcionSeleccionado')?.value).subscribe({
      next:(resp)=> {
        this.category=resp
        this.json.category=this.category
        this.servicio.updateBook(this.book.isbn, this.json,this.myForm.get('fileSource')?.value).subscribe({

          next:(resp)=> {
            if(resp){
              
              this.myForm.reset()
              Swal.fire({
                icon: 'success',
                title: 'Libro Actualizado con éxito',
                text: '¡Libro Actualizado!',
            })
            }
            this.router.navigate(['/books/list'])
          },error:(err)=> {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El libro no se puede Actualizar.',
            })
            
          },
          
    
        })
      },error:(err)=> {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El libro no se puede Actualizar.',
        })
      },
    })
   

  

  }
// método para poder añadir una de las librerias fisicas disponibles donde poder comprar ese libro.
  addBookshop(){

    this.jsonBook.isbn=this.book.isbn
    this.jsonBook.title = this.book.title
    this.jsonBook.dateBook= this.book.dateBook
    this.jsonBook.author=this.book.author
    this.jsonBook.price=this.book.price
    this.jsonBook.stock=this.book.stock
    this.jsonBook.category= this.book.category
    this.jsonBook.img=this.book.img
    this.jsonBook.listAvaible=this.book.listAvaible

    // console.log(this.jsonBook);
    
    // console.log(this.bookshopForm.get('libreria')?.value);

    this.servicio.getBookShop(this.bookshopForm.get('libreria')?.value).subscribe({
      next:(resp)=> {
        this.shop=resp
        this.jsonLibrari.name=this.shop.name
        this.jsonLibrari.location=this.shop.location
        this.jsonLibrari.description=this.shop.description
        this.jsonLibrari.img=this.shop.img


        // console.log(this.jsonLibrari);
        


        this.servicio.putBookshop(this.jsonBook, this.jsonLibrari).subscribe({
          next:(resp)=> {
            if(resp){
              
              this.myForm.reset()
              Swal.fire({
                icon: 'success',
                title: 'Successfully updated library',
                text: '¡Successfully updated library!',
            })
            this.router.navigate(['/books/list'])
            }
          }
          
          // },error:(err)=> {
          //   Swal.fire({
          //     icon: 'error',
          //     title: 'Oops...',
          //     text: 'Las librerias no se puede Actualizar.',
          //   })
    
          // },
        })
    
    
      },
    })
 
  }

  listlenght(){
    if(this.book.listAvaible.size()==0){
      this.longitud=true;
    }
  }

// método para poder borrar una de las librerias fisicas disponibles donde poder comprar ese libro.
  deleteBookshop(){
    this.servicio.deleteBookshop(this.book.isbn, this.bookshopForm.get('libreria')?.value).subscribe({
      next:(resp)=> {
        if(resp){
          
          this.myForm.reset()
          Swal.fire({
            icon: 'success',
            title: 'Successfully deleted library',
            text: '¡Successfully deleted library!',
        })
        }
        this.router.navigate(['/books/list'])
      },
    })
  }

  save(){
    if(this.myForm.valid){
      this.myForm.markAllAsTouched()
      
    }
  }


  onFileChange(event:any) {
    console.log(event);
    
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
}
