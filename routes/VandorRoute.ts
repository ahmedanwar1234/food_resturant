import express,{Request,Response,NextFunction}from 'express'
import { AddFood, GetFoods, GetVandorProfile, UpdateVandorProfile, UpdateVandorServices, VandorLogin } from '../controllers/VandorController';
import { Authonticate } from '../middlewares';
import multer from 'multer'


const router=express.Router();


router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.json({message:" hello fuckermother   from vandorRouter"})
})
router.post('/login',VandorLogin)
;
router.use(Authonticate)
router.patch('/profile',UpdateVandorProfile)
router.get('/profile',GetVandorProfile)
router.patch('/service',UpdateVandorServices)

router.post('/food',AddFood)
router.get('/foods',GetFoods)

export {router as VandorRoute}
