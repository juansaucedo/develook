import mongoose from 'mongoose';
let usersSchema = new mongoose.Schema({
  nombre: {type: String},
  userId: {type: String},
  fotoPerfil: {type: String},
  sexo: {type: String},
  fechaNac: {type: Date},
  email: {type: String},
  especialidades: [{
      especialidadId: {type: String},
      gradoId: {type: String}
  }],

  universidades: [{
      universidadId: {type: String}
  }],

  ciudadId: {type: String},
  contrasena : {type: String}

});
export default mongoose.model('Users', usersSchema);