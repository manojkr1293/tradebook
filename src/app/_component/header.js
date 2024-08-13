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
  
    <header className="bg-green-950 text-white shadow-md">
      <div className="container mx-auto">
 

        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl text-white font-bold">Tradebook</Link>
          <div className="flex space-x-4 font-medium text-white">
            <Link href="/" className="hover:bg-[#D9EEE1] hover:text-green-950  px-4 py-5">Faq</Link>
            <Link href="/" className="hover:bg-[#D9EEE1] hover:text-green-950 px-3 py-5">Pricing</Link>
            <Link href="/" className="hover:bg-[#D9EEE1] hover:text-green-950  px-3 py-5">Blog</Link>
            <Link href="/" className="hover:bg-[#D9EEE1] hover:text-green-950  px-3 py-5">Contacts</Link>
            {isLogedin ? 
            <>
              <Link href="dashboard" className="hover:bg-[#D9EEE1] hover:text-green-950  px-3 py-5">Dashboard</Link>
              <Link href="journal" className="hover:bg-[#D9EEE1] hover:text-green-950  px-3 py-5">Add Journal</Link> 
              <button className="hover:bg-[#D9EEE1] hover:text-green-950 px-3 py-5" onClick={hanldeLogout}>Logout</button> 
            </> : <><Link href="auth" className="hover:bg-[#D9EEE1] hover:text-green-950  px-3 py-5">Log In</Link><button>Sign Up</button></>}
          </div>
          
          
        </div>
      </div>
    </header>
    
    
    </>
  )
}
export default Header;