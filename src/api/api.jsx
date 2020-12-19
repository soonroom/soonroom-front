import axios from 'axios';

const API = axios.create({
  withCredentials: true,
});
const domain = 'http://securityfirst.co.kr:3000';

export const getRoomList = API.get(`${domain}/api/roomlist`);
