'use client';
import { usePathname } from "next/navigation";
import {navData} from "@/data/app_data";
import Link from "next/link";
import { TbMenuOrder} from 'react-icons/tb'

const Navbar = () =>{
    const currentRoute = usePathname();
    // console.log(currentRoute);
    const actionLinks = [
        {
            linkName: 'Login',
            linkUrl:'/login'
        },
        {
            linkName: 'Register',
            linkUrl:'/signup'
        }
    ]
    return(
        <div className='flex justify-between p-5 w-full items-center'>
            <div className="flex items-center space-x-6 w-60">
                <Link href={'/'}>
                   <TbMenuOrder size='50'/>
                </Link>
                <div className="flex">
                    {
                    navData.map((item) =>(
                        <Link href={item.itemLink} key={item.id} className="flex px-5 py-0">{item.item}</Link>
                    ))
                    }
                </div>
            </div>
            <div className="flex w-36 space-x-6 items-center">
                {
                    actionLinks.map((link) =>(
                        <Link key={link.linkUrl} href={link.linkUrl} className="flex w-48">{link.linkName}</Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Navbar;