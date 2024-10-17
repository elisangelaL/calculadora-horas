// Função para adicionar tempo
document.getElementById('btn-add').addEventListener('click', () => {
    let h1 = parseInt(document.getElementById('floating_input').value) || 0;
    let m1 = parseInt(document.getElementById('m1').value) || 0;
    let s1 = parseInt(document.getElementById('s1').value) || 0;

    let h2 = parseInt(document.getElementById('h2').value) || 0;
    let m2 = parseInt(document.getElementById('m2').value) || 0;
    let s2 = parseInt(document.getElementById('s2').value) || 0;

    let resultH = h1 + h2;
    let resultM = m1 + m2;
    let resultS = s1 + s2;

    // Ajuste para quando segundos e minutos excedem 60
    if (resultS >= 60) {
        resultM += Math.floor(resultS / 60);
        resultS = resultS % 60;
    }
    if (resultM >= 60) {
        resultH += Math.floor(resultM / 60);
        resultM = resultM % 60;
    }

    // Atualiza os resultados nos campos de output
    document.getElementById('result-h').value = resultH;
    document.getElementById('result-m').value = resultM;
    document.getElementById('result-s').value = resultS;

    // Remove a mensagem de erro se houver
    document.getElementById('error-message').classList.add('hidden');
});

// Função para subtrair tempo
document.getElementById('btn-subtract').addEventListener('click', () => {
    let h1 = parseInt(document.getElementById('floating_input').value) || 0;
    let m1 = parseInt(document.getElementById('m1').value) || 0;
    let s1 = parseInt(document.getElementById('s1').value) || 0;

    let h2 = parseInt(document.getElementById('h2').value) || 0;
    let m2 = parseInt(document.getElementById('m2').value) || 0;
    let s2 = parseInt(document.getElementById('s2').value) || 0;

    if (h2 > h1 || (h2 === h1 && m2 > m1) || (h2 === h1 && m2 === m1 && s2 > s1)) {
        document.getElementById('error-message').classList.remove('hidden');
    } else {
        let resultH = h1 - h2;
        let resultM = m1 - m2;
        let resultS = s1 - s2;

        // Ajuste para quando segundos ou minutos são negativos
        if (resultS < 0) {
            resultM -= 1;
            resultS += 60;
        }
        if (resultM < 0) {
            resultH -= 1;
            resultM += 60;
        }

        // Atualiza os resultados nos campos de output
        document.getElementById('result-h').value = resultH;
        document.getElementById('result-m').value = resultM;
        document.getElementById('result-s').value = resultS;

        // Remove a mensagem de erro
        document.getElementById('error-message').classList.add('hidden');
    }
});

// Função para resetar o formulário
document.getElementById('btn-reset').addEventListener('click', () => {
    // Limpa todos os campos de input
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = '';
    });

    // Esconde a mensagem de erro
    document.getElementById('error-message').classList.add('hidden');
});

// Função para guardar o resultado
document.getElementById('btn-save').addEventListener('click', () => {
    let resultH = document.getElementById('result-h').value;
    let resultM = document.getElementById('result-m').value;
    let resultS = document.getElementById('result-s').value;

    // Transfere o resultado para os primeiros campos para realizar novas operações
    document.getElementById('floating_input').value = resultH;
    document.getElementById('m1').value = resultM;
    document.getElementById('s1').value = resultS;

    // Limpa o segundo conjunto de inputs
    document.getElementById('h2').value = '';
    document.getElementById('m2').value = '';
    document.getElementById('s2').value = '';

    // Limpa os campos de resultado
    document.getElementById('result-h').value = '';
    document.getElementById('result-m').value = '';
    document.getElementById('result-s').value = '';
});
