export const Image = (props) => {
    switch (props.component.TypeID) {
        case "A":
            return (
                <img
                    src={props.component.Image}
                    class="img-fluid"
                    alt="image"
                    style={{ width: "100%", padding: 0, margin: 0 }}
                />
            );
            break;

        default:
            return "Image not found";
    }
};
