
const Pagination = ({offersPerPage , totaloffers ,paginate}) =>{
    const pageNumbers = [];

    for(let i=1 ; i<= Math.ceil(totaloffers/offersPerPage) ; i++){
        pageNumbers.push(i);
    }

    return(
        <nav className="mt-5"> 
            <ul className="pagination">
                {pageNumbers.map(number =>{
                
                return <li key={number} className="page-item" style={{cursor:"pointer"}}>
                           <a onClick={() => paginate(number)} className="page-link">
                             {number}
                           </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;