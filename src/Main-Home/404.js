function notfound() {
  const styleLottie = {
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_j3gumpgp.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={styleLottie}
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default notfound;
