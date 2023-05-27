import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
Selection,
  Page,
Toolbar,
  Inject,
  Edit,Sort,Filter
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header,PageLayout } from "../components";

const Customers = () => {
  return (
    <PageLayout>
      <Header title="Customers" category="Page" />
      <GridComponent id="gridcomp" 
      dataSource={customersData} 
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting:true,allowEditing:true}}
      width="auto"

      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[

            Page,
            Toolbar,Selection,Sort,Filter,Edit
       
          ]}
        />
      </GridComponent>
    </PageLayout>
  );
};




export default Customers