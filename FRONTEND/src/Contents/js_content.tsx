import image from '../assets/Images/oc1.jpg';

function JsContent(){

    return (
        <>
        <div className="Content">
            <div className="cards-container">
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card-content">
                <h3>Variables on Javascript</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis totam, excepturi hic eaque reiciendis expedita vitae quaerat dolore amet nostrum odit nisi libero eos qui saepe cupiditate fugit ad delectus.</p>
            </div>  
        </div>

        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card-content">
                <h3>Typedata on Javascript</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos repudiandae pariatur recusandae voluptatibus maxime aspernatur sequi eveniet totam unde adipisci beatae optio perspiciatis ea accusantium qui labore, eligendi autem?</p>
            </div>
        </div>

        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card-content">
                <h3>Singapore</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ratione doloribus itaque repudiandae. Alias ad tempore blanditiis ratione similique, culpa mollitia rem tenetur dignissimos at saepe dolores quo! Vero, nesciunt?</p>
            </div>
        </div>
    </div>
        </div>
        </>
    )
}

export default JsContent