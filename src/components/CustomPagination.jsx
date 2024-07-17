import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function CustomPagination({ currentPage, handlePageChange, totalPages }) {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={`cursor-pointer ${currentPage - 1 < 1 && "cursor-not-allowed text-gray-300"}`}
          />
        </PaginationItem>

        {totalPages >= 3 && Array(3).fill(0).map((num, idx) => {
          const page = idx + 1;
          if (page > totalPages) return
          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => handlePageChange(page)}
                className="cursor-pointer"
              >{idx + 1}</PaginationLink>
            </PaginationItem>
          )
        })}

        {currentPage >= 3 && totalPages >= 6 &&
          <>
            <PaginationItem>
              <PaginationEllipsis
                onClick={() => handlePageChange(totalPages / 2)}
                className="cursor-pointer"
              />
            </PaginationItem>
            < PaginationItem >
              <PaginationLink
                isActive={true}
                className="cursor-pointer"
              >{currentPage}</PaginationLink>
            </PaginationItem>
          </>
        }

        {totalPages >= 6 &&
          <PaginationItem>
            <PaginationEllipsis
              onClick={() => handlePageChange(totalPages / 2)}
              className="cursor-pointer"
            />
          </PaginationItem>
        }

        {totalPages >= 6 && Array(3).fill(0).map((num, idx) => {
          const page = idx + (totalPages - 2);
          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => handlePageChange(page)}
                className="cursor-pointer"
              >{idx + (totalPages - 2)}</PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={`cursor-pointer ${currentPage + 1 > totalPages && "cursor-not-allowed text-gray-300"}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

