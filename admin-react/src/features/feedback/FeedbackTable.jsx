import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import FeedbackTableRow from "./FeedbackTableRow";

const feedback = {
  from: "Solomon Aboagye",
  createdAt: new Date(Date.now()).toISOString(),
  status: "pending",
  rating: 3,
  title: "Lorem, ipsum dolor sit amet consectetur adipisicing",
  message:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel ipsa quidem facilis maxime, commodi officia quia laboriosam saepe eaque cupiditate quod voluptatem qui aliquam natus corrupti distinctio odit autem?",
  userType: "student",
};

function FeedbackTable ()
{
  
  const feedbacks = Array.from({ length: 10 }, (_, i) => ({
    ...feedback,
    id: i,
  }));
  return (
    <Menus>
      <Table columns="2fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>From</div>
          <div>Rating</div>
          <div>Status</div>
          <div>Created At</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={feedbacks}
          render={(data) => <FeedbackTableRow data={data} />}
        />
        <Pagination count={100} />
      </Table>
    </Menus>
  );
}

export default FeedbackTable;
