// //  import the module.
// const proj = require("../modules/project");

// // define route handler.
// exports.project1 = async(req,res) =>{
//     try{
        
//         // extract title and descripation from request body
//         const{title,email,headline,p_descripation,budget} = req.body;
//         //create a new Todo obj and insert in DB
//         const response = await proj.create({title,email,headline,p_descripation,budget});
//    // send a json responce with a success flag
//    res.status(200).json(
//        {
//            success:true,
//            data:response,
//            message:'Entry Created Successfully'

//        }
//    );

//     }
//     catch(error){
//         console.error(err);
//         // console.log(err);
//         res.status(500)
//         .json(
//             {
//                 success:false,
//                  error:"internal server error",
//                 message: "server error", 
//             }
//         );
//     }
// }


// Import the project module
import proj from '../modules/project';

// Define route handler.
export const project1 = async (req, res) => {
    try {
        // Extract title and description from request body
        const { title, email, headline, p_descripation, budget } = req.body;

        // Create a new project object and insert it into the database
        const response = await proj.create({ title, email, headline, p_descripation, budget });

        // Send a JSON response with a success flag
        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry Created Successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: 'Server Error',
        });
    }
};

