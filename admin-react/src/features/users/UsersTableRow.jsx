import PropTypes from "prop-types";

import Table from "../../ui/Table";
import TableImg from "../../ui/TableImg";
import Tag from "../../ui/Tag";

import UsersTableActions from "./UsersTableActions";

function UsersTableRow({ data: { id, image, username, email, reference ,status} }) {
  return (
    <Table.Row id={id}>
      <div>
        <TableImg src={image} />
      </div>
      <div>{username}</div>
      <div>{email}</div>
      <div><Tag type={status =="blocked" ? "grey" : "green"}>{ status}</Tag></div>
      <div>{reference ?? <span>&mdash; &mdash;</span>}</div>
      <div>
        <UsersTableActions id={id} status={status} />
      </div>
    </Table.Row>
  );
}

UsersTableRow.propTypes = {
  data: PropTypes.object,
};

export default UsersTableRow;
