function editarCategoria(id){
    const categorias = JSON.parse(localStorage.getItem("categorias"));
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
        categorias[categorias.findIndex(i => i.id ==  id)].nome = result.value[0]
        localStorage.setItem("categorias", JSON.stringify(categorias))
        location.reload();
      })
}

function apagarCategoria(id){
    const categorias = JSON.parse(localStorage.getItem("categorias"));
    categorias.splice(categorias.findIndex(i => i.id == id),1)
    localStorage.setItem("categorias", JSON.stringify(categorias))
    location.reload();
}

function listar(){
    let linha = "";
    const categorias = JSON.parse(localStorage.getItem("categorias"));
    categorias.forEach(element => {
        linha += "<tr>" +
            "<th>" + element.id + "</th>"+
            "<th>" + element.nome + "</th>"+
            "<th>" + "<button onclick='editarCategoria(" + element.id + ")' class='btn btn-outline-success'>" + "<i class='fa fa-edit'></i>" + "</button>" + "</th>"+
            "<th>" + "<button onclick='apagarCategoria(" + element.id + ")' class='btn btn-outline-danger'>"+ "<i class='fa fa-trash'></i>" + "</button>" + "</th>"
        document.getElementById("tbody").innerHTML = linha;
    });
}

function cadastrarCategoria()
{
    const input = document.getElementById("nome").value
    if(input && input.replace(/\s/g, ''))
    {
        let nome = input
        const categorias = JSON.parse(localStorage.getItem("categorias"));
        const categoria = {
            id: (Math.random() * 10000).toFixed(),
            nome: nome
        }
        categorias.push(categoria)
        localStorage.setItem("categorias", JSON.stringify(categorias))
    }else{
        alert("Valor Inválido!")
    }
    location.reload();
}