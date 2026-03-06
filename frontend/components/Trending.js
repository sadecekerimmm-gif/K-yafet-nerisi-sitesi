
export default function Trending(){
  const items=[1,2,3,4,5,6]
  return(
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",padding:"40px"}}>
      {items.map(i=>(
        <div key={i} style={{background:"#fff",borderRadius:"16px",padding:"20px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>
          <img src="https://via.placeholder.com/300"/>
          <h3>Casual Outfit</h3>
          <p>❤️ 120</p>
          <button>İncele</button>
        </div>
      ))}
    </div>
  )
}
