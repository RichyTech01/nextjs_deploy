import Image from "next/image";
const Content = () => {
    return ( 
    <main className="content-p-container">
        <div className="content-cont">
       <div className="first-title">
           <h1>Your title here</h1>
            <p className="c0-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>
        </div>
  <div>
        <div>
            <article  className="main-content">
               <div className="content-1">
                   <h1>Your title here</h1>
                    <p className="c1-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
               </div>
                <div className="img-1">
                    <Image
                    src='/feature-1.png'
                    alt="img"
                    width={374}
                    height={306}
                    />
                </div>

            </article>
            <article className="sec-content">
                <div className="sec-img">
                    <Image
                    src='/2.png'
                    width={378.44}
                    height={325.79}
                    priority
                    />
                </div>
                <div className="cont-2">
                    <h1>Your title here</h1>
                    <p className="c2-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                </div>
            </article>
            <article  className="main-content">
               <div className="content-1">
                   <h1>Your title here</h1>
                    <p className="c1-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
               </div>
                <div className="img-1">
                    <Image
                    src='/F3.png'
                    alt="img"
                    width={415}
                    height={304}
                    priority
                    />
                </div>

            </article>

        </div>
        </div>
        <div className="start-p-c"></div>
        <div className="started-cont">
        <div className="started">
            <div className="p-b">
            <p className="md-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#">
            <button className="get-start">Get Started</button>
           </a>
            </div>
            <p className="free-trial">Start Free Trial.</p>

        </div>
        </div>
        </div>
        </main>
     );
}
 
export default Content;