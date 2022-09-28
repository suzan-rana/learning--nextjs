// import dbConnect from '../../../db/dbConnect'
// dbConnect();

// import Hero from '../../../models/hero'

// //get all records, post a new record == get and post to same route: 
// // api/hero

// export default async (req, res) => {
//     const { method } = req; // req.method

//     switch( method ) {
//         case 'GET' : 
//                 try {
//                     const heros = await Hero.find({})
//                     res.status(200).json({ success: true,
//                         hero: heros
//                     })

//                 }catch(error) {
//                     console.error("Something went wrong")
//                     res.status(400).json({success:false})
//                 }

//         case 'POST' : 
//         try {
//             const heros = await Hero.create(req.body)
//             res.status(200).json({ success: true,
//                 hero: heros
//             })
//         }catch(error) {
//             console.log("Something went wrong" + error.message)
//             res.status(400).json({success:false})
//         }

        
//     }
// }