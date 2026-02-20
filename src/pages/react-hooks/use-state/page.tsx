import { useState } from "react"
export default function UseStatePage(){
    const [number, setNumber]= useState<number>(0)

    const onhandleIncrement = () => {
        setNumber(number + 1);
    }

    const onhandleDecrement = () => {
        setNumber(number -1);
    }
    // form
    const [ShowPassword, setShowPassword]= useState<boolean>(false);

    const onhadleShowPassword = () => {
        if (ShowPassword === false) setShowPassword(true);
        if (ShowPassword === true) setShowPassword (false);
    }

    // change text
    const [text, setText] = useState<string>('');

    const onhandleTyping = (event) => {
        setText(event?.target?.value)
    }
    
    //select image
    const imagesProduct: string[] = [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-18268572/panarybody_sepatu_pria_impor_sneakers_pria_olahraga_lari_kasual_breathable_sport_shoes_untuk_outdoor-travel2020_full01_d6z2y38f.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-174075383/brd-44261_sepatu-sneakers-pria-footwear-sepatu-casual-kuliah-kerja-hangout-marvin-06-hitam-putih_full03-45249a69.jpg",
        "https://down-id.img.susercontent.com/file/sg-11134201-7rdyj-m110r57sywzr09",

    ]
    const [ImagePreview, setimagePreview] = useState<string>('');

    return(
    <>
        <h1>Counter Use State</h1>
        <button onClick={onhandleDecrement}>-</button>
        <h2>{number}</h2>
        <button onClick={onhandleIncrement}>+</button>

        {/* showPassword */}
        <h1 className=" text-2xl font-bold text-purple-500">Form Login</h1>
        <form >
            <input className="border border-purple-700 p-1 rounded-md " type="text" placeholder="Type Your Email"/>
            <div className="flex item-center gap-3 mt-3">
                <input className="border border-purple-700 p-1 rounded-md " type={ShowPassword === true ? 'text':"password"} placeholder="Type Your Password"/>
                <p className="test-xs text-blue-500" onClick={onhadleShowPassword}>
                    {ShowPassword === true? 'Hidden Password':'Show Password'}</p>
            </div>
            
            <button type="submit" className="bg-purple-700 text-white p-3 rounded-md mt-3">Login</button>
        </form>

        {/* Change Text */}
        <h1 className=" text-2xl font-bold text-blue-500">Input Text</h1>
        <textarea onChange={(event) => onhandleTyping(event) } className="border border-blue-600 p-1 rounded-md mt-3" />

        
        <p className={text.length > 50 ? 'text-red-500':'text-blue-500'}>{text}</p>

        {/* Picture */}
        <div className="p-10">
            <div className="border border-gray-300 rounded-md w-[250px] h-[250px] flex justify-center items-center">
                {ImagePreview === ''? (
                    <h2 className="text-xl font-bold">Image Preview</h2>
                ):( 
                    <img src={ImagePreview}/>
                )}

            </div>
            <div className="flex gap-3">
                {imagesProduct?.map((item)=> {
                    return(
                        <img 
                        src={item}
                        className="w-24 h-24"
                        onClick={()=> setimagePreview(item)}/>
                    )
                })}

            </div>

        </div>
       
    </>
    )
}

