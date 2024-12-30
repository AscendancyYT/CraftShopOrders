import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const TOKEN = "7711745813:AAHazLKxh9Z0OTMwwQGPxtlGYlVd7U0ZtCc"

app.use(cors());

app.get('/getUpdates', async (req, res) => {
  try {
      // Устанавливаем offset в -1 для получения всех обновлений
      const response = await fetch(`https://api.telegram.org/bot${TOKEN}/getUpdates?offset=-1`);
      const data = await response.json();

      console.log('Полученные данные от Telegram:', JSON.stringify(data, null, 2)); // Логируем данные

      if (data.result) {
          data.result = data.result.slice(-50); // Ограничиваем до последних 50 сообщений
      }

      res.json(data);
  } catch (error) {
      console.error('Ошибка при получении данных с Telegram:', error);
      res.status(500).send('Ошибка API Telegram');
  }
});



app.listen(3000, () => console.log('Сервер запущен на порту 3000'));
