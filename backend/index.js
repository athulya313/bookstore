const express= require("express");
const app= express();
const cors=require("cors")
const mongoose=require("mongoose");
const Book=require("./model/Books.js")
const multer=require("multer")

const path = require('path');
const port=4000;

mongoose.connect("mongodb+srv://athulyaathu313:TjdPU8ASTEKLMU5E@cluster0.oz8l2ut.mongodb.net/?retryWrites=true&w=majority")


app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000', 
    methods:['GET','POST','DELETE','PUT'],
    
}
)); 
app.use('/uploads',express.static(__dirname+'/uploads'))
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      const cleanedFilename = file.originalname.replace(/[()]/g, '').trim();
      const filename = path.basename(cleanedFilename);
      cb(null, filename);
    },
  });
const upload=multer({storage})


app.post('/upload', upload.single('image'), (req, res) => {
    const file = req.file;
    
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });  
    }
     
    const filePath = `uploads/${file.filename}`;

    res.json({ path: filePath });  
  });     
 app.get("/books",async(req,res)=>{
    const books=await Book.find()
    res.json(books)
 })

app.post("/add",async(req,res)=>{
    const{name,author,description,image,price}=req.body
   const Bookdetails= await Book.create({name,author,description,image,price})
   res.json(Bookdetails)
    
    
})
app.delete("/delete/:id",async(req,res)=>{
   const{id}=req.params
  await Book.findByIdAndRemove(id)
  res.json({message:"book deleted successfully"})

})
app.get("/getdetails/:id",async(req,res)=>{
  const {id}=req.params;
  
 const details= await Book.findById(id)
   res.json(details)
})
app.put("/updatepage/:id",async(req,res)=>{
   const{id}=req.params
   const { name, author, description, price, image } = req.body;
   const details=await Book.findByIdAndUpdate(id)
   const updatedBook = await Book.findByIdAndUpdate(
    id, { name, author, description, price, image } );
   res.json(details)
     
})

app.listen(port,()=>{
    console.log(`connection established on port:${port}`); 
})   