import { useState } from "react";


export default function useStatePage(){
    const [number, setNumber] = useState<number>(0);

    const increment =() =>{
    setNumber(number+1)
    }

    const decrement =() =>{
    setNumber(number-1)
    }
    // Form
    const [ShowPassword, setShowPassword]=useState<boolean>(false)

    const onHandlePassword =() =>{
        if(ShowPassword === false) setShowPassword (true);
        if(ShowPassword === true) setShowPassword(false)
    }

    // select Image
    const imagesProduct: string[] = [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-18268572/panarybody_sepatu_pria_impor_sneakers_pria_olahraga_lari_kasual_breathable_sport_shoes_untuk_outdoor-travel2020_full01_d6z2y38f.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-174075383/brd-44261_sepatu-sneakers-pria-footwear-sepatu-casual-kuliah-kerja-hangout-marvin-06-hitam-putih_full03-45249a69.jpg",
        "https://down-id.img.susercontent.com/file/sg-11134201-7rdyj-m110r57sywzr09",

    ]

    const [imagePreview, setImagePreview]=useState<string>('');

    // Text
    const [text,setText]= useState<string>('');

    const onhandleTyping = (event) =>{
        setText(event?.target?.value)
    }



    return(
        <>
        {/* Pengoperasian */}
        <h1 className="flex justify-center">Penjumlahan Uye</h1>
        <div className="flex items-center justify-center">
            <div className="flex gap-3">
                <button onClick={decrement}>-</button>
                <h2>{number}</h2>
                <button onClick={increment}>+</button>
            </div>

        </div>
        {/* Show Password */}

        <h1 className="text-2xl font-bold text-purple-500 mt-10">Form Login</h1>
        <form >
            <input className="border border-purple-500 p-1 rounded-md"
            type="text" placeholder="input Your email"/>
            <div className="flex item-center gap-3 mt-3">
                <input type={ShowPassword === true ? 'text':'password'} 
                className="border border-purple-500 p-1 rounded-md "
                placeholder="Inpur Your Password"/>
                <p onClick={onHandlePassword} 
                >{ShowPassword === true ? 'Hidden Password':'Show Password'}</p>
            </div>
            <button type="submit"
            className="bg-purple-500 rounded-md p-2 text-white mt-2 ml-15 flex justify-center">Login</button>
        </form>

        {/* Image */}
        <h1 className="mt-10">Image</h1>
        <div>
            <div className="border border-gray-300 rounded-md w-[250px] h-[250px] flex justify-center items-center">
                {imagePreview === '' ? (<h2 className="text-xl font-bold">Image Preview</h2>):
                (<img src={imagePreview}/>)}
            </div>
        </div>
        <div className="flex gap-3">
            {imagesProduct?.map((item)=>{
                return (
                    <img src={item}
                    className="w-24 h-24"
                    onClick={()=> setImagePreview(item)}/>
                )
            })}
            
        </div>

        {/* Input text */}
        <h1 className="mt-10">Input Text Bos</h1>
        <p className={text.length > 10 ? 'text-red-500': 'text-blue-500'}>{text}</p>
        <textarea className="border border-blue-500 rounded-md mt-4" placeholder="Masukkan impian anda"
        onChange={(event)=>onhandleTyping(event)}/>
        
        {/* toogle */}
        <input type="checkbox" checked="checked" className="toggle toggle-lg " />
        
        

        </>
    )
}