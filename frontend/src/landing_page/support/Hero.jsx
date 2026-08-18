function Hero() {
   return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="trackTicket">Track Tickets</a>
      </div>
      <div className="row px-5 pb-5 mt-3">
        <div className="col-6 p-3">
          <h2 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input placeholder="Eg. how do I activate F&O" className="mb-4"/>
          <br />
          <a href="" className="m-2">Track account opening</a>
          <a href="" className="m-2">Track segment activation</a>
          <a href="" className="m-2">Intraday margins</a>
          <a href="" className="m-2">Kite user manual</a>
        </div>
        <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
          <h1 className="fs-3">Featured</h1>
          <ul style={{lineHeight:"30px"}}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;