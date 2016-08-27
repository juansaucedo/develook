import Users from '../models/users.model';

export default (app, router) => {
  router.route('/users')
    .post((req, res) => {

      Users.create({
        // text : req.body.text
        nombre: req.body.nombre,
        sexo: req.body.sexo,
        fechaNac: req.body.fechaNac,
        email: req.body.email,
        especialidades: req.body.especialidades,
        universidades: req.body.universidades,
        ciudades: req.body.ciudades,
        contrasena: req.body.contrasena
      }, (err, users) => {

        if (err)
          res.send(err);

        console.log(`Users created: ${users}`);

        Users.find((err, users) => {
          if(err)
            res.send(err);

          res.json(users);
        });
      });
    })

    .get((req, res) => {

      Todo.find((err, todo) => {

        if(err)
          res.send(err);

        else
          res.json(todo);
      });
    });

  router.route('/todo/:todo_id')

    .get((req, res) => {

      Todo.findOne(req.params.todo_id, (err, todo) => {

        if(err)
          res.send(err);

        else
          res.json(todo);
      });
    })

    .put((req, res) => {

      Todo.findOne({

        '_id' : req.params.todo_id

      }, (err, todo) => {

        if (err)
          res.send(err);

        if (req.body.text)
          todo.text = req.body.text;

        return todo.save((err) => {

          if (err)
            res.send(err);

          return res.send(todo);

        });
      });
    })

    .delete((req, res) => {

      console.log(`Attempting to delete todo with id: ${req.params.todo_id}`);

      Todo.remove({

        _id : req.params.todo_id
      }, (err, todo) => {

        if(err)
          res.send(err);

        console.log('Todo successfully deleted!');

        Todo.find((err, todos) => {
          if(err)
            res.send(err);

          res.json(todos);
        });
      });
    });
};
