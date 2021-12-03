export const Text = (props) => {
    switch (props.component.TypeID) {
        case "A":
            return <div style={a}>{props.component.Comments[0].Text}</div>;
            break;

        case "B":
            return <div style={b}>{props.component.Comments[0].Text}</div>;
            break;

        case "C":
            return <div style={c}>{props.component.Comments[0].Text}</div>;
            break;

        default:
            return "Text not found";
    }
};

const a = {
    textAlign: "center",
    color: "#583F2A",
    fontSize: "32px"
};
const b = {
    textAlign: "center",
    color: "#583F2A",
    fontSize: "24px"
};
const c = {
    textAlign: "center",
    color: "#583F2A",
    fontSize: "20px"
};
