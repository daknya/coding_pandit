import React from "react";
import "../style/footer.scss"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footercnt">
                    <div className="extlink">
                        <ul>
                            <li><a href="#"> nitap home  </a></li>
                            <li><a href="#"> gfg  </a></li>
                            <li><a href="#"> Leet Code  </a></li>
                            <li><a href="#"> Indiabix  </a></li>
                        </ul></div>
                    <div className="contacts">

                        <div> 9875639472 </div>
                        <div> codingpandit@nitap.ac.in </div>

                    </div>
                    <div className="other">
                        <div> lorem3</div>
                        <div> lorem3</div>
                        <div> lorem3</div>
                    </div>
                </div>
                <div className="credit">developed by team for one</div>

            </div>

        </>
    )

}
export default Footer;
