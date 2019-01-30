export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
  }

  export class Usuario extends Model {
    
    login: string;
    senha: string;
}