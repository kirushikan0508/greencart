import jwt from 'jsonwebtoken'

//login seller : /api/seller/login

export const sellerLogin= async (req, res)=>{
    

try{

    const {email, password} =req.body;

    if(password === process.env.sELLER_PASSWORD && email === process.env.SELLER_EMAIL){
    const token =jwt.sign({email},process.env.JWT_SECRET,{expiresIn: '7d'})

    res.cookie("sellarToken", token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        });

        return res.json({success: true, message:"Logged in"});


}else{
    return res.json({success: false, message:"invalide credentials"});

}

}catch(error){
    console.log(error.message);
        res.json({ sucess: false, message: error.message });

}
}

//check isAuth : /api/user/is-auth
export const isSellerAuth = async (req, res)=>{
    try{
       
        return res.json({sucess: true, })
    } catch(error){
        console.log(error.message);
        res.json({sucess:false, message:error.message});
    }
}

// logout seller: /api/seller/logout
export const sellerLogout = async(req, res)=>{
    try{
        res.clearCookie('sellerToken', {
            httpOnly:true
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' :'strict',
        });
        return res.json({sucess:true,message:"Logged Out"})

    }catch(error){
        console.log(error.message);
        res.json({sucess:false, message:error.message});

    }
}
