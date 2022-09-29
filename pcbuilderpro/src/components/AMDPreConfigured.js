import {NavLink} from "react-router-dom";
function AMDPreConfigured(){
    return(
        <>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <NavLink to={""}>
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src="https://www.pcstudio.in/wp-content/uploads/2021/07/Trident-PC-2-1_n.jpg" alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontWeight: "bold" }}>TRIDENT PC 2</p>
                            </div>
                        </div>
                    </NavLink>
                </div>


                <div className="col-md-3 col-sm-12">
                    <NavLink>
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src="https://www.pcstudio.in/wp-content/uploads/2020/05/Streaming-Pc-2-1_n.jpg" alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontWeight: "bold" }}>STREAMING PC 2</p>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink>
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src="https://www.pcstudio.in/wp-content/uploads/2021/07/starter-pc-1-new-4.png" alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontWeight: "bold" }}>STARTER PC 1</p>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink>
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://www.pcstudio.in/wp-content/uploads/2021/03/creator-plus-pc-3-n.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>CREATOR PLUS PC 3</p>
                        </div>
                    </div>
                    </NavLink>

                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to={""}>
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src="https://www.pcstudio.in/wp-content/uploads/2021/07/Trident-PC-2-1_n.jpg" alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontWeight: "bold" }}>CREATOR PLUS PC 2</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
};
export default AMDPreConfigured;