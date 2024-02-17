import React, { useEffect } from 'react';
import api from './api'; // 위에서 작성한 api 파일을 import

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getData();
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


};

export default MyComponent;