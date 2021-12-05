export const RowSpace = (props) => {
    switch (props.component.TypeID) {
        case "A":
            return <div className="row" style={{ height: "70px" }}></div>;
            break;
        case "B":
            return <div style={{ minHeight: "20px" }}></div>;
            break;
        default:
            return "not found";
    }
};
