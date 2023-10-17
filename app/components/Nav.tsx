import {navData} from "@/data/app_data";
import Link from "next/link";

const Navbar = () =>{
    return(
        <div className='nav flex justify-between p-5 w-full items-center bg-green-500'>
            <div className="logo w-20 flex justify-center">
                <Link href={'/'}><h1>ContriQuest</h1></Link>
            </div>
            <div className="nav-links flex w-50 justify-between">
                {
                    navData.map((item) =>(
                        <Link href={item.itemLink} key={item.id} className="flex px-5 py-0">{item.item}</Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Navbar;