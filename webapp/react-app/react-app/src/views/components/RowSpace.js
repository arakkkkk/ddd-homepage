export const RowSpace = (props) => {
    switch (props.component.type_id) {
        case "A":
            return <div style={a}>{props.component.comments[0]}</div>;
            break;
        default:
            return "not found";
    }
};

const a = {
    textAlign: "center",
    color: "#583F2A",
    fontSize: "32px"
};
