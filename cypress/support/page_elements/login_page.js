class loginPage {
    constructor() {

        this.campo_usuario = '#loginform-username'
        this.campo_senha = '#loginform-password'
        this.txt_titulo = '.login-box-body > .login-box-msg'
        this.btn_login = '.btn'
        this.msg_error = '.field-loginform-password > .help-block'
        this.user_msg_erro = '.field-loginform-username > .help-block'
        this.link_esqueci_senha = '.login-box-body > a'
        this.modal_redefinir_senha = '.login-box-body'
        this.btn_voltar_login = '.login-box-body > a'
        this.txt_redefinir_senha = '.text-teal'
        this.input_txt_reset_email = '#passwordresetrequestform-email'
        this.inviar_email_reset_senha = '#passwordresetrequestform-email'
        this.msg_error_email = '.help-block'
    }
}
module.exports = loginPage