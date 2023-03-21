class Produto {
    constructor() {
        this.id = 1
        this.arrayLista = []

    }
    salvar() {
        let produto = this.lerDados()
        if(this.validaCampos(produto)) {
            this.adicionar(produto)

        }
        this.listaTabela()
        this.cancelar()
    }
    lerDados() {
        let produto = {}
        produto.id = this.id
        produto.periodo = document.getElementById("periodo").value 
        produto.disciplina = document.getElementById("disciplina").value 
        produto.cht = document.getElementById("cht").value 
        produto.chp = document.getElementById("chp").value 
        produto.chtotal = document.getElementById("chtotal").value 

        return produto

    }
    adicionar(produto) {
        this.arrayLista.push(produto)
        this.id++

    }
    listaTabela() {
        let tbody = document.getElementById("tbody")
        tbody.innerText = ''

        for(let i = 0; i < this.arrayLista.length; i++) {
            let tr = tbody.insertRow()
             
            let td_id = tr.insertCell()
            let td_periodo = tr.insertCell()
            let td_disciplina = tr.insertCell()
            let td_cht = tr.insertCell()
            let td_chp = tr.insertCell()
            let td_chtotal = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayLista[i].id
            td_periodo.innerText = this.arrayLista[i].periodo
            td_disciplina.innerText = this.arrayLista[i].disciplina
            td_cht.innerText = this.arrayLista[i].cht
            td_chp.innerText = this.arrayLista[i].chp
            td_chtotal.innerText = this.arrayLista[i].chtotal

            let imgDelet = document.createElement('img')

            imgDelet.src = "img/excluir.png"
            imgDelet.setAttribute("onclick", "produto.deletar("+ this.arrayLista[i].id +")")

            td_acoes.appendChild(imgDelet)

        }
    }
    validaCampos(produto) {
        let msg = ''
        if(produto.periodo == '') {
            msg += "[ERRO]Insira o nome do produto! \n"
        }
        if(produto.disciplina == '') {
            msg += "[ERRO]Insira o nome do produto! \n"
        }
        if(produto.cht == '') {
            msg += "[ERRO]Insira o valor! \n"
        }
        if(produto.chp == '') {
            msg += "[ERRO]Insira o valor! \n"
        }
        if(produto.chtotal == '') {
            msg += "[ERRO]Insira o valor! \n"
        }
        if(msg != '') {
            alert(msg)
            return false
        }
        return true
        
    }
    cancelar() {
        document.getElementById('periodo').value = ''
        document.getElementById('disciplina').value = ''
        document.getElementById('cht').value = ''
        document.getElementById('chp').value = ''
        document.getElementById('chtotal').value = ''
        
    }
    deletar(id)  {
        let tbody = document.getElementById('tbody')

        for(let i = 0; i < this.arrayLista.length; i++) {
            if(this.arrayLista[i].id == id) {
                this.arrayLista.splice(i, 1)
                tbody.deleteRow(i)

            }
        }
    }

    
}

let produto = new Produto()


