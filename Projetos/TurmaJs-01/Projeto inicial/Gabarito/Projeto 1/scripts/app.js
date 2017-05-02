var funcionarios = [];


function OpenForm(){
	document.getElementById("new").classList.remove("hidden");
	document.getElementById("new").classList.add("visible");
	document.getElementById("all").classList.remove("visible");
	document.getElementById("all").classList.add("hidden");
	document.getElementById("btn-novo").classList.add("active");
	document.getElementById("btn-todos").classList.remove("active");
}

function OpenAll(){
	document.getElementById("all").classList.remove("hidden");
	document.getElementById("all").classList.add("visible");
	document.getElementById("new").classList.add("hidden");
	document.getElementById("new").classList.remove("visible");
	document.getElementById("btn-todos").classList.add("active");
	document.getElementById("btn-novo").classList.remove("active");
}

window.onload = function(){
	document.cadastro.onsubmit = function(){
		if(CadastroValido())
			CadastraFuncionario();
		else
			ExibeErro("Dados inválidos.");
		return false;
	}
}

function CadastroValido(){
	if (document.cadastro.nome.value != "" &&
		document.cadastro.email.value != "" &&
		document.cadastro.email.value.indexOf("@") > -1 &&
		document.cadastro.cargo.value != "") 
	{	
		return true;
	}
	else{
		return false;
	}
}

function ExibeErro(erro){
	alert(erro);
	console.log(erro);
}

function CadastraFuncionario(){
	funcionarios.push({
		Nome: document.cadastro.nome.value,
		Email: document.cadastro.email.value,
		Cargo: document.cadastro.cargo.value
	})

	RenderizaFuncionarios();
}

function RenderizaFuncionarios(){
	var htmlTable = "";
	for (var i = 0; i < funcionarios.length; i++) {
		htmlTable += AdicionaLinha(funcionarios[i]);
	}
	document.getElementById("table-body").innerHTML = htmlTable;
	LimpaFormulario();
	OpenAll();
}

function AdicionaLinha(funcionario){
	var html = "<tr>";
	html += "<td>" + funcionario.Nome + "</td>";
	html += "<td>" + funcionario.Cargo + "</td>";
	html += "<td>" + funcionario.Email + "</td>";
	html += "</tr>";

	return html;
}

function LimpaFormulario(){
	document.cadastro.reset();
}