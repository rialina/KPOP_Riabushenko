import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(() => {
    appComponent = new AppComponent();
  });

  it('повинен створювати екземпляр класа', () => {
    expect(appComponent).toBeTruthy();
  });

  it('перевірка поля "Фамилия" на не заповнене поле', () => {
    appComponent.inp1 = '';
    appComponent.checkVal();
    let errL = appComponent.errInp1;
    expect(errL).toBe('Не заповнене поле');
  });

  it('перевірка поля "Фамилия" на не дозволені введені числа', () => {
    appComponent.inp1 = '343434';
    appComponent.checkVal();
    let errL = appComponent.errInp1;
    expect(errL).toBe('Введіть букви, а не числа');
  });

  it('перевірка поля "Фамилия" на перевищений ліміт 10 символів', () => {
    appComponent.inp1 = 'рибаковввввввввввввв';
    appComponent.checkVal();
    let errL = appComponent.errInp1;
    expect(errL).toBe('Дуже довга фамілія. Ліміт 10 символів (Напр: Рибаков)');
  });

  it('перевірка поля "Фамилия" на не введену першу велику літеру', () => {
    appComponent.inp1 = 'рибаков';
    appComponent.checkVal();
    let errL = appComponent.errInp1;
    expect(errL).toBe('Фамілія повинна бути з великої літери (Напр: Рибаков)');
  });

  it('перевірка поля "Фамилия" на правильність введення', () => {
    appComponent.inp1 = 'Рибаков';
    appComponent.checkVal();
    let errL = appComponent.errInp1;
    expect(errL).toBe('');
  });

  it('перевірка поля "Имя" на не заповнене поле', () => {
    appComponent.inp2 = '';
    appComponent.checkVal();
    let errL = appComponent.errInp2;
    expect(errL).toBe('Не заповнене поле');
  });

  it('перевірка поля "Имя" на на не дозволені введені сила', () => {
    appComponent.inp2 = '454545';
    appComponent.checkVal();
    let errL = appComponent.errInp2;
    expect(errL).toBe('Введіть букви, а не числа');
  });

  it('перевірка поля "Имя" на перевищений ліміт 10 символів', () => {
    appComponent.inp2 = 'вадиммммммммммммммммммм';
    appComponent.checkVal();
    let errL = appComponent.errInp2;
    expect(errL).toBe("Дуже довге ім'я. Ліміт 10 символів (Напр: Вадим)");
  });

  it('перевірка поля "Имя" на на не введену першу велику літеру', () => {
    appComponent.inp2 = 'вадим';
    appComponent.checkVal();
    let errL = appComponent.errInp2;
    expect(errL).toBe("Ім'я повинно бути з великої літери (Напр: Вадим)");
  });

  it('перевірка поля "Имя" на на правильність вводу', () => {
    appComponent.inp2 = 'Вадим';
    appComponent.checkVal();
    let errL = appComponent.errInp2;
    expect(errL).toBe('');
  });

  it('перевірка поля "Адрес" на не заповнене поле', () => {
    appComponent.inp3 = '';
    appComponent.checkVal();
    let errL = appComponent.errInp3;
    expect(errL).toBe('Не заповнене поле');
  });

  it('перевірка поля "Адрес" на перевищення 20 символів', () => {
    appComponent.inp3 = 'вул ууууууууууааааааааааааааааааааааааааааааааауау';
    appComponent.checkVal();
    let errL = appComponent.errInp3;
    expect(errL).toBe('Ліміт 20 символів перевищено');
  });

  it('перевірка поля "Адрес" на правильність вводу', () => {
    appComponent.inp3 = 'вул Харківська 27ф';
    appComponent.checkVal();
    let errL = appComponent.errInp3;
    expect(errL).toBe('');
  });

  it('перевірка поля "Пароль" на не заповнене поле', () => {
    appComponent.inp4 = '';
    appComponent.checkVal();
    let errL = appComponent.errInp4;
    expect(errL).toBe('Не заповнене поле');
  });

  it('перевірка поля "Пароль" на перевищений ліміт 15 символів', () => {
    appComponent.inp4 = '123вввввввввввввввввввввввввввввввввввввввв';
    appComponent.checkVal();
    let errL = appComponent.errInp4;
    expect(errL).toBe('Ліміт 15 символів перевищено');
  });

  it('перевірка поля "Пароль" на правильність вводу', () => {
    appComponent.inp4 = '1234йц';
    appComponent.checkVal();
    let errL = appComponent.errInp4;
    expect(errL).toBe('');
  });

  it('перевірка поля "Подтверждение пароля" на не заповнене поле', () => {
    appComponent.inp5 = '';
    appComponent.checkVal();
    let errL = appComponent.errInp5;
    expect(errL).toBe('Не заповнене поле');
  });

  it('перевірка поля "Подтверждение пароля" на перевищений ліміт 15 символів', () => {
    appComponent.inp5 = '33123вввввввввввввввввввввввввввввввввввввввв';
    appComponent.checkVal();
    let errL = appComponent.errInp5;
    expect(errL).toBe('Ліміт 15 символів перевищено');
  });

  it('перевірка поля "Пароль" на правильність вводу', () => {
    appComponent.inp5 = '1234йц';
    appComponent.checkVal();
    let errL = appComponent.errInp5;
    expect(errL).toBe('');
  });

  it('перевірка поля "Пароль" і поля "Подтверждение пароля" на не співпадіння', () => {
    appComponent.inp4 = '1234йц';
    appComponent.inp5 = 'йй1234йц';
    appComponent.checkVal();
    let errL = appComponent.errInp5;
    expect(errL).toBe('Паролі не співпадають');
  });

  it('перевірка поля "Пароль" і поля "Подтверждение пароля" на співпадіння', () => {
    appComponent.inp4 = '1234йц';
    appComponent.inp5 = '1234йц';
    appComponent.checkVal();
    let errL = appComponent.errInp5;
    expect(errL).toBe('');
  });
});
