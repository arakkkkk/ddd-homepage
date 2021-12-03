export const Card = (props) => {
    switch (props.component.TypeID) {
        case "A":
            return (
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-4">
                            <img
                                class="img-fluid"
                                src={props.component.Image}
                                alt="Image not found."
                                style={{ margin: "10px 20px" }}
                            />
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h4 class="card-title">{props.component.Titles[0].Text}</h4>
                                <p class="card-text">
                                    {props.component.Comments[0].Text}
                                    <br />
                                    <small class="text-muted">{props.component.Comments[1].Text}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;

        case "B":
            return (
                <div class="row my-2">
                    <div class="card pb-3 pl-4">
                        <h4 class="card-title" style={{ fontSize: "40px" }}>
                            {props.component.Titles[0].Text}
                        </h4>
                        <p class="card-text">
                            <small class="text-muted">{props.component.Comments[0].Text}</small>
                        </p>
                    </div>
                </div>
            );
            break;

        case "C":
            return (
                <div class="row my-2">
                    <div class="card pb-3 pl-4">
                        <h4 class="card-title">{props.component.Titles[0].Text}</h4>
                        <p class="card-text">{props.component.Comments[0].Text}</p>
                    </div>
                </div>
            );
            break;
        case "D":
            return (
                <div class="row my-2" style={{ textAlign: "center" }}>
                    <div class="card mb-4">
                        <h4 class="card-title" style={a}>
                            {props.component.Titles[0].Text}
                            <span style={a_a}></span>
                        </h4>
                        <p class="card-text">{props.component.Comments[0].Text}</p>
                    </div>
                </div>
            );
            break;
        case "E":
            return (
                <div class="row my-2" style={{ color: "#583F2A", textAlign: "center" }}>
                    <div class="card mb-4">
                        <h4 class="card-title" style={b}>
                            {props.component.Titles[0].Text}
                            <span style={b_a}></span>
                        </h4>
                        <p class="card-text">{props.component.Comments[0].Text}</p>
                    </div>
                </div>
            );
            break;

        case "F":
            return (
                <div class="card">
                    <div class="card-body">
                        <img
                            src={props.component.Image}
                            class="img-fluid"
                            alt="Image"
                            style={{ width: "100%", padding: 0, margin: 0 }}
                        />
                        <h3>{props.component.Titles[0].Text}</h3>
                        <p>{props.component.Comments[0].Text}</p>
                        <p class="price">
                            <i class="bi bi-currency-yen" style={{ fontSize: "22px" }}></i>
                            {props.component.Comments[1].Text}（税込）
                        </p>
                    </div>
                </div>
            );
            break;
        default:
            return "Card not found";
    }
};

const a = {
    fontSize: "40px",
    textAlign: "center",
    position: "relative"
};
const a_a = {
    content: "",
    position: "absolute",
    width: "60%",
    left: "20%",
    bottom: "0",
    height: "1.2px",
    backgroundColor: "black"
};
const b = {
    color: "#583F2A",
    fontSize: "40px",
    textAlign: "center",
    position: "relative"
};
const b_a = {
    content: "",
    position: "absolute",
    width: "60%",
    left: "20%",
    bottom: "0",
    height: "1.2px",
    backgroundColor: "#583F2A"
};
