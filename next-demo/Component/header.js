import Image from "next/image";
const Header = () => {
    return ( 
        <div className="all-header-cont"> 
        <ul className="header-cont">
        <header className="header">
            <div className="header-logo">
            <Image 
            className="img-1"
            src='/Header-logo.png'
            alt='header-logo'
            width={46}
            height={48}
            priority
            />
            <h1 className="header-starter">Starter</h1>
             {/* <Image 
            src='/Starter.png'
            alt='header-logo'
            width={141}
            height={36}
            priority
            /> */}
            </div>
            <div class="list-group">
                <ul className="item-group">
                <a href="#" className="item">Github</a>
                <a href="#" className="item">Sign up</a>
                </ul>
            </div>

          
        </header>
        </ul>

        </div>
         
     );
}
 
export default Header;