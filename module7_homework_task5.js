/* Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.*/

const onDevice = []; // массив с именами включенных приборов

let sumPower = 0; // сумма всех включенных приборов

function getSumPower() {
  console.log("Сейчас вкючены:");
  console.log(onDevice);
  console.log(`Общая потребляемая мощность всех включенных приборов - ${sumPower} Вт.`);
}

class Device { // родительский класс приборов 
  constructor() {
    this.status = "off"
  }
  
  onOff() { // метод включения и выключения приборов
    if (this.status === "off"){
      this.status = "on";
      sumPower += this.nominalPower;
      onDevice.push(this.name);
    } else {
      let deviceIndex = onDevice.indexOf(this.name);
      onDevice.splice(deviceIndex, 1);
      this.status = "off";
      sumPower -= this.nominalPower;
    }
  }

  getStatus() { // метод проверки состояния приборов
    if (this.status === "on"){
      console.log(`${this.name} - включен.`)
      console.log(`Потребляемая мощность - ${this.nominalPower} Вт.`)
    } else {
      console.log(`${this.name} - выключен.`)
      console.log(`Потребляемая мощность - 0 Вт.`)
    }
  }
}

class ComputerDevice extends Device { // класс для приборов-компьютеров
  constructor (name, power) {
    super() 
    this.name = name,
    this.nominalPower = power,
    this.displayStatus = "off"
  }

  displayOnOff() { // метод включения монитора у компьютеров
    if (this.displayStatus === "off" && this.status === "on"){
      this.displayStatus = "on";
    } else {
      this.displayStatus = "off";
    }
  }

  getDisplayStatus() { // метод проверки статуса монитора
    if (this.displayStatus === "on" && this.status === "on"){
      console.log(`Дисплей ${this.name} - включен.`);
    } else {
      console.log(`Дисплей ${this.name} - выключен`);
    }
  }
}

class LightDevice extends Device { // класс для осветительных приборов 
  constructor(name, power, color) {
    super()
    this.name = name,
    this.nominalPower = power,
    this.lightСolor = color
  }

  getLightСolor() { // метод проверки цвета лампочки
    console.log(`Цвет которым горит ${this.name} - ${this.lightСolor}`);
  }
}

// создаем приборы 

const computer1 = new ComputerDevice("Компьютер Dell", 800);

const computer2 = new ComputerDevice("Компьютер Asus", 650);

const lamp1 = new LightDevice("Настольная лампа", 100, "белый");

const lamp2 = new LightDevice("Светильник", 150, "фиолетовый")

// .onOff(); - метод включения и выключения приборов
// .getStatus(); - метод проверки состояния приборов
// .displayOnOff(); - метод включения монитора у компьютеров
// .getDisplayStatus(); - метод проверки статуса монитора
// .getLightСolor(); - метод проверки цвета лампочки
// getSumPower(); - показать какие приборы включены и сколько все они потребляют мощности

// проверка

computer1.onOff();
computer1.displayOnOff();
computer1.getDisplayStatus();
computer1.getStatus();

getSumPower();

computer2.onOff();
computer2.displayOnOff();
computer2.getStatus();

lamp1.onOff();
lamp1.getStatus();
lamp1.getLightСolor();

lamp2.onOff();
lamp2.getStatus();
lamp2.getLightСolor();

getSumPower();

lamp2.onOff();
computer2.onOff();

getSumPower();