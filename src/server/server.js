const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // 클라이언트의 주소로 변경
  credentials: true, // 요청에 자격 증명(credentials) 허용
}));
app.use(bodyParser.json());


// POST 요청을 처리할 라우트 및 핸들러 설정
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // 여기에서 실제로 회원가입 로직을 처리하고 응답을 보낼 수 있습니다.
  // 이 예제에서는 간단히 받은 데이터를 콘솔에 출력하는 것으로 대체합니다.
  console.log('Received signup request:', { username, password });

  // 클라이언트에 응답 전송 (예: 성공 또는 실패에 따라 적절한 응답을 보낼 수 있음)
  res.status(200).json({ message: 'Signup request received successfully' });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});