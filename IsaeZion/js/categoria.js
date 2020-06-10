const categorias = [];

function salvarCategoria(){
  const nome = document.getElementById("nome").value;
  
  let id = categorias.length;

  const categoria = {id: id++,nome,};
  categorias.push(categoria);

  window.localStorage.setItem("categorias",JSON.stringify(categorias));   

  Swal.fire({
    
    icon: 'success',
    title: 'Categoria cadastrada com sucesso!',
    showConfirmButton: false,
    timer: 1500
  });
  listarCategoria();
}

function listarCategoria(){
    let linha = "";
    categorias.forEach(categoria => {
      row = document.getElementById("tbody");
       linha += "<tr>"+
                "<td id='tdid'>"+categoria.id +"</td>"+
                "<td id='tdnome'>"+categoria.nome +"</td>"+
                "<td id='tdacoes'><button class='btn btn-outline-danger'onclick='apagarUsuario("+categoria.id+")'><i class='fa fa-trash'></i></button></td>"
              +"</tr>";
      row.innerHTML = linha;        
    });
   }

   var selectValues = {
    "1": "test 1",
    "2": "test 2"
  };
  var $mySelect = $('#mySelect');
  //
  $.each(selectValues, function(key, value) {
    var $option = $("<option/>", {
      value: key,
      text: value
    });
    $mySelect.append($option);
  });