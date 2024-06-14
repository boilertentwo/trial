import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5343;

app.use(cors());

app.get('/',(req,res)=>{
    res.send("up and running!")
})


app.use('/static', express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
