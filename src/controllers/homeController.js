const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', {contatos});
};

exports.enviaMensagem = (req, res) => {
  if (!req.params.id) {
    return res.render("404");
  } else {
     let num = req.params.id
      res.redirect(`https://wa.me/55${num}`);
   }
};
