import { useState, ChangeEvent, FormEvent } from "react";

export default function crudPage (){
    //type
    type User = {
        id : number ;
        name : string ;
        email : string ;
        nomor : string ;
    };
    // variable
    const [users,setUsers] = useState<User[]>([]);
    const [form,setForm]=useState<{ name: string; email: string; nomor:string}>({
        name: "",
        email: "",
        nomor: "",
    })
    const [editId, setEditId] = useState<number | null>(null)

    //function
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]:e.target.value})
    };

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        console.log("Isi Form :", form)

        if (editId === null){
            // create
            const newUser : User = {
                id: Date.now(),
                name: form.name,
                email: form.email,
                nomor : form.nomor,
            }
            setUsers([...users,newUser])

        }else {
            // update
            setUsers(users.map((user)=>
                user.id === editId ? {...user , name : form.name, email : form.email , nomor : form.nomor} : 
                user           
            ));
            
        }
        setForm({name: "", email: "" , nomor:""})
    }

    const handleEdit = (user:User) => {
        setForm ({ name : user.name, email : user.email, nomor : user.nomor})
        setEditId(user.id)
    }

    const handleDelete = (id : number) =>{
        setUsers(users.filter((user)=> user.id !== id));
        if (editId === id){
            setEditId(null);
            setForm({name:"",email:"",nomor:""})
        }
    }




    return (
        <>
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold mb-4 text-blue-500 text-center">Simple User Crud Guys</h2>
            <form 
                onSubmit={handleSubmit}
                className="flex gap-2"
                autoComplete="off">

                <input name="name"
                className="border border-gray-300 rounded-md px-3 py-2"
                placeholder="Masukkan nama anda"
                value={form.name}
                onChange={handleChange}
                />
                <input name="email"
                className="border border-gray-300 rounded-md px-3 py-2 "
                placeholder="Masukkan email anda"
                type="email"
                value={form.email}
                onChange={handleChange}
                />
                <input name="nomor"
                className="border border-gray-300 rounded-md px-3 py-2 "
                placeholder="Masukkan nomor anda"
                value={form.nomor}
                onChange={handleChange}
                />
                <button type="submit" className={`px-4 py-2 rounded text-white ${editId === null ?
                    " bg-blue-600 hover:bg-blue-700" : "bg-yellow-500 hover:bg-yellow-600"
                }`}>
                {editId === null ? "Add" : "Update"}</button>
                {editId !== null && (
                    <button
                    type="button"
                    onClick={()=>{
                        setEditId(null);
                        setForm({name: "", email:"", nomor:""})
                    }}
                    className="px-3 py-2 rounded bg-gray-400 hover:bg-gray-500">
                        Cancel
                    </button>
                )}

            </form>
            {users.length === 0 ? (
                <p className="text-gray-500 text-center">No user yet.</p>
            ) : (
            <ul className="devide-y devide-gray-200">
                {users.map((user) => (
                    <li className="flex items-center justify-between py-3"
                    key={user.id}
                >
                   <div>
                        <div className="font-medium texy-gray-500">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-sm text-gray-500">{user.nomor}</div>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={()=> handleEdit(user)}
                        className="bg-yellow-400 px-3 py-1 rounded text-white shadow-md hover:bg-yellow-500"> Edit</button>
                        <button onClick={()=> handleDelete(user.id)}
                        className="bg-red-500 px-3 py-1 rounded text-white shadow-md hover:bg-red-600">Delete</button>
                    </div> 
                </li>

                ))}
                
            </ul>    
            )}
            
        </div>

        
        
        </>
    )
    
}