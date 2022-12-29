import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { ICategory } from "../../entities";
import { OrangeButton } from "../../global";
import { saveChangedCategory } from "../../redux/actions/actionCreators";
import { Modal } from "../Modal/Modal";

export const EditCategoryModal: FC<IEditCategoryModalProps> = ({
  isOpen,
  onClose,
  categoryItem,
}) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      uuid: categoryItem.uuid,
      name: categoryItem.name,
      subscription: categoryItem.subscription
    },
  });

  const onSaveChangesHandle = (values: any) => {
    dispatch(saveChangedCategory(values));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSaveChangesHandle)}>
        <InputLabel shrink htmlFor="name" margin="dense">
          Введите название категории
        </InputLabel>
        <TextField
          id="name"
          fullWidth
          margin="dense"
          defaultValue={categoryItem.name}
          {...register("name", { required: true })}
        />
        <OrangeButton>Сохранить</OrangeButton>
      </form>
    </Modal>
  );
};

export interface IEditCategoryModalProps {
  onClose: Dispatch<SetStateAction<boolean>>;
  categoryItem: ICategory;
  isOpen: boolean;
}
