$(function(){
    var operacao = "A";
    var indice_selecionado = -1;
    var tbClientes = localStorage.getItem("tbClientes");
    tbClientes = JSON.parse(tbClientes);
    if(tbClientes == null)
    tbClientes = [];
});

function Adicionar(){
    var cliente = JSON.stringify({
        Codigo   : $("#txtCodigo").val(),
        Nome     : $("#txtNome").val(),
        Telefone : $("#txtNascimento").val(),
        Sexo : $("#textSexo").vaç(),
        Email    : $("#txtEmail").val(),
        Tell : $("txtTelefone").val(),
        Endereço : $("txtResidencia").val(),
        ITratamento : $("txtItratamento").val(),
        FTratamento : $("txtFtratamento").val()


    });
    tbClientes.push(cliente);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    return true;
}

function Editar(){
    tbClientes[indice_selecionado] = JSON.stringify({
      Codigo   : $("#txtCodigo").val(),
      Nome     : $("#txtNome").val(),
      Telefone : $("#txtNascimento").val(),
      Email    : $("#txtEmail").val(),
      Sexo : $("#textSexo").val(),
      Tell : $("txtTelefone").val(),
      Endereço : $("txtResidencia").val(),
      ITratamento : $("txtItratamento").val(),
      FTratamento : $("txtFtratamento").val()
        });//Altera o item selecionado na tabela
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}

function Excluir(){
    tbClientes.splice(indice_selecionado, 1);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro excluído.");
}

function Listar(){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Codigo</th>"+
        "   <th>Nome</th>"+
        "   <th>DataDeNascimento</th>"+
        "   <th>Telefone</th>"+
        "   <th>Email</th>"+
        "   <th>Sexo>"+
        "   <th>Endereco>"+
        "   <th>ITratamento"+
        "   <th>FTratamento"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbClientes){
        var cli = JSON.parse(tbClientes[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td><img src='edit.png' alt='"+i+"'
              class='btnEditar'/><img src='delete.png' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("<td>"+cli.Codigo+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.DataDeNascimento+"</td>"
        $("#tblListar tbody").append("<td>"+cli.Telefone+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Sexo+"<td>");
        $("#tblListar tbody").append("<td>"+cli.Endereco+"</td>");
        $("#tblListar tbody").append("<td>"+cli.ITratamento+"</td>");
        $("#tblListar tbody").append("<td>"+cli.FTratamento+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}

$("#frmCadastro").on("submit",function(){
    if(operacao == "A")
        return Adicionar();
    else
        return Editar();
});



$("#tblListar").on("click", ".btnEditar", function(){
    operacao = "E";
    indice_selecionado = parseInt($(this).attr("alt"));
    var cli = JSON.parse(tbClientes[indice_selecionado]);
    $("#txtCodigo").val(cli.Codigo);
    $("#txtNome").val(cli.Nome);
    $("#txtTelefone").val(cli.Telefone);
    $("#txtEmail").val(cli.Email);
    $("#txtNascimento").val(cli.DataDeNascimento);
    $("textSexo").val(cli.Sexo);
    $("txtResidencia").val(cli.Endereco);
    $("#txtItratamento").val(cli.ITratamento);
    $("#txtFtratamento").val(cli.FTratamento)
$("#txtCodigo").attr("readonly","readonly");
    $("#txtNome").focus();
});

$("#tblListar").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
});
