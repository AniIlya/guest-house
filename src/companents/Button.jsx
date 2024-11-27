import React from "react"


const Button = ({
itemBtn="",
hasBorderGreen=false,
hasbgOrange=false,
hasbgGreen=false,
hasbgGrey=false,

})=>{ 
  
const borderGreen="border border-[#52503B] border-solid text-[#52503B] bg-[#ffffff]"
const bgOrange="border border-[#FF6633] border-solid text-white bg-[#FF6633]"
const bgGreen="border border-[#52503B] border-solid text-white bg-[#52503B]"
const bgGrey="  border border-[#F3F2F1] border-solid text-[#000000] bg-[#F3F2F1]"

  return (
    
    <div>
     
     <button className={`w-[100%] px-5 py-2 rounded-md my-[3%] ${hasBorderGreen && borderGreen} 
     ${hasbgOrange && bgOrange} 
     ${hasbgGreen && bgGreen}
     ${hasbgGrey && bgGrey}
      `}>
        {itemBtn}</button>
    </div>
  )
}
export default Button