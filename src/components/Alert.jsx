import React ,{useEffect}from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyle = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }
const Alert = ({text,type,show}) => {

    useEffect(() => {
        if (show){
            if (type==="error") {
                toast.error(text, toastStyle);
              }else{
                toast.success(text,toastStyle);
              }
        }
    
    
    }, [show])
    
  
  return (
    <div>
      {" "}
      <ToastContainer limit={3}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Alert;
