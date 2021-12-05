export const RowSpace = (props) => {
    switch (props.component.type_id) {
        case "A":
            return <div className="row" style={{ height: "70px" }}></div>;
            break;
        case "B":
            return <div></div>;
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
