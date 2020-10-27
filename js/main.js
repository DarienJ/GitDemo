var app = new Vue({
    //Darien Romero
    el: '#app',
    data: {
      see: 0,
      seeP: 0,
      seeS: 0,
      price: 0,
      nBurgers: 0,
      nDogs: 0,
      nchips: 0,
      button1: 'Enviar',
      pay: 0,
      rta: 0,
    },
    methods: {
  
      process:function(){
        if (this.nBurgers >= 0 && this.nDogs >= 0 && this.nchips >=0) {
          this.price = (this.nBurgers*12000)+(this.nDogs*9000)+(this.nchips*4000);
          this.seeP = 1;
          this.button1 = 'Actualizar';
        } else {
          alert ('Los datos ingresados no son válidos');
        }
      },
      process2:function(){
      if (this.pay < this.price) {
        alert ('El dinero no es suficiente');
      } else {
      this.rta = this.pay - this.price
      this.seeS = 1;
      this.see = 1;
      this.seeP = 0;
      }
      },
      process3:function(){
        this.nBurgers = 0;
        this.nDogs = 0;
        this.nchips = 0;
        this.seeP = 0;
        this.button1 = 'Pagar';
        this.see = 0;
        this.pay = 0;
        this.rta = 0;
        this.seeS = 0;
      }
    },
    
  })
