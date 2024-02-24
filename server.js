import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js';
import connectDB from './config/db.js';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import path from 'path';
//configuration env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css');
  }
  next();
});
// app.use(express.static(path.join(__dirname, './client/build')));

//routes

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// app.use("*",function(req,res){
//   res.sendFile(path.join(__dirname,'./client/build/index.html'));
// })

//PORT
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
  console.log(
    `Server Running on mode ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});
