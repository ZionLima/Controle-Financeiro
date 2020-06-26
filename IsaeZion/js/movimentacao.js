
let receitas = 0
let despesas = 0
let saldo = 0

function cadastrarMovimento(){
  debugger
  const conta = document.getElementById("conta").value;
  const valor = document.getElementById("valor").value;

  const movimentos = JSON.parse(localStorage.getItem("movimentos"))

  const movimento = {
    id: (Math.random() * 10000).toFixed(),
    conta: conta,
    valor: valor,
}

receitas += parseFloat(valor)
saldo = (receitas - despesas)

movimentos.push(movimento);
localStorage.setItem("movimentos", JSON.stringify(movimentos))

document.getElementById('receitas').innerHTML = `R$${receitas}`
document.getElementById('despesas').innerHTML = `R$${despesas}`
document.getElementById('saldo').innerHTML = `R$${saldo}`


  listar();
}

function listar(){
    let linha = "";
    const movimentos = JSON.parse(localStorage.getItem("movimentos"))
    movimentos.forEach(movimento => {
      row = document.getElementById("tbody");
       linha += "<tr>"+
                "<td id='tdid'>"+movimento.id +"</td>"+
                "<td id='tdconta'>"+movimento.conta +"</td>"+
                "<td id='tdvalor'>"+movimento.valor +"</td>"+
                "<th>" + "<button onclick='editarMovimento(" + movimento.id + ")' class='btn btn-outline-success'>" + "<i class='fa fa-edit'></i>" + "</button>" + "</th>"+
                "<th>" + "<button onclick='apagarMovimento(" + movimento.id + ")' class='btn btn-outline-danger'>"+ "<i class='fa fa-trash'></i>" + "</button>" + "</th>"
              +"</tr>";
      row.innerHTML = linha;        
    });

    const contas = JSON.parse(localStorage.getItem("contas"));
    linha = ""

    contas.forEach(element => {
        linha += "<option value=" + element.nome + ">" + element.nome + "</option>"
        document.getElementById("conta").innerHTML = linha
    });


  }

function apagarMovimento(id){
  const movimentos = JSON.parse(localStorage.getItem("movimentos"));
  movimentos.splice(movimentos.findIndex(i => i.id == id),1)
  localStorage.setItem("movimentos", JSON.stringify(movimentos))
  location.reload();
}