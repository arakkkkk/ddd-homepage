export const Title = (props) => {
    switch (props.component.TypeID) {
        case "A":
            return (
                <div style={{ ...a, ...global }}>
                    <span style={a_b}></span>
                    {props.component.Titles[0].Text}
                </div>
            );
            break;
        case "B":
            return (
                <div style={{ ...b, ...global }}>
                    {props.component.Titles[0].Text}
                    <span style={b_a}></span>
                </div>
            );
            break;
        case "C":
            return (
                <div style={{ ...c, ...global }}>
                    {props.component.Titles[0].Text}
                    <span style={c_a}></span>
                </div>
            );
            break;

        default:
            return "Title not found";
    }
};

const global = {
    marginTop: "30px",
    fontSize: "28px",
    fontWeight: "bold"
};

const a = {
    position: "relative",
    width: "100%",
    padding: "0.4em 0.5em",
    color: "#fff",
    background: "#583F2A",
    borderRadius: "5px",
    paddingLeft: "40px"
};
const a_b = {
    content: "",
    position: "absolute",
    background: "#fff",
    width: "5px",
    height: "70%",
    borderRadius: "5px",
    left: "20px"
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

const c = {
    color: "#583F2A",
    fontSize: "40px",
    textAlign: "center",
    position: "relative"
};
const c_a = {
    content: "",
    position: "absolute",
    width: "60%",
    left: "20%",
    bottom: "0",
    height: "30px",
    borderBottom: "solid 4px #583F2A",
    color: "#583F2A",
    borderRadius: "20px 0px 160px 180px/20px 10px 20px 4px"
};
