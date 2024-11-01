import image from '../assets/Images/oc1.jpg'
function TsContent(){
    return(
        <>
        <div className='Content'>
        <section className="cards-container">
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card-content">
                <h3>Variables on Javascript</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis totam, excepturi hic eaque reiciendis expedita vitae quaerat dolore amet nostrum odit nisi libero eos qui saepe cupiditate fugit ad delectus.</p>
            </div>  
        </div>
        </section>
        </div>
        </>
    )
}

export default TsContent