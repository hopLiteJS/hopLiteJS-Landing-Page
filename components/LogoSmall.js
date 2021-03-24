import React from "react";
import Image from 'next/image'
export default function Logo() {
  return <div className = "Logo"><Image
  src="/hopLiteLogo.png"
  alt="Picture of the code"
  width={100}
  height={100}
/></div>
}
