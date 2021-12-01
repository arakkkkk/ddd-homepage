export const RowSpace = (props) => {
    switch (props.component.type_id) {
        case "A":
            return <div style={a}>{props.component.comments[0]}</div>;
            break;

        case "B":
            return <div style={b}>{props.component.comments[0]}</div>;
            break;

        case "C":
            return <div style={c}>{props.component.comments[0]}</div>;
            break;

        // case "D":
        //     return (
        //         <div style={d}>
        //             {props.component.comments[0]}
        //         </div>
        //     );
        //     break;
        default:
            return "not found";
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
