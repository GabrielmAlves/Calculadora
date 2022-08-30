var _valor = 0
var _tipo = 0
var _ponto = 0
function calcular(tipo, valor){
        if(tipo === 'acao'){
          if(valor !== '.'){
            _ponto = 0
          }

          if(valor === 'c'){
            //erase the display
            document.getElementById('display').value = ''
            _valor = 0
            _tipo = 0
          }

          else if(_tipo == 0){
            _tipo = 1
          if (valor === '-') { 
              document.getElementById('display').value += valor
          }

          if(valor === '.' && _ponto == 0){
            _ponto = 1
            document.getElementById('display').value += valor
          }else if(_ponto == 1){
            _tipo = 0
          }

          if(valor === '='){
            var value_field = eval(document.getElementById('display').value)
            document.getElementById('display').value = value_field
            _tipo = 0
            if (
                typeof parseFloat(value_field) === 'number' &&
                !Number.isNaN(value_field) &&
                !Number.isInteger(value_field)
              ) {
                _ponto = 1;
              }
          }

          if(_valor == 1 && (valor === '*' || valor === '/' || valor === '+')){
          console.log(_valor)
          document.getElementById('display').value += valor
        }
      }


        } else if(tipo === 'valor'){
          _valor = 1
          _tipo = 0
          document.getElementById('display').value += valor
        }
        

      }