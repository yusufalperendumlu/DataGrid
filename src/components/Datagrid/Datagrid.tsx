import "../../styles/Datagrid.css";
import React, { useState } from "react";

import DataGrid, { Column, Pager, Paging } from "devextreme-react/data-grid";

import { DataService } from "../../services/DataService";

interface DatagridProps {
  search: string;
}

const pageSizes = [10, 25, 50, 100];

const Datagrid: React.FC<DatagridProps> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onContentReady = (e: any) => {
    if (!collapsed) {
      e.component.expandRow(["EnviroCare"]);
      setCollapsed(false);
    }
  };

  const dataSource = [...DataService];

  return (
    <DataGrid
      dataSource={dataSource}
      allowColumnReordering={true}
      rowAlternationEnabled={true}
      showBorders={false}
      onContentReady={onContentReady}
      keyboardNavigation={{
        enterKeyAction: "startEdit",
      }}
    >
      <Column dataField="link" caption="Sosyal Medya Linki" />
      <Column dataField="name" caption="Sosyal Medya Adı" />
      <Column dataField="description" caption="Açıklama" />

      <Pager
        allowedPageSizes={pageSizes}
        showPageSizeSelector={true}
        visible={true}
        displayMode="compact"
      />

      <Paging defaultPageSize={10} enabled={true} />
    </DataGrid>
  );
};

export default Datagrid;
