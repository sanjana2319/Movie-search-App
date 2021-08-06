
import Pagination from "@material-ui/lab/Pagination";
const CostomPagination = ({setPage, numOfPages = 10}) => {

    const pageChange = (e) => {
        window.scroll(0,0);
    };

    return(
        <div style = {{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            
        }}>
        <Pagination color = "primary"
        count= {numOfPages}
        onChange= {"/"}
        />
        </div>
    );
};

export default CostomPagination;