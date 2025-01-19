import { PaginationContainer, Button } from './skins'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: ()=> void;
  onPrevious: ()=> void;
  onPageChange: Function;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onNext, onPrevious, onPageChange } = props;
  const pageNumbers = [];
  const MAX_VISIBLE_PAGES = 5;

  // Display MAX_VISIBLE_PAGES around current page
  const startPage = Math.max(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), 1);
  const endPage = Math.min(currentPage + Math.floor(MAX_VISIBLE_PAGES / 2), totalPages);

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 3) pageNumbers.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.push('...');
    pageNumbers.push(totalPages);
  }

  return (
    <PaginationContainer>
      <Button
        onClick={onPrevious}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </Button>

      {pageNumbers.map((page, index) => (
        <Button
          key={index}
          onClick={() => page !== '...' && onPageChange(page)}
          disabled={page === '...'}
          active={page === currentPage}
          aria-label={`Page ${page}`}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={onNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;