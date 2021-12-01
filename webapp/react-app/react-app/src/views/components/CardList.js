export const CardList = (props) => {
    switch (props.component.type_id) {
        case "A":
            return (
                <div class="row">
                    {props.component.titles.map((title, index) => (
                        <div class="col-sm-4 mt-4" key={index}>
                            <div class="card">
                                <div class="card-body">
                                    <img
                                        src={props.component.images[index]}
                                        class="img-fluid"
                                        alt="image"
                                        style={{ width: "100%", padding: 0, margin: 0 }}
                                    />
                                    <h3>{props.component.titles[index]}</h3>
                                    <p>{props.component.comments[index]}</p>
                                    <p class="price">
                                        <i class="bi bi-currency-yen" style={{ fontSize: "22px" }}></i>
                                        {props.component.comment[index]}（税抜）
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        default:
            return "not found";
    }
};
