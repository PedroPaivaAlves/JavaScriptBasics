"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//classes
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      if (this.admin === true) {
        return true;
      }

      return false;
    }
  }]);

  return Usuario;
}(); //utilizando herança com extends


var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false 

console.log(Adm1.isAdmin()); // true
/////////////////////////////////////////////////////////////////////////
//operações map, reduce, filter, find

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //utilizando map para retornar todas as idades dos usuários

var usandoMap = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(usandoMap); //utilizando filter para retornar somente usuário com mais de 18 anos e que trabalham na RocktSeat

var usandoFilter = usuarios.filter(function (usuario) {
  return usuario.idade > 18 && usuario.empresa === "Rocketseat";
});
console.log(usandoFilter); //utilizando o find para procurar um usuário que trabalhe no Facebook

var usandoFind = usuarios.find(function (usuario) {
  return usuario.empresa === "Facebook";
});
console.log(usandoFind); //unindo operações para multiplicar a idade de todos usuários por dois e depois realizar um filtro nos usuários que possuem no máximo 50 anos

usuarios.forEach(function (usuario) {
  return usuario.idade = usuario.idade * 2;
});
var unindoOperacoes = usuarios.filter(function (usuario) {
  return usuario.idade > 50;
});
console.log(unindoOperacoes); ////////////////////////////////////////////////////////
//Transformando funções em arrow functions
//3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log(arr.map(function (item) {
  return item + 10;
})); //3.2

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuarios);

var mostraIdadeArrow = function mostraIdadeArrow(usuario) {
  return usuario.idade;
};

console.log(mostraIdadeArrow(usuarios[0])); // 3.3 

var nomeUsuario = "Diego";
var idade = 23;

function mostraUsuario() {
  var nomeUsuario = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nomeUsuario: nomeUsuario,
    idade: idade
  };
}

mostraUsuario(nomeUsuario, idade);
mostraUsuario(nomeUsuario);

var mostraUsuarioArrow = function mostraUsuarioArrow() {
  var nomeUsuario = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nomeUsuario: nomeUsuario,
    idade: idade
  };
};

console.log(mostraUsuarioArrow("Pedro", 31));
console.log(mostraUsuarioArrow("Pedro")); // 3.4 

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var promiseArrow = function promiseArrow() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //////////////////////////////////////
// Destructuring


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat 

console.log(cidade); // Rio do Sul 

console.log(estado); // SC
//Destructuring 2

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));

function mostraInfoDestructed(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos");
}

console.log(mostraInfoDestructed({
  nome: 'Diego',
  idade: 23
})); ///////////////////////////////////
//SPREAD

var array = [1, 2, 3, 4, 5, 6];
var x = array[0],
    y = array.slice(1);
console.log(x);
console.log(y); //SPREAD 2

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nome: "Pedro"
});

var usuario3 = _objectSpread(_objectSpread({}, usuario), {}, {
  endereço: {
    cidade: "Fortaleza"
  }
});

console.log(usuario2);
console.log(usuario3); //REST

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21 

console.log(soma(1, 2)); // 3
/////////////////////////////
//Literals

var usuarioLiteral = 'Diego';
var idadeLiteral = 23;
console.log('O usuário ' + usuarioLiteral + ' possui ' + idadeLiteral + ' anos');
console.log("O usu\xE1rio ".concat(usuarioLiteral, " possui ").concat(idadeLiteral, " anos"));
