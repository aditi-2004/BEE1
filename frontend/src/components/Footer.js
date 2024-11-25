// import React from "react";

// function Footer() {
//   return (
//     <div>
//       <div className="footer w-screen h-[120px] mt-[14%] px-[50px] bg-[#f4f4f4] flex items-center justify-between">
//         <h3 className="text-2xl">Keep Notes</h3>
//         <div className="text-center">
//             <p className="text-[grey]">Designed By <span className="sp-text">S.K Ansari Sir</span></p>
//             <p>Copy Rights All Reserverd</p>
//         </div>
//         <div className="">We are Social</div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; All Rights Reserved</p>
      </div>
      <div>We are Social</div>
    </div>
  );
};

export default Footer;
