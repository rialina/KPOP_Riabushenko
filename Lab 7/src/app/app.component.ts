import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  inp1: string = '';
  inp2: string = '';
  inp3: string = '';
  inp4: string = '';
  inp5: string = '';
  inp6: string = 'da';
  inp7: string = 'da';




  errInp1: string = ''
  errInp2: string = ''
  errInp3: string = ''
  errInp4: string = ''
  errInp5: string = ''
  errInp6: string = ''
  errInp7: string = ''



  outRes: string = ''

  opt(g:string){
    this.inp6 = g
  }

  opt1(g:string){
    this.inp7 = g
  }

  rel(){
    location.reload();
  }

  startsWithCapital(word: string){
    return word.charAt(0) === word.charAt(0).toUpperCase()
  }




  checkVal(){

    let flag1 = false
    let flag2 = false
    let flag3 = false
    let flag4 = false


    const isNumeric = (n: any) => !isNaN(n);

    if (this.inp1 != '') {
      if (!isNumeric(this.inp1)){
        if (this.inp1.length <= 10){
          if (this.startsWithCapital(this.inp1)){
            this.errInp1 = ""
            flag1 = true
          }else{
            this.errInp1 = "Фамілія повинна бути з великої літери (Напр: Рибаков)"
          }
        }else{
          this.errInp1 = "Дуже довга фамілія. Ліміт 10 символів (Напр: Рибаков)"
        }
      }else{
        this.errInp1 = "Введіть букви, а не числа"
      }

    }else{
      this.errInp1 = "Не заповнене поле"
    }


    if (this.inp2 != '') {
      if (!isNumeric(this.inp2)){
        if (this.inp2.length <= 10){
          if (this.startsWithCapital(this.inp2)){
            this.errInp2 = ""
            flag2 = true

          }else{
            this.errInp2 = "Ім'я повинно бути з великої літери (Напр: Вадим)"
          }
        }else{
          this.errInp2 = "Дуже довге ім'я. Ліміт 10 символів (Напр: Вадим)"
        }
      }else{
        this.errInp2 = "Введіть букви, а не числа"
      }

    }else{
      this.errInp2 = "Не заповнене поле"
    }


    if (this.inp3 != ''){
      if (this.inp3.length <= 20){
        this.errInp3 = ""
        flag3 = true
      }else{
        this.errInp3 = "Ліміт 20 символів перевищено"
      }
    }else{
      this.errInp3 = "Не заповнене поле"
    }


    let dopFlag1:boolean = false
    let dopFlag2:boolean = false

    if (this.inp4 != ''){
      if (this.inp4.length <= 16){
        this.errInp4 = ""
        dopFlag1 = true
      }else{
        this.errInp4 = "Ліміт 15 символів перевищено"
      }
    }else{
      this.errInp4 = "Не заповнене поле"
    }


    if (this.inp5 != ''){
      if (this.inp5.length <= 15){
        this.errInp5 = ""
        dopFlag2 = true
      }else{
        this.errInp5 = "Ліміт 15 символів перевищено"
      }
    }else{
      this.errInp5 = "Не заповнене поле"
    }


    if (dopFlag1 && dopFlag2){
      if (this.inp4 == this.inp5){
        flag4 = true
      }else{
        this.errInp5 = "Паролі не співпадають"
      }
    }


    if (flag1 && flag2 && flag3 && flag4){
      this.outRes = 'Відправлено'
    }


  }













}
