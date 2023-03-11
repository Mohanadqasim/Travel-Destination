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
                        <img src={item.image} alt={item.name}></img>
                    </div>
                )
            })}
        </>
    )
}
export default Tours;