
import home1 from '../img/home1.jpg';

const aboutUsSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2> Something</h2>
                    </div>
                    <div className="hide">
                        <h3> <span>Dreams</span></h3>
                    </div>
                </div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla inventore sequi accusamus voluptatum! Excepturi nemo deleniti debitis iste animi ea, amet provident praesentium voluptatum sit suscipit ex libero dicta.</p>
                <button> Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="home1 img" />
            </div>
        </div>
    )
} 

export default aboutUsSection;