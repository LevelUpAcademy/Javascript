//Criando o array para ser acessado globalmente
var items = [];

//Executando um metodo ao terminar de carregar o HTML
window.onload = function(){
	//Adicionando o comportamento de salvar um item
	//ao submeter o formulario
	AdicionaComportamentoFormulario();
}

function AdicionaComportamentoFormulario(){
	//Adicionando o comportamento no formulario
	document.cadastro.onsubmit = function(){
		//Verifico se o item está valido
		var valido = ValidarItem();
		if (valido) {
			AdicionarItem(document.cadastro.item.value);
		}
		else
		{
			ExibeErro("Item não preenchido corretamente");
		}

		return false;
	}
}

//Valida se o item a ser adicionado é valido
function ValidarItem(){
	if (document.cadastro.item.value == "") {
		return false;
	}
	else
	{
		return true;
	}
}

//Adiciona um item
function AdicionarItem(item){
	//Adicionando um item no array
	items.push(item);

	//Renderiza o array items na div items
	RenderizarTabela();

	//Limpa os campos do formulario após o cadastro
	LimparFormulario();
}

//Renderizar os itens do array na div items
function RenderizarTabela(){
	var minhaTabela = "";
	minhaTabela += "<table class='table'>";

	for(var i = 0; i < items.length; i++){
		minhaTabela += "<tr>";
		minhaTabela += "	<td>" + items[i] + "</td>";
		minhaTabela += "	<td>";
		minhaTabela += "		<button class='btn btn-warning' onclick='RemoveItem(" + i + ");'>X</button>"
		minhaTabela += "	</td>";
		minhaTabela += "</tr>";
	}
	
	minhaTabela += "</table>";

	document.getElementById("items").innerHTML = minhaTabela;
}

function RemoveItem(idItem){
	items.splice(idItem, 1);
	RenderizarTabela();
}

//Limpa os campos do formulario
function LimparFormulario(){
	document.cadastro.item.value = "";
}

//Metodo para tratamento de erros customizado
function ExibeErro(erro){
	console.log("Ocorreu um erro critico na sua aplicação. Detalhes: " + erro);
	alert("Ops, isto é constrangedor!");
}
