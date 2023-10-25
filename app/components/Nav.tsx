'use client';
import Link from "next/link";
import { GiUpgrade} from 'react-icons/gi'

const Navbar = () =>{
    const actionLinks = [
        {
            linkName: 'Get Started',
            linkUrl:'/waitlist'
        },
    ]
    return(
        <div className='flex justify-between p-5 w-full items-center'>
            <div className="flex items-center space-x-6 w-60 px-16">
                <Link href={'/'} className="flex items-center space-x-1">
                   <GiUpgrade size='40' fill='#fff' className="flex items-center justify-center p-1 bg-black rounded-full"/>
                   <p className="flex text-2xl font-bold">ContriQuest</p>
                </Link>
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