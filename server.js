const express = require('express');
const path = require('path');
const app = express();

//이 코드 넣고 시작하셔야 리액트와 nodejs 서버간 ajax 요청 잘됩니다. 
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.listen(8080, function () {
    console.log('listening on 8080')
});

app.use(express.static(path.join(__dirname, 'mystock-fe/build')));

app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/mystock-fe/build/index.html'));
});


//항상 가장하단에
app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/mystock-fe/build/index.html'));
});