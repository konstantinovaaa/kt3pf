const express = require('express');
const { soap } = require('easy-soap-request');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.text({ type: 'text/xml' }));

app.post('/soap', async (req, res) => {
    // Обработка SOAP-запроса от клиента
    const soapRequest = req.body;

    // Выполнение операции getValutes
    const url = 'http://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx?wsdlъ';
    const headers = {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx/getValutes'
    };

    try {
        const { response } = await soap(url, headers, soapRequest);
    
        // Преобразование ответа в JSON и отправка обратно клиенту
        // Пример (после выполнения операции getValutes):
        const responseData = [
            { "code": "R01010", "name": "Австралийский доллар", "value": 16.0102 },
            // Другие данные...
        ];
    
        res.status(200).json(responseData);
    } catch (error) {
        console.error('SOAP request error:', error);
    
        // Выведите детали ошибки в консоль
        console.error(error);
    
        res.status(500).send('Internal Server Error');
    } res.status(500).send('Internal Server Error');
    }
);

app.listen(port, () => {
    console.log(`SOAP server listening at http://localhost:${port}`);
});