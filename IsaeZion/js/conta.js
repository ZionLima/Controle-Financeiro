const contas = []; 

function salvarConta(){
  const descricao = document.getElementById("descricao").value;
  const tipo = document.getElementById("tipo").value;
  const categoria = document.getElementById("categoria").value;
  
  let id = contas.length;

  const conta = {id: id++,descricao,tipo,categoria};
  contas.push(conta);

  window.localStorage.setItem("contas",JSON.stringify(contas));   

  Swal.fire({
    
    icon: 'success',
    title: 'Categoria cadastrada com sucesso!',
    showConfirmButton: false,
    timer: 1500
  });
  listarConta();
}

function listarConta(){
    let linha = "";
    contas.forEach(conta => {
      row = document.getElementById("tbody");
       linha += "<tr>"+
                "<td id='tdid'>"+conta.id +"</td>"+
                "<td id='tddescricao'>"+conta.descricao +"</td>"+
                "<td id='tdtipo'>"+conta.tipo +"</td>"+
                "<td id='tdcategoria'>"+conta.categoria +"</td>"+
                "<td id='tdacoes'><button class='btn btn-outline-danger'onclick='apagarUsuario("+conta.id+")'><i class='fa fa-trash'></i></button></td>"
              +"</tr>";
      row.innerHTML = linha;        
    });
   }

   