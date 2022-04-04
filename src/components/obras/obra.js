function Obra(props) {
  return props.post.map((p) => (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-8">
        <div className="row">
          <div className="col-4 tit_t">
            <h3>{p.name}</h3>
          </div>
          <div className="col-8 dis">
            <p>{p.description}</p>
          </div>
        </div>
        <br></br>
      </div>
      <div className="col-2"></div>
    </div>
  ));
}

export default Obra;
