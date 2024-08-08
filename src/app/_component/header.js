import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Header = () =>{
  const router = useRouter();
  const [isLogedin, setLoggedin] = useState(true);
  useEffect(()=>{
    const authUser = localStorage.getItem('authUser');
    if(!authUser){
      setLoggedin(false);
      router.push('/');
    }
  },[]);

  const hanldeLogout = () =>{
    const authuser = localStorage.getItem('authUser');
    if(authuser){
      localStorage.removeItem('authUser');
      router.push('/')
    }
  }

  return(
    <>
  
    <header className="bg-[#D9EEE1] text-white p-5 shadow-md">
      <div className="container mx-auto">
 

        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl text-green-950 font-bold">Tradebook</Link>
          <div className="flex space-x-4 font-medium text-green-950">
            <Link href="/" className="hover:bg-rgb(106 165 129) hover:text-white px-4 py-2 rounded-md">Faq</Link>
            <Link href="/" className="hover:bg-[#D9EEE1] hover:text-gray-300 px-3 py-2">Pricing</Link>
            <Link href="/" className="hover:bg-[#D9EEE1] hover:text-gray-300 px-3 py-2">Blog</Link>
            <Link href="/" className="hover:bg-[#66c48a] hover:text-gray-300 px-3 py-2">Contacts</Link>
            {isLogedin ? 
            <>
              <Link href="dashboard" className="hover:bg-[#66c48a] hover:text-gray-300 px-3 py-2">Dashboard</Link>
              <Link href="journal" className="hover:bg-[#66c48a] hover:text-gray-300 px-3 py-2">Add Journal</Link> 
              <button onClick={hanldeLogout}>Logout</button> 
            </> : <><Link href="auth" className="hover:bg-[#66c48a] hover:text-gray-300 px-3 py-2">Log In</Link><button>Sign Up</button></>}
          </div>
          
          
        </div>
      </div>
    </header>
    
    
    </>
  )
}
export default Header;