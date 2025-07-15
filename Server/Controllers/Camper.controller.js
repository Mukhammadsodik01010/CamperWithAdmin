const Product = require("../Modules/CamperSchema");

const CaravanAdd = async (req, res) => {
  const {
    type,
    name,
    brand,
    ranking,
    cost,
    company,
    lycynce,
    people,
    location,
    year,
    description1,
    description2,
    description3,
    description4,
    description5,
  } = req.body;
  try {
    if(!name){
        return res.status(404).json({msg: "Write Product name first"})
    }
    const product = new Product({
      type,
      name,
      brand,
      ranking,
      cost,
      company,
      lycynce,
      people,
      location,
      year,
      description1,
      description2,
      description3,
      description4,
      description5,
    });
    await product.save()
    return res.status(200).json({msg: "Product saved Successfully", product})
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Failed sending new Caravan Product", error });
  }
};

const CaravanGetAll = async (req, res)=>{
    try {
    const product =  await Product.find()
    res.json(product)
    } catch (error) {
        return res
      .status(400)
      .json({ msg: "Failed getting all Caravan Product", error });
    }
}


const CaravanOneData = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
             return res.status(404).json({msg: "Error finding product by ID",})
        }
        res.json(product)
    } catch (error) {
          return res
      .status(400)
      .json({ msg: "Failed getting one Caravan Product", error });
    }
}

const CaravanUpdateById = async (req, res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        })
        if(!product){
            return res.status(404).json({msg: "Error editing product by ID",})
        }
        res.status(200).json({msg: "Product is updated"})
    } catch (error) {
        return res
      .status(400)
      .json({ msg: "Failed getting one Caravan Product", error });
    }
}


const CaravanDelete = async (req, res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(404).json({msg: "Error deleting product by ID",})
        }
        res.status(200).json({msg:"Product is deleted"})
    } catch (error) {
        return res
      .status(400)
      .json({ msg: "Failed getting one Caravan Product", error });
    }
}



module.exports = {CaravanAdd, CaravanGetAll, CaravanOneData, CaravanUpdateById, CaravanDelete}