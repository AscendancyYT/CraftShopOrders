const fetch = require('node-fetch');  // Используем node-fetch для выполнения HTTP запросов

exports.handler = async function(event, context) {
  const url = 'https://api.telegram.org/bot7711745813:AAHazLKxh9Z0OTMwwQGPxtlGYlVd7U0ZtCc/getUpdates';
  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),  // Возвращаем данные в формате JSON
  };
};
