import categoryRouter from './routes/categoryRoutes';

export default (app)  => {
  app.use('/', categoryRouter);
};
