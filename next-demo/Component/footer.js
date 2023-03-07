import Image from "next/image";
const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-cont">
            <div className="img-text">
                <Image
                className="footer-img"
                src='/Header-logo.png'
                height={31.96}
                width={32}
                alt='logo'
                priority
             />
                 <p className="s-start">Starter</p>
                
            </div>
            <div>
              <ul className="link-list">
                <a href="#">
                 <li>
                    Home
                </li>
                 </a>
                 <a href="#">
                 <li>About</li>
                 </a>
                 <a href="#">
                 <li>Docs</li>
                 </a>
                 <a href="#">
                 <li>Github</li>
                 </a>
              </ul>
              </div>
              <div>
                <ul className="app-list">
                    <a href="#">
                        <Image 
                        className="social"
                         src='/Githug.png'
                         height={23.39}
                         width={24}
                         alt='github'
                         priority
                        />
                    </a>
                    <a href="#">
                        <Image
                        src='/Facebook.png'
                        height={23.85}
                        width={24}
                        className="social"
                        alt='facebook'
                        priority
                        />
                    </a>
                    <a href="#">
                        <Image
                        src='/Twitter.png'
                        height={19.51}
                        width={24}
                        alt='twitter'
                        className="social"
                        priority
                        />
                    </a>
                    <a href="#">
                        <Image
                        src='/Youtube.png'
                          height={16.77}
                          width={23.99}
                        className="social"
                        alt='youtube'
                          priority
                        />
                    </a>
                    <a href="#">
                        <Image
                        src='/Linkedin.png'
                          height={24}
                        className="social"
                        width={24}
                          alt='linkedin'
                          priority
                        />
                    </a>
                    <a href="#">
                        <Image
                        className="social"
                        src='/At.png'
                          height={20}
                          width={20}
                          alt='at'
                          priority
                        />
                    </a>
                    <a href="#">
                        <Image
                        className="social"
                        src='/Wifi.png'
                          height={20}
                          width={20}
                          alt='wifi'
                          priority
                        />
                    </a>
                </ul>
              </div>
              <div className="copy">
                <p className="copy-text"> &#169; Copyright 2021 Nextjs Starter. Powered with ♥ by <span>CreativeDesignsGuru</span> </p>
              </div>
            </div>
        </footer>
     );
}
 
export default Footer;