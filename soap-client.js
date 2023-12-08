const axios = require('axios');

async function getValutes() {
    const url = 'http://localhost:3000/soap';  // Адрес SOAP-сервера/прокси

    const soapRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
                            xmlns:web="http://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx">
                            <soapenv:Header/>
                            <soapenv:Body>
                                <web:getValutes/>
                            </soapenv:Body>
                        </soapenv:Envelope>`;

    const headers = {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx/getValutes'
    };

    try {
        const response = await axios.post(url, soapRequest, { headers });
        const responseData = response.data;

        // Обработка данных и преобразование в JSON
        // Ваш код здесь
    } catch (error) {
        console.error('SOAP request error:', error);
    }
}

getValutes();