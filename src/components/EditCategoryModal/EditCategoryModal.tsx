import { Dispatch, FC, SetStateAction, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { ICategory } from "../../entities";
import { OrangeButton } from "../../global";
import { saveChangedCategory } from "../../redux/actions/actionCreators";
import { Modal } from "../Modal/Modal";
import { categoryEditFormDefault } from "../../assets/defaultValues";

export const EditCategoryModal: FC<IEditCategoryModalProps> = ({
  isOpen,
  category,
  onClose,
}) => {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm({
    defaultValues: categoryEditFormDefault
  });

  const onSaveChangesHandle = (values: typeof categoryEditFormDefault) => {
    dispatch(saveChangedCategory(values as ICategory));
  };

  useEffect(() => {
    reset({
      uuid: category?.uuid,
      name: category?.name,
      subscription: category?.subscription
    });
  }, [category]);

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
          {...register("name", { required: true })}
        />
        <InputLabel shrink htmlFor="subscription" margin="dense">
          Введите описание категории
        </InputLabel>
        <TextField
          id="subscription"
          fullWidth
          margin="dense"
          rows={4}
          {...register("subscription", { required: true })}
        />
        <OrangeButton type="submit">Сохранить</OrangeButton>
      </form>
    </Modal>
  );
};

export interface IEditCategoryModalProps {
  onClose: Dispatch<SetStateAction<boolean>>;
  category: ICategory | undefined;
  isOpen: boolean;
}
