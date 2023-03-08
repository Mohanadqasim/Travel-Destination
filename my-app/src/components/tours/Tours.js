const arrData = require("./dest.json");
function Tours() {
    return (
        <>
            <h2>Around the world!!</h2>
            {arrData.map((item) => {
                return (
                    <div key={item.ID}>
                        <hr ></hr>
                        <h3>{item.name}</h3>
                        <p>{item.id}</p>
                        <p>{item.info}</p>
                        <p>{item.price}</p>
                        <img src={item.image} alt={item.name}></img>
                    </div>
                )
            })}
        </>
    )
}
export default Tours;