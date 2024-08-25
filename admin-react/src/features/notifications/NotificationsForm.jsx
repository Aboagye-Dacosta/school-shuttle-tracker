import { useForm } from "react-hook-form";
import styled from "styled-components";

import Button from "../../ui/Button";
import ControlledSelect from "../../ui/ControlledSelect";
import FormRow from "../../ui/FormRow";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import SpinnerMini from "../../ui/SpinnerMini";
import Textarea from "../../ui/Textarea";
import { useCreateNotification } from "./useCreateNotification";

const StyledNotificationsForm = styled.div`
  padding: 0 2rem;
  & > form {
    padding: 2rem;
    background-color: var(--color-grey-0);
  }

  & h3 {
    font-weight: bold;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

export default function NotificationsForm() {
  const { createNotification, isCreatingNotification } =
    useCreateNotification();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (value) => {
    createNotification(
      {
        ...value,
        notificationTarget: value["notificationTarget"]["value"],
        createdAt: new Date(Date.now()).toISOString(),
      },
      {
        onSettled() {
          reset();
        },
      }
    );
  };

  return (
    <StyledNotificationsForm>
      <form onSubmit={handleSubmit(handleFormSubmit)} method="Post">
        <Heading as="h3">Notification Form</Heading>
        <FormRowVertical
          label="Notification title"
          error={errors?.title?.message}
        >
          <Input
            disabled={isCreatingNotification}
            {...register("notificationTitle", {
              required: {
                message: "Notification title is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Notification Message"
          error={errors?.message?.message}
        >
          <Textarea
            disabled={isCreatingNotification}
            {...register("notificationMessage", {
              required: {
                message: "Notification message is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Notification Target"
          error={errors?.target?.message}
        >
          <ControlledSelect
            control={control}
            message={"Notification targe is required"}
            name={"notificationTarget"}
          >
            <StyledSelect
              disabled={isCreatingNotification}
              options={[
                { label: "Students", value: "students" },
                { label: "Drivers", value: "drivers" },
                { label: "All", value: "all" },
              ]}
            />
          </ControlledSelect>
        </FormRowVertical>
        <FormRow>
          <Button variation="secondary" type="reset">
            Reset
          </Button>
          <Button>
            Create Notification {isCreatingNotification && <SpinnerMini />}
          </Button>
        </FormRow>
      </form>
    </StyledNotificationsForm>
  );
}
