import express from 'express'
import authUser from '../middlewares/authUser';
import { getAllOrders, getUserOrders, placeOrderCOD } from '../controllers/orderController';
import authSeller from '../middlewares/authSeller';

const orderRouter=express.Router();

orderRouter.post('/cod',authUser,placeOrderCOD)
orderRouter.post('/user',authUser, getUserOrders)
orderRouter.post('/cod',authSeller,getAllOrders)

export default orderRouter

