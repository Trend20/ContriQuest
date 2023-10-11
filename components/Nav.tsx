import {navData} from "@/data/app_data";
import Link from "next/link";

const Navbar = () =>{
    return(
        <div className='nav'>
            <div className="logo">
                <Link href={'/'}><h1>ContriQuest</h1></Link>
            </div>
            <div className="nav-links">
                {
                    navData.map((item) =>(
                        <Link href={item.itemLink} key={item.id}>{item.item}</Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Navbar;