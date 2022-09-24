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
        <div>
            <div>
                <h1 className="mt-5 pb-2" style={{ fontWeight: "bold", color: "#A31A26", textAlign: "center", fontFamily: "Concert One, cursive" }}>MOST POPULAR CATEGORIES &#129321;</h1>
                <hr className="text-center mb-4" style={{ width: "20%", marginLeft: "40%", backgroundColor: "black" }} />
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_laptops_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>LAPTOPS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_desktops_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>DESKTOP</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 col-sm-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_monitors_062022a.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>MONITORS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_videoCards500.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>GRAPHICS CARDS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_IntelAMDProcessors500.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>PROCESSORS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_motherboards_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}> MOTHERBOARDS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_ComputerCases500_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>COMPUTER CASES</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_ssds_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>SSDs, HARD DRIVES</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_memory_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>MEMORY</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_PowerSupplies500_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>POWER SUPPLIES</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_cooling_500.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>AIR & WATER COOLING</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_WirelessNetworking500_072021.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>WIRELESS NETWORKING</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem", fontFamily: "" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_televisions_062022b.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>TELEVISIONS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_11_2021APPLE500.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}> APPLE PRODUCTS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_3Dprinting_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>MAKER PRODUCTS</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="card p-1 m-1" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_printers_062022.jpg" alt="Card cap" />
                        <div className="card-body">
                            <p className="card-text text-center" style={{ fontWeight: "bold" }}>PRINTERS</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Mostpopularcategory;