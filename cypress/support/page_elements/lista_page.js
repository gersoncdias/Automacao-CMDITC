class listaPage {
    constructor() {

        this.txt_titulo = 'h1'
        this.painel = '.panel'
        this.tc = '[href="/paciente/laudo/exame?paciente_id=39&tipo_id=2"]'
        this.buscar_pacientes = '.input-group > :nth-child(4)'
        this.modal_buscar = '.modal-header'
        this.input_buscar = 'input#pacienteform-nome'
        this.select_nome = 'div.tt-suggestion.tt-selectable:contains("GERSON DA COSTA DIAS")'
        this.btn_enviar = 'button.btn.btn-primary.pull-right:contains("Enviar")'
        this.btn_fechar = 'button.btn.btn-default[data-dismiss="modal"]:contains("Fechar")'
        this.msg_erro = '.help-block'
        this.msg_sucesso = '#w0-success-0'
        this.delete = 'tr.wsaGrid.info'
        this.checkox = 'input.kv-row-checkbox'
        this.find = 'input.kv-row-checkbox'
        this.btn_delete = '.modalDeletarButton'
        this.modal_confirma = 'div.modal-content'
        this.confirma_detelar = '.bootstrap-dialog-title'
        this.btn_modal_confirma_deletar = 'button:contains("Ok")'
    }
}
module.exports = listaPage