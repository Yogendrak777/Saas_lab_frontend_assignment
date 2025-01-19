import Pagination from "../Pagination/index";
import Table from "../TableComp/index";
import { HomePageMainCon, MainTitleCon } from "./skins";

export interface currentProjectsObject {
  "s.no": number;
  "amt.pledged": number;
  blurb: string;
  by: string;
  country: string;
  currency: string;
  "end.time": string;
  location: string;
  "percentage.funded": number;
  "num.backers": string;
  state: string;
  title: string;
  type: string;
  url: string;
}

interface HomePageProps {
  currentProjects: currentProjectsObject[];
  currentPage: number;
  totalPages: number;
  handleNextClick: () => void;
  handlePreviousClick: () => void;
  handlePageClick: Function;
}

const Index = (props: HomePageProps) => {
  const {
    currentProjects,
    currentPage,
    totalPages,
    handleNextClick,
    handlePreviousClick,
    handlePageClick,
  } = props;

  return (
    <HomePageMainCon>
      <MainTitleCon>Kickstarter Projects</MainTitleCon>
      <Table projects={currentProjects} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextClick}
        onPrevious={handlePreviousClick}
        onPageChange={handlePageClick}
      />
    </HomePageMainCon>
  );
};

export default Index;
