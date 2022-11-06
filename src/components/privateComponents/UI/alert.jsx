export default function MyAlert(props){
    
    return(
        <div className="alert alert-dismissible fade show" role="alert">
        <p>
          <strong>{props.title}</strong>  
        </p>
        <p>
          {props.children}
        </p>
      </div>
    )
}