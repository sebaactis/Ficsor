
const ItemList = ({titulo, descripcion}) => {
    return (
        <div>
            <h3 className="itemBasesTitle fw-bold fs-5">
                {titulo}
            </h3>
            <p className="itemBasesParrafo fw-bold">
                {descripcion}
            </p>
        </div>
    )
}

export default ItemList