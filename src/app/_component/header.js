import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Header = () =>{
  const router = useRouter();

  useEffect(()=>{
    const authUser = localStorage.getItem('authUser');
    if(!authUser){
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
    <div className=" flex mx-auto justify-between items-center p-5 bg-slate-100 shadow-md border-1">
      <Link href="dashboard">Home</Link>
      <Link href="journal">Add Journal</Link>
      <button onClick={hanldeLogout}>Logout</button>
    </div>
    </>
  )
}
export default Header;