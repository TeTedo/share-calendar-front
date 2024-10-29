import { AdMain } from "components/advertisement/AdMain";
import { GroupList } from "components/list/GroupList";
import { ListTop } from "components/list/ListTop";
import React from "react";

export const ListPage = () => {
  return (
    <div>
      <ListTop />
      <AdMain />
      <GroupList />
    </div>
  );
};
