import React from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAccessToken } from "../../../../middleware/AuthProvider";

const Modal = ({ data, close }) => {
//   const {
//     imageUrl,
//     price,
//     address,
//     description,
//     numBedroom,
//     numWashrooms,
//     livingSpace,
//   } = data;
const AccessToken = useAccessToken();
const handleApplyNow = async() => {
  console.log(AccessToken);
  const response = await axios.post("http://localhost:8000/api/v1/drives/register",{
    "drive_id":data._id
},{
  headers: {
    'Authorization': `Bearer ${AccessToken}`
  }
});
    console.log(response);
};
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt={data.comanyName}
        src={data.coverImage}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="my-4 text-3xl font-semibold text-black">{data.companyName}</span>
        </motion.div>
        <motion.div className="modal__ro" variants={modalRowVariants}>
        <p className="leading-relaxed">{data.description }
              </p>
        </motion.div>
        <motion.div className="modal__ro" variants={modalRowVariants}>
          {/* <Feature iconName={"FaBed"} iconLabel={numBedroom} />
          <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
          <Feature iconName={"FaRuler"} iconLabel={livingSpace} /> */}
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="leading-relaxed font-semibold">Last Date To Register :{data.lastDateToRegister}</p>
        </motion.div>
        <motion.button className="apply-btn" whileHover={{ scale: 1.2 }}
        onClick={handleApplyNow}
        > Apply Now</motion.button>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;



// import React from 'react'
// import { Star, ChevronDown } from 'lucide-react'

// export const ProductOverviewTwo = () => {
//   return (
//     <section className="overflow-hidden">
//       <div className="mx-auto max-w-5xl px-5 py-24">
//         <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
//           <img
//             alt="Nike Air Max 21A"
//             className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
//             src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//           />
//           <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
//             <h2 className="text-sm font-semibold tracking-widest text-gray-500">Nike</h2>
//             <h1 className="my-4 text-3xl font-semibold text-black">Nike Air Max 21A</h1>

//             <p className="leading-relaxed">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae
//               neque adipisci eum enim, natus illo inventore totam?
//             </p>
//             <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
//               <div className="flex items-center">
//                 <span className="mr-3 text-sm font-semibold">Color</span>
//                 <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
//                 <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
//                 <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
//               </div>
//               <div className="ml-auto flex items-center">
//                 <span className="mr-3 text-sm font-semibold">Size</span>
//                 <div className="relative">
//                   <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
//                     <option>8 UK</option>
//                     <option>9 UK</option>
//                     <option>10 UK</option>
//                   </select>
//                   <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
//                     <ChevronDown size={16} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="title-font text-xl font-bold text-gray-900">₹47,199</span>
//               <button
//                 type="button"
//                 className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
