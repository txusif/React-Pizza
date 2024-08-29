import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleRemovePizza() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleRemovePizza}>
      Remove
    </Button>
  );
}

export default DeleteItem;
