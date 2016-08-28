import mongoose from 'mongoose';
let publicacionSchema = new mongoose.Schema({
    userId: {type: String},
    ubicacion: {type: Date, default: Date.now},
    fotoPerfil: {type: String},
    texto: {type: String },
    fotoPublicada: {type: String}



//   nombre: {type: String},
//   publicId: {type: String},
//   fotoPerfil: {type: String},
//   sexo: {type: String},
//   fechaNac: {type: Date},
//   email: {type: String},
//   especialidades: [{
//       especialidadId: {type: String},
//       gradoId: {type: String}
//   }],

//   universidades: [{
//       universidadId: {type: String}
//   }],

//   ciudadId: {type: String},
//   contrasena : {type: String}

});
export default mongoose.model('Publicacion', publicacionSchema);