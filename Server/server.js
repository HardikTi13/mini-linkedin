const express = require('express');
const cors = require('cors');
const connectDB=require('./connection')
const allRoutes=require('./routes/AllRoutes')

const app = express();

app.use(cors());           
app.use(express.json());   

connectDB()

app.use('/api',allRoutes)

app.get('/', (req, res) => {
  res.send('Server is running!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
