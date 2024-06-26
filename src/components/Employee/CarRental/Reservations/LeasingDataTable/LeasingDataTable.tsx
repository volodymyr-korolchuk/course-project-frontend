import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "./Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Rental } from "@/types";
import { capitalize, separateWords } from "@/lib/utils";

interface LeasingDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function LeasingDataTable<TData, TValue>({
  columns,
  data,
}: LeasingDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filterFeature, setFilterFeature] = useState("email");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  type RentalKeys = keyof Rental;

  const rentalKeys: RentalKeys[] = [
    "id",
    "email",
    "pickupDate",
    "returnDate",
    "pickupLocation",
    "vehicleClass",
    "vehicle",
    "totalPrice",
  ];

  const featureFilter = (
    <div className="flex items-center justify-center gap-2">
      <Input
        placeholder="Filter..."
        value={
          (table.getColumn(filterFeature)?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn(filterFeature)?.setFilterValue(event.target.value)
        }
        className="max-w-sm dark:bg-neutral-900 border border-neutral-800 dark:text-neutral-100"
      />

      <Select
        onValueChange={(value) => {
          setFilterFeature(value);
        }}
      >
        <SelectTrigger className="w-[200px] gap-1">
          <SelectValue placeholder={"Feature"}>
            {separateWords(capitalize(filterFeature))}
          </SelectValue>
        </SelectTrigger>

        <SelectContent
          side="top"
          className="dark:bg-neutral-900/50 backdrop-blur-[5px]"
        >
          {rentalKeys.map((feature) => (
            <SelectItem key={feature} value={feature} className="capitalize">
              {separateWords(feature)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const rowsPerPageSelector = (
    <div className="flex items-center space-x-2">
      <p className="text-sm font-light dark:text-neutral-100 ">Rows per page</p>
      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>
        <SelectContent
          side="top"
          className="dark:bg-neutral-900/50 backdrop-blur-[5px]"
        >
          {[4, 6, 8, 10].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const tableDisplayedColumnsSelector = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto font-light dark:bg-indigo-500 
              dark:hover:bg-indigo-400 border border-neutral-800 dark:text-neutral-100"
        >
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className=" dark:bg-neutral-900/80 backdrop-blur-[5px] dark:text-neutral-100 border-neutral-800"
      >
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize hover:bg-neutral-400"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {separateWords(column.id)}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const controlsContainer = (
    <div className="flex h-fit items-center gap-8">
      {featureFilter}
      {rowsPerPageSelector}
      {tableDisplayedColumnsSelector}
    </div>
  );

  const tableHeader = (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className="border-b border-neutral-800">
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );

  const tableBody = (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
            className="not-last:border-b border-neutral-800 dark:text-white text-neutral-950"
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="text-center text-pretty">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            className="text-center dark:text-neutral-100"
          >
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );

  return (
    <div className="flex flex-col overflow-hidden p-3 gap-3">
      {controlsContainer}

      <div className="rounded-md flex-1 border border-neutral-800 h-[80%]">
        <Table>
          {tableHeader}
          {tableBody}
        </Table>
        <Pagination table={table} />
      </div>
    </div>
  );
}

export default LeasingDataTable;
