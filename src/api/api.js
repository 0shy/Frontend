import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://2221-116-47-108-171.ngrok-free.app/', // 백엔드의 기본 URL
  timeout: 5000, // 요청 시간 초과 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getData: () => instance.get('/api/data'),
  // 다른 API 호출을 추가할 수 있음

  
};

export default api;