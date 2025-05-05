import './card.css';

function Card({ name, category }) {
    
    return(
        <div className="card">
            <h2>{name}</h2>
            <p><strong>Category:</strong> {category}</p>
        </div>
    );
}

export default Card;