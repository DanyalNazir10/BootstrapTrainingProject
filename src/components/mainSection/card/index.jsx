export default function card({title, save}) {
  return (

    <div class="card text-center rounded-0" style={{border:"3px solid #33659e"}}>
      <div class="card-body">
        <h3 class="card-title" style={{color: "#33659e", fontSize:"2rem"}}>{title}</h3>
        <h6 class="card-subtitle mb-2 text-muted">Every Four Weeks</h6>
        <p class="card-text">
        <del>$49</del>
        <h3 style={{color:"#2bb34d", fontSize:"2rem"}}>$29.40 Per Pack</h3>
        <h5 style={{color:"red"}}>(Save ${save})</h5>
        <h6>+ FREE SHIPPING</h6>
        </p>
        <button className="rounded" style={{width:"70%", color:"white", background:"#2bb34d", border:"none", fontWeight:"bold"}}>CHOOSE FLAVOR</button>
      </div>
    </div>
  );
}
