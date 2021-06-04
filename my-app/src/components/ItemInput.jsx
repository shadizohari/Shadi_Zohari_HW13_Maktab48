// import Menu from "./Menu"
// import Footer from "./Footer"





const ItemInput = ({src,name,index,selectCountries, ...props }) => {

    return (
        <div className="parent-item" onClick={selectCountries}>
            <img src={src} />
            <a>{name}</a>
        </div>
    )
}

export default ItemInput;