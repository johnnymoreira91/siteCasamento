const mongoose = require('mongoose');

const lista = new mongoose.Schema({
    familia: { type: String, required: true, minlength: 3, maxlength: 50  },
    padrinhos: { type: String, required: true, minlength: 1, maxlength: 3  },
    pessoas: { type: String, required: true, minlength: 3, maxlength: 100 },
    numeroPessoas: { type: Number, required: true, minlength: 1, maxlength: 20 },
    confirmado: { type: String, required: true, minlength: 1, maxlength: 3  },
});

mongoose.model('listaCasamento', lista);