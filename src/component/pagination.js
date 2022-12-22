import React, { useEffect, useState } from "react";
import apiService from "../services/api.service";
import authHeader from "../services/auth-header";
import Table, { SelectColumnFilter, StatusPill, LocateCell } from "./table";

function MyPagination() {
  const companyColumns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "company_id"
      },
      {
        Header: "Name",
        accessor: "company_name"
      },
      {
        Header: "Description",
        accessor: "company_desc"
      }
    ],
    []
  );
  const [compData, setCompData] = useState([]);
//   const [totalData, setTotalData] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(5);

  let initPageData = {compData: [], totalData:0, currentPage:1, pageSize:3};

  const [currentPageData, setCurrentPageData] = useState(initPageData);

  const updatePageSize = (size) => {
    setCurrentPageData({...currentPageData, pageSize:size})
    getCompanyData(currentPageData.currentPage, size);
    // { ...openWord, pol: true }
  }

  const updatePageNumber = (direction) => {
    var first = 1;
    var last = Math.ceil(currentPageData.totalData / currentPageData.pageSize);
    if(direction === "next") {
      setCurrentPageData({...currentPageData, currentPage: ++currentPageData.currentPage});
    }
    else if(direction === "previous") {
      setCurrentPageData({...currentPageData, currentPage: --currentPageData.currentPage});
    }
    else if(direction === "first") {
      // setCurrentPageData({...currentPageData, currentPage: first});
      currentPageData.currentPage = first;
      setCurrentPageData(currentPageData);
    }
    else if(direction === "last") {
      currentPageData.currentPage = last;
      // setCurrentPageData({...currentPageData, currentPage: last});
      setCurrentPageData(currentPageData);

    }
    // setCurrentPageData({...currentPageData, pageSize:size})
    getCompanyData(currentPageData.currentPage, currentPageData.pageSize);
  }

  const getCompanyData = (currentPage, pageSize) => {
    // apiService.getCompanyData().then(
    //   () => {
    //     console.log("Data "+"Sucess");
    //   },
    //   () => {
    //     console.log("Data "+ "error");
    //   }
    // )

    apiService.getTableData("user/",{currentPage, pageSize});
    
    fetch(`http://localhost:8081/company/pagination?page=${currentPage}&size=${pageSize}`,{ headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        // console.log("ABCD", data);
        // setCompData(data);
        setCurrentPageData({compData: data.data, totalData: data.totalItems, currentPage: data.currentPage, pageSize})
      });
  }

  useEffect(() => {
    getCompanyData(1, 3);
  }, [])

  useEffect(() => {
  }, [currentPageData])

  return (
    <>
      <Table updatePageNumber={updatePageNumber} updatePageSize={updatePageSize} columns={companyColumns} data={currentPageData.compData} currentPageData={currentPageData} />
    </>
  );
}

export default MyPagination;
