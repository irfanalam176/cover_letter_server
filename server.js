import app from "./app.js";
import cvRoutes from "./routes/cv.route.js";
import cors  from "cors"

app.use(cors())
app.use("/api/cv", cvRoutes);

app.get("/",(req,res)=>{
    res.json({message:"response is okk"})
})
app.listen(5000,()=>{
    console.log("running at port 5000");
    
});
