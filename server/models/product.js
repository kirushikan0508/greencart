import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    descriptio: {
        type: Array,
        required: true,
        
    },
    price: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },
    image: {
        type: Array,
        required:true,
    },
     category: {
        type: String,
        required:true,
    },
     instock: {
        type: Boolean,
        default:true,
    },

    
    
}, { timestamps: true });

const product = mongoose.models.product || mongoose.model("product", productSchema);

export default product