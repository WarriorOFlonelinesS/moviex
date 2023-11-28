import imgSrc1 from '../img/Rectangle 24.svg';
import Image from "next/image";

export const Poster = () =>{
    return(
        <div style={{textAlign:'center'}}>
            <Image alt='poster' src={imgSrc1}></Image>
            <p style={{fontSize:'12px', width:'150px', fontWeight:'bold'}}>Haunted mansion</p>
            <p style={{fontSize:'10px', width:'150px'}}>2003</p>
            <p style={{fontSize:'10px', width:'150px'}}>Horror comedian</p>
        </div>
    )
}