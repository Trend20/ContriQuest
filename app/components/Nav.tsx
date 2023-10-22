'use client';
import { usePathname } from "next/navigation";
// import {navData} from "@/data/app_data";
import Link from "next/link";
import { GiUpgrade} from 'react-icons/gi'

const Navbar = () =>{
    const currentRoute = usePathname();
    // console.log(currentRoute);
    const actionLinks = [
        {
            linkName: 'Get Started',
            linkUrl:'/login'
        },
    ]
    return(
        <div className='flex justify-between p-5 w-full items-center'>
            <div className="flex items-center space-x-6 w-60 px-16">
                <Link href={'/'} className="flex items-center space-x-1">
                   <GiUpgrade size='40' fill='#fff' className="flex items-center justify-center p-1 bg-black rounded-full"/>
                   <p className="flex text-2xl font-bold">ContriQuest</p>
                </Link>
                {/* <div className="flex">
                    {
                    navData.map((item) =>(
                        <Link href={item.itemLink} key={item.id} className="flex px-5 py-0">{item.item}</Link>
                    ))
                    }
                </div> */}
            </div>
            <div className="flex w-36 space-x-6 items-center">
                {
                    actionLinks.map((link) =>(
                        <Link key={link.linkUrl} href={link.linkUrl} className="flex w-48 justify-center items-center p-4 font-bold rounded-md bg-black text-white">{link.linkName}</Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Navbar;