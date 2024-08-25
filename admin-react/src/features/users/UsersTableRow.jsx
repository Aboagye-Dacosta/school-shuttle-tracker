import PropTypes from "prop-types";

import Table from "../../ui/Table";
import TableImg from "../../ui/TableImg";
import Tag from "../../ui/Tag";

import UsersTableActions from "./UsersTableActions";

function UsersTableRow({
  data = {}
})
{
  
  const { id, userImage, userName, userEmail, userReference, userStatus } = data;
  return (
    <Table.Row id={id}>
      <div>
        <TableImg src={userImage} />
      </div>
      <div>{userName}</div>
      <div>{userEmail}</div>
      <div>
        <Tag type={userStatus == "blocked" ? "grey" : "green"}>{status}</Tag>
      </div>
      <div>{userReference ?? <span>&mdash; &mdash;</span>}</div>
      <div>
        <UsersTableActions id={id} status={userStatus} />
      </div>
    </Table.Row>
  );
}

UsersTableRow.propTypes = {
  data: PropTypes.object,
};

export default UsersTableRow;
