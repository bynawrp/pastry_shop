const Pastry = ({ data }) => {
    return (
        <div className="card-pastry">
            <img src={data.image} alt={data.name} />
            <span>{data.name} : <strong>{data.quantity}</strong></span>
        </div>
    )
}

export default Pastry