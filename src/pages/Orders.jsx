import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header,PageLayout } from "../components";
import { useStateContext } from '../contexts/ContextProvider';

const Orders = () => {
  const {currentMode}=  useStateContext();
  return (
    <PageLayout>
      <Header title="Orders" category="Page" />
      <GridComponent id="gridcomp" 
      dataSource={ordersData} 
      allowPaging
      allowSorting
      toolbar={["Search"]}
      
      // allowFiltering
      // allowExcelExport
      // allowPdfExport
      >
        <ColumnsDirective
        >
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Toolbar
          ]}
        />
      </GridComponent>
    </PageLayout>
  );
};

export default Orders;
