import axios from 'axios';
import React, {useState ,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import reactPaginate from "react-paginate"
import Job from '../job/Job';
import "./jobs.scss"

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)

    const jobsPerPage = 4;
    const currentPage = pageNumber * jobsPerPage

    const pageCount  = Math.ceil(jobs.length / jobsPerPage )

    const changePage = ({selected}) => {
      setPageNumber(selected)
    }

   

    useEffect(() => {
        const getJobs = async() => {
            const res = await axios.get("/job");
            console.log(res)
            setJobs(res.data)
        }

        getJobs()
    })
    



  return (
    <div className='jobs'>

        {jobs.slice(currentPage, currentPage + jobsPerPage).map((job, index) => (

         <Job job={job} key={index}/>


        ))}
       <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

      

    </div>
  )
}

export default Jobs