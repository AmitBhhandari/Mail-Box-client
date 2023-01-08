import React,{useEffect} from "react";
import { ListGroup } from "react-bootstrap";
import InboxListItem from "./InboxListItem";

import { useSelector } from "react-redux";


const InboxList = () => {
  const Items = useSelector((state) => state.mail.items);
   console.log(Items);

  return (
    <>
      <ListGroup as="ul" variant="primary">
        {Items.map((item) => (
          <InboxListItem
            email={item.email}
            key={item.id}
            subject={item.subject}
            text={item.text}
            id={item.id}
            From={item.From}
          ></InboxListItem>
        ))}
      </ListGroup>
    </>
  );
};
export default InboxList;