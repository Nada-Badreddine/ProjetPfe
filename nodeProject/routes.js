import categoryRouter from './routes/categoryRoutes';
import productRouter from './routes/productRoutes';
import favorisRouter from './routes/favorisRoutes';
import userRouter from './routes/userRoutes';



export default (app)  => {
  app.use('/', categoryRouter);
  app.use('/', productRouter);
  app.use('/', favorisRouter);
  app.use('/', userRouter);
};





