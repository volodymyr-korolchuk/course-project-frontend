import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function Pagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-center px-2 text-neutral-100 py-2">
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex dark:bg-neutral-600"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon className="h-4 w-4 text-neutral-400" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0 dark:bg-neutral-600"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4 text-neutral-400" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0 dark:bg-neutral-600"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4 text-neutral-400" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex dark:bg-neutral-600"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <DoubleArrowRightIcon className="h-4 w-4 text-neutral-400" />
        </Button>
      </div>
      <div className="flex items-center">
        <div className="flex w-[100px] items-center justify-center text-sm font-light dark:text-neutral-100 text-neutral-800">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
      </div>
    </div>
  );
}

export default Pagination;
