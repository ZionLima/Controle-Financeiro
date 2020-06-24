function editarConta(id){
    const contas = JSON.parse(localStorage.getItem("contas"));
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Confirmar',
        showCancelButton: true,
      }).queue([
        {
          title: 'Alteração',
          text: 'Insira o nome novo:',
        }
      ]).then((result) => {
          if (result.value)
          {
            const index = contas.findIndex(i => i.id ==  id)
            contas[index].nome = result.value[0]
            localStorage.setItem("contas", JSON.stringify(contas))
            location.reload();
            console.log(document.getElementById("teste".value))
          }
      })
}

function apagarConta(id){
    const contas = JSON.parse(localStorage.getItem("contas"));
    contas.splice(contas.findIndex(i => i.id == id),1)
    localStorage.setItem("contas", JSON.stringify(contas))
    location.reload();
}

function listar(){

    let linha = "";
    const contas = JSON.parse(localStorage.getItem("contas"))
    contas.forEach(element => {
        linha += "<tr>" +
            "<th>" + element.id + "</th>"+
            "<th>" + element.nome + "</th>"+
            "<th>" + element.tipo + "</th>"+
            "<th>" + element.categoria + "</th>"+
            "<th>" + "<button onclick='editarConta(" + element.id + ")' class='btn btn-outline-success'>" + "<i class='fa fa-edit'></i>" + "</button>" + "</th>"+
            "<th>" + "<button onclick='apagarConta(" + element.id + ")' class='btn btn-outline-danger'>"+ "<i class='fa fa-trash'></i>" + "</button>" + "</th>"
        document.getElementById("tbody").innerHTML = linha;
    });

    const categorias = JSON.parse(localStorage.getItem("categorias"));
    linha = ""

    categorias.forEach(element => {
        linha += "<option value=" + element.nome + ">" + element.nome + "</option>"
        document.getElementById("categoria").innerHTML = linha
    });
    
    
}

function cadastrarConta(){
    const nome = document.getElementById("nome").value
    const tipo = document.getElementById("tipo").value
    if(nome && nome.replace(/\s/g, ''))
    {
        const contas = JSON.parse(localStorage.getItem("contas"))
        categoria = document.getElementById("categoria").value

        const conta = {
            id: (Math.random() * 10000).toFixed(),
            nome: nome,
            tipo: tipo,
            categoria: categoria,
        }
        
        
        contas.push(conta);
        localStorage.setItem("contas", JSON.stringify(contas))
        location.reload()
    }else
    {
        alert("Valor Inválido!")
    }
    
}

function limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("nome").focus();
}