const dotenv = require('dotenv'); //const dotenv harus paling atas
dotenv.config();
const PORT = process.env.PORT || 2000; //otomatis mengakses port dr baris 1 file.env, 2000 itu alternative port kalo yg di .env ga kebaca
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('<h1>WELCOME TO API</h1>')
});

app.listen(PORT, () => console.log(`Running API ${PORT}`));

