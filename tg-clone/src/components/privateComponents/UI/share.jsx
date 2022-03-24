export default function ShareIn({setModal ,setSharee}){
    function padelit(){
        setModal(false)
        setSharee(false)
    }
    return(
        <div className="alert alert-dismissible fade show" role="alert">
        <p>
          <strong>Share in</strong>  and try submitting again.
        </p>
        <p>
          <span onClick={padelit} className="btn btn-xl"><i className="bi bi-facebook text-info"></i></span>
          <span onClick={padelit} className="btn btn-xl"><i className="bi bi-instagram text-danger"></i></span>
          <span onClick={padelit} className="btn btn-xl"><i className="bi bi-pinterest text-danger"></i></span>
          <span onClick={padelit} className="btn btn-xl"><i className="bi bi-telegram text-info"></i></span>
        </p>
      </div>
    )
}