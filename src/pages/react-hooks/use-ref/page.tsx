import { useRef } from "react";

export default function UseRefPage(){
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const onhandleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputEmail?.current?.value)
        console.log(inputPassword?.current?.value)
    }
    

    return(
        <>
        <h1 className=" text-2xl font-bold text-purple-500">Form Login</h1>
        <form onSubmit={onhandleLogin}>
            <input ref={inputEmail} type="text" placeholder="Type Your Email"/>
            <input ref={inputPassword} type="password" placeholder="Type Your Password"/>
            <button type="submit">Login</button>
        </form>

        </>
    )
}