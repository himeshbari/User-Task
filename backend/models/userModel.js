import  mongoose  from "mongoose";
const userSchema = mongoose.Schema(
    {
     
      firstName: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      }, 
      department: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      userId: {
        type: Number,
        required: true,
      },
      locationId: {
        type: String,
        required: true,
      },
      
    
    }
  
  );
  



const User = mongoose.model("User", userSchema);
export default User;
