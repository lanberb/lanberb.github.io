const express = require('express');
const app = express();
// TODOリストを返す
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];
    // JSONを送信する
    res.json(todoList);
});