const element = (
    <div className="bg-container">
        <h1 className="heading">Congratulations</h1>
        <div className="inner-container">
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" 
            className="profile-pic" />
            <h1 className="name">Kiran V</h1>
            <p>Vishnu Institute of Information Technology, Bhimavaram</p>
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className="watch-pic" />
        </div>
    </div>;

)


ReactDOM.render(element, document.getElementById("root"));
