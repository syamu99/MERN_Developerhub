const Employee = require("../Models/Employee");
// eployee properties ni stroe cheyadaniki controller ni create chestham
const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const employee = new Employee({
      name,
      email,
      phone,
      city,
    });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.log("there is an error:", error);
    res.status(500).json({ message: "server error" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (error) {
    console.log("there is an error:", error);
    res.status(500).json({ message: "Server error message" });
  }
};

//individual function

const singleEmployee = async(req, res) => {
    try{
        const employee = await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(employee)
    }catch (error) {
        console.log("there is an error:", error);
        res.status(500).json({ message: "Server error message" });
    }
}

const updateEmployee = async(req,res)=>{
    try{

        const { name, email, phone, city } = req.body;
        const myEmployee = await Employee.findByIdAndUpdate(req.params.id, {name,email,phone,city})

        if(!myEmployee){
            return res.status(404).json({message: "emeploye not found"})
        }

    }catch (error) {
        console.log("there is an error:", error);
        res.status(500).json({ message: "Server error message" });
    }
    
}
module.exports = { createEmployee, getEmployees, singleEmployee, updateEmployee }
