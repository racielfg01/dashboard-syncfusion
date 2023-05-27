import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
Search,
  Page,
Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header,PageLayout } from "../components";

const Employees = () => {
  return (
    <PageLayout>
      <Header title="Employees" category="Page" />
      <GridComponent id="gridcomp" 
      dataSource={employeesData} 
      allowPaging
      allowSorting
      toolbar={["Search"]}
      width="auto"

      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Search,
            Page,
            Toolbar
       
          ]}
        />
      </GridComponent>
    </PageLayout>
  );
};




export default Employees