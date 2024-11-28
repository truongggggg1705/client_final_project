import { io } from 'socket.io-client';

const socket = io('https://sever-final-project.onrender.com', {
  transports: ['websocket'],
  auth: {
    token: localStorage.getItem('accessToken'), 
  },
});

export default socket;