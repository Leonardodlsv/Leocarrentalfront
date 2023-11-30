

export default function Footer(){
    return(
        <>
            <div className="main-footer">
            <div className="container">
            <div className="row">
            {/* Column 1*/}
            <div className="col-md-3 col-sm-6">
                <h4>Index</h4>
                <ul className="list-unstyled">
                    <li>Home</li>
                    <li>Vehicles</li>
                    <li>Book</li>
                </ul>
            </div>

            {/* Column 2*/}
            <div className="col-md-3 col-sm-6">
                <h4>Support</h4>
                <ul className="list-unstyled">
                    <li>Support Page</li>
                    <li>leondlsv14@gmail.com</li>
                    <li>Whatsapp: 809-350-4954</li>
                </ul>
            </div>

            {/* Column 3*/}
            <div className="col-md-3 col-sm-6">
                <h4>Address</h4>
                <ul className="list-unstyled">
                    <li>Republica Dominicana</li>
                    <li>Santiago de los caballeros</li>
                    <li>Las antillas calle #9</li>
                </ul>
            </div>
            {/* Column 4*/}
            <div className="col-md-3 col-sm-6">
                <h4>Social</h4>
                <ul className="list-unstyled">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>X (Before Twitter)</li>
                </ul>
            </div>
            </div>
            {/*Footer Bottom*/}
            <div className="footer-bottom">
                <p className="text-sx-center">
                    &copy;{new Date().getFullYear()} Leo Rental Car - All Rights Reserved
                </p>
            </div>
            </div>
            </div>
        </>
    )
}