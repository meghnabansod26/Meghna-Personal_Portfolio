import react from "react";
const Footer=()=>{
    const customStyles = {
        backgroundColor: "#212640", // Replace with your custom color
        color: "white",
        textAlign: "center",


      };
    return(
    <div className="container-fluid pt-2"  style={customStyles}>
        <div className="row">
            <div className="col-md-12">
                <p>Copyright © 2024 All rights reserved | Crafted with passion by Meghna Bansod
</p>
            </div>
        </div>

    </div>);
}
export default Footer;