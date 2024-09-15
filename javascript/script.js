document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const month = document.getElementById('month').value;

    // Dados que serão enviados para a planilha
    const data = {
        player: playerName,
        month: month,
        paymentDate: new Date().toISOString().split('T')[0]
    };

    // Exemplo de como integrar com a API do Google Sheets
    fetch('https://sheet.best/api/sheets/756116662024-8qsm4uu74v20vimdilrl95d64pomgb6f.apps.googleusercontent.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        alert('Pagamento registrado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao registrar pagamento:', error);
    });
});

// Função para carregar a API do Google e enviar dados para o Google Sheets
function initClient() {
    gapi.client.init({
        'apiKey': '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', // Sua API Key
        'clientId': '756116662024-8qsm4uu74v20vimdilrl95d64pomgb6f.apps.googleusercontent.com', // Seu Client ID
        'scope': 'https://www.googleapis.com/auth/spreadsheets',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    }).then(function () {
        // Pronto para usar a API
        console.log('Google API pronta');
    }, function(error) {
        console.log(JSON.stringify(error, null, 2));
    });
}

// Carregar a biblioteca da API do Google
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

// Função para enviar dados para o Google Sheets
function appendData() {
    const values = [
        ["Joãozinho", "Janeiro", "30.00", new Date().toISOString().split('T')[0]]
    ];

    const body = {
        values: values
    };

    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: '1MZwmMdr1Rx47pu-nQZnXID2ITk1DCoPgIkvzFpttLLQ', // ID da sua planilha
        range: 'Sheet1!A1:D1', // Onde os dados serão inseridos
        valueInputOption: 'RAW',
        resource: body
    }).then((response) => {
        const result = response.result;
        console.log(`${result.updates.updatedCells} células atualizadas.`);
    });
}

