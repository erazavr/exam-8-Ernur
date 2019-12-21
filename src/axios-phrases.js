import axios from 'axios'
const axiosPhrases = axios.create({
    baseURL: 'https://homework-ernur.firebaseio.com/'
});
export default axiosPhrases