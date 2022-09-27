import { NavLink } from "react-router-dom";

function Mostpopularcategory() {
    /* const components = [
        {
            "URL" : 'https://picsum.photos/200/300' ,
            "Name" : 'Motherboard' ,
            "Text" : 'This is motherboard !' 
        },
        {
            "URL" : 'https://picsum.photos/200/301' ,
            "Name" : 'processor' ,
            "Text" : 'This is motherboard !'
        },
        {
            "URL" : 'https://picsum.photos/200/302' ,
            "Name" : 'GPU' ,
            "Text" : 'This is motherboard !' 
        },
        {
            "URL" : 'https://picsum.photos/200/303' ,
            "Name" : 'SSD' ,
            "Text" : 'This is motherboard !'
        },
    ] */

    return (

        // <Row xs={1} md={4} className="g-4">
        //     <Col>
        //       <Card>
        //         <Card.Img variant="top" src={ components.map(component => {component.URL}) } />
        //         <Card.Body>
        //           <Card.Title>
        //           { components.map(component => return( {component.Name}) ) }
        //           </Card.Title>
        //           <Card.Text>
        //           { components.map(component => {component.Text}) }
        //           </Card.Text>
        //         </Card.Body>
        //       </Card>
        //     </Col>
        // </Row>
        <div className="container">
            <div>
                <h1 className="mt-5 pb-2" style={{ fontWeight: "bold", color: "#A31A26", textAlign: "center", fontFamily: "Concert One, cursive" }}>MOST POPULAR CATEGORIES &#129321;</h1>
                <hr className="text-center mb-4" style={{ width: "20%", marginLeft: "40%", backgroundColor: "black" }} />
            </div>
            <div className="row">


                <div className="col-md-3 col-sm-12">
                    <NavLink to="/desktop" >
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_desktops_062022.jpg" alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontWeight: "bold" }}>DESKTOP</p>
                            </div>
                        </div>
                    </NavLink >
                </div>


                <div className="col-md-3 col-sm-12">
                    <NavLink to="/monitors">
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_monitors_062022a.jpg" alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontWeight: "bold" }}>MONITORS</p>
                            </div>
                        </div>
                    </NavLink >
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to="/graphicscard">
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_videoCards500.jpg" alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontWeight: "bold" }}>GRAPHICS CARDS</p>
                            </div>
                        </div>
                    </NavLink >
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to="/processors">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_IntelAMDProcessors500.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>PROCESSORS</p>
                        </div>
                    </div>
                    </NavLink >

                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <NavLink to="/motherboards">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_motherboards_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}> MOTHERBOARDS</p>
                        </div>
                    </div>
                    </NavLink >
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to="/computercase">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_ComputerCases500_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>COMPUTER CASES</p>
                        </div>
                    </div>
                    </NavLink >
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to="/ssd">
                    <div className="card p-1 m-1" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_ssds_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>SSDs, HARD DRIVES</p>
                        </div>
                    </div>
                    </NavLink >
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to="/memory">
                    <div className="card p-1 m-1" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_memory_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>MEMORY</p>
                        </div>
                    </div>
                    </NavLink >
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">

                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to="/powersupply">
                    <div className="card p-1 m-1" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_PowerSupplies500_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>POWER SUPPLY</p>
                        </div>
                    </div>
                    </NavLink >
                </div>

                <div className="col-md-3 col-sm-12">
                    <NavLink to="/cooling">
                    <div className="card p-1 m-1" style={{ width: "15rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_cooling_500.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>AIR & WATER COOLING</p>
                        </div>
                    </div>
                    </NavLink >
                </div>

                <div className="col-md-3 col-sm-12">

                </div>

            </div>




        </div>


    );
};


export default Mostpopularcategory;