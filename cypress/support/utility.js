class Utility {

    // retorna a data de hoje
    dataAtual() {
        var atual = new Date();

        var data = new Date(atual.getTime());
        data.setDate(atual.getDate());

        var dd = data.getDate();
        var mm = data.getMonth() + 1;
        var yyyy = data.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var data_ok = dd + '/' + mm + '/' + yyyy;

        return data_ok;
    }

    randomDate(start, end) {

        var data = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return data.toLocaleDateString();
    }

    dataPassada(dias) {
        var atual = new Date();

        var data = new Date(atual.getTime());
        data.setDate(atual.getDate() - dias);

        var dd = data.getDate();
        var mm = data.getMonth() + 1;
        var yyyy = data.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var data_ok = dd + '/' + mm + '/' + yyyy;

        return data_ok;
    }

    dataFutura(dias) {
        var atual = new Date();

        var data = new Date(atual.getTime());
        data.setDate(atual.getDate() + dias);

        var dd = data.getDate();
        var mm = data.getMonth() + 1;
        var yyyy = data.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var data_ok = dd + '/' + mm + '/' + yyyy;

        return data_ok;
    }

    dataPassadaFormatoAMD(dias) {
        var atual = new Date();

        var data = new Date(atual.getTime());
        data.setDate(atual.getDate() - dias);

        var dd = data.getDate();
        var mm = data.getMonth() + 1;
        var yyyy = data.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var data_ok = yyyy + '-' + mm + '-' + dd;

        return data_ok;
    }

    dataAtualFormatoAMD() {
        var atual = new Date();

        var data = new Date(atual.getTime());
        data.setDate(atual.getDate());

        var dd = data.getDate();
        var mm = data.getMonth() + 1;
        var yyyy = data.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var data_ok = yyyy + '-' + mm + '-' + dd;

        return data_ok;
    }
}
module.exports = Utility
