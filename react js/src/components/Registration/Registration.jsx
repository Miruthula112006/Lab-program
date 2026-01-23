import './Registration.css';
export default function RegistrationForm(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    return(
        <div className='bg-white px-6m py-12'>
            <h1>Registraton form</h1>

            <div className='flex flex-col'>
            <label className='text-left'> name </label>
            <input type="text" placeholder="enter your name"/> <br/>
            </div>
            <div className='flex flex-col'>
            <label className='text-left'> email </label>
            <input type ="email" placeholder="enter you email"/> <br/>
            </div>
            <div className='flex flex-col'>
            <label className='text-left'> password</label>
            <input type="password" placeholder="enter password"/> <br/>
            </div>

            <button className='w-full'> submit </button>
        </div>
    )
}