<template>
  <div class="container">

  <div class="calc-body">
    <div class="calc-display">
      <div class="calc-date">
        <h6 class="date-display">{{ moment().format('LL') }}</h6>
      </div>

      <div class="calc-time">
     <h6> </h6>
      </div>

      <div class="calc-display-number">
      <h3>{{ inputNumber || '0'}}</h3>
      </div>
    </div>

    <div class="calc-buttons">
      <div class="buttons calc-oper">
        <h4>AC</h4>
      </div>

      <div v-on:click="clear" class="buttons calc-oper">
        <h4>CE</h4>
      </div>

      <div v-on:click="percent" class="buttons calc-oper">
        <h4>%</h4>
      </div>

      <div v-on:click="division" class="buttons calc-oper">
        <h4>/</h4>
      </div>

      <div v-on:click="arrayNumber('7')" class="buttons calc-number">
        <h4>7</h4>
      </div>

      <div v-on:click="arrayNumber('8')" class="buttons calc-number">
        <h4>8</h4>
      </div>

      <div v-on:click="arrayNumber('9')" class="buttons calc-number">
        <h4>9</h4>
      </div>

      <div v-on:click="multiplication" class="buttons calc-oper">
        <h4>x</h4>
      </div>

      <div v-on:click="arrayNumber('4')" class="buttons calc-number">
        <h4>4</h4>
      </div>

      <div v-on:click="arrayNumber('5')" class="buttons calc-number">
        <h4>5</h4>
      </div>

      <div v-on:click="arrayNumber('6')" class="buttons calc-number">
        <h4>6</h4>
      </div>

      <div v-on:click="subtraction" class="buttons calc-oper">
        <h4>-</h4>
      </div>

      <div v-on:click="arrayNumber('1')" class="buttons calc-number">
        <h4>1</h4>
      </div>

      <div v-on:click="arrayNumber('2')" class="buttons calc-number">
        <h4>2</h4>
      </div>

      <div v-on:click="arrayNumber('3')" class="buttons calc-number">
        <h4>3</h4>
      </div>

      <div v-on:click="addition" class="buttons calc-oper">
        <h4>+</h4>
      </div>

      <div v-on:click="arrayNumber('0')" class="buttons calc-number">
        <h4>0</h4>
      </div>

      <div v-on:click="addPoint()" class="buttons calc-oper">
        <h4>.</h4>
      </div>

      <div v-on:click="result" class="buttons calc-equal">
        <h4>=</h4>
      </div>
    </div>
    

  </div>

  </div>
</template>

<script>
  var moment = require('moment');
  moment.locale('pt-BR');


export default {
  data(){
    return{
      moment:moment,
      inputNumber: '',
      previusNumber: null,
      operator: null,
      clickedNumber: false,

      
    };
  },
  methods: {
    //RESPONSIBLE METHOD FOR JOINING NUMBERS ON THE DISPLAY
    arrayNumber(number){
      if(this.clickedNumber){
        this.inputNumber = '';
        this.clickedNumber = false;
      }

      this.inputNumber = `${this.inputNumber}${number}`;
    },

    //RESPONSIBLE METHOF FOR ADD POINT
    addPoint(){
      if(this.inputNumber.indexOf('.') === -1){
        this.arrayNumber('.');
      }
       
    },

    //RESPONSIBLE METHOD FOR CLEAR NUMBER ON THE DISPLAY
    clear(){
      this.inputNumber = '';
    },

  //SETTER THE NUMBER VALUE
    setValue(){
      this.previusNumber = this.inputNumber;
      this.clickedNumber = true;
    },

    //RESPONSIBLE METHOD FOR PERCENTAGE OPERATION
    percent(){
      this.inputNumber = `${parseFloat(this.inputNumber)/100}`;
    },

    //RESPONSIBLE METHOD FOR DIVISION OPERATION
    division(){
      this.operator = (num1, num2) => num1/num2;
      this.setValue();
    },

    multiplication(){
      this.operator = (num1, num2) => num1*num2;
      this.setValue();

    },

    subtraction(){
      this.operator = (num1, num2) => num1-num2;
      this.setValue();

    },

    addition(){
      this.operator = (num1, num2) => num1+num2;
      this.setValue();

    },

    result(){
      this.inputNumber = `${this.operator(parseFloat(this.previusNumber),
      parseFloat(this.inputNumber),
      )}`;
      this.previusNumber = null;
    }

   
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  justify-content: center;
  justify-items: center;
  display: grid;
}

.calc-body{
  background-image: linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%);
  border: 1px solid #AB47BC;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 530px;
  width: 400px;
  padding: 20px; 
}

.calc-display{
  background: rgb(233,246,246);
background: linear-gradient(0deg, rgba(233,246,246,1) 0%, rgba(234,141,144,1) 100%);
 margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  text-align: right;
  font-size: 25px;
  padding-right: 15px;
  display: grid;
}

.date-display{
  font-size: 15px;
}

.calc-date{
 margin: -20px 12px ;
  grid-row: 1;
  text-align: left;
}

.calc-time{
  margin-top: -20px;
  grid-row: 1;
  text-align: right;
}

.calc-display-number{
  margin: -60px 0% -5% 0%;
  text-align: right;
  grid-column: 1 / 3;
}

.calc-buttons{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 5px;
}

.buttons{
  background-color: seashell;
  margin: 6px 8px;
  width: 70px;
  height: 70px;

    color:#fff;
    font-size: 18px;
    cursor: pointer;
    text-align:center;
    border: none;
    border-radius: 80%;
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #DD5E89 0%, #F7BB97  51%, #DD5E89  100%)
}

.buttons:hover {
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.calc-oper{
  background-image: linear-gradient(to right, #E91E63 0%, #F7BB97  51%, #E91E63  100%);
                    
}

.calc-equal{
  grid-column: 3 / 5;
  grid-row: 5 ;
  width: 170px;
  border-radius: 50px;
  background-image: linear-gradient(to right, #E91E63 0%, #F7BB97  51%, #E91E63  100%);
  
}

</style>
