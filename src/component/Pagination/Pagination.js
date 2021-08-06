import Pagination from "@material-ui/lab/Pagination";
import NotFound from "../../Pages/NotFound/NotFound";
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
        />
        </div>
    );
};

export default CostomPagination;