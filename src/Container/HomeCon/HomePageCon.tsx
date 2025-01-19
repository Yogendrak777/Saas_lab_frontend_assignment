import { useEffect, useState } from "react";
import { fetchProjects } from "../ApiHelper/index";
import HomePageIndex from "../../Componets/HomePage/index";

const Index = () => {
  const MAX_RECORDS_PER_PAGE = 5;
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // Fetch project data
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(projects.length / MAX_RECORDS_PER_PAGE);
  const startIndex = (currentPage - 1) * MAX_RECORDS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + MAX_RECORDS_PER_PAGE
  );

  const handleNextClick = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousClick = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handlePageClick = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <HomePageIndex
      currentProjects={currentProjects}
      currentPage={currentPage}
      totalPages={totalPages}
      handleNextClick={handleNextClick}
      handlePreviousClick={handlePreviousClick}
      handlePageClick={handlePageClick}
    />
  );
};

export default Index;
