
export default class Logger {
    constructor (name) {
        this.name =  name
      }
    
      sayHello (name) {
        console.log( 'Mi pokemon ' + this.name + ' te saluda')
      }
      sayMessage (message) {
          console.log( 'Mi pokemon ' + this.name + ' dice: ' + `${message}`)
        }
  }