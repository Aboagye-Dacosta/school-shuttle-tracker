import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import ControlledSelect from "../../ui/ControlledSelect";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const options = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

function CreateBusForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (value) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormRow label="Bus Number" error={errors?.busNumber?.message}>
        <Input
          id="busNumber"
          {...register("busNumber", {
            required: {
              message: "Bus number should be provided",
              value: true,
            },
          })}
        />
      </FormRow>
      <FormRow label="Bus Image" error={errors?.busImg?.message}>
        <FileInput
          id="busImage"
          {...register("busImg", {
            required: {
              message: "Bus image should be provided",
              value: true,
            },
          })}
        />
      </FormRow>
      <FormRow label="Select Status" error={errors?.status?.message}>
        <ControlledSelect
          name="status"
          message={"Status is required"}
          control={control}
        >
          <Select options={options} />
        </ControlledSelect>
      </FormRow>
      <FormRow label="Select Driver" error={errors?.driver?.message}>
        <ControlledSelect
          name="driver"
          message={"Driver is required"}
          control={control}
        >
          <Select options={options} />
        </ControlledSelect>
      </FormRow>
      <FormRow label="Destination 1" error={errors?.destinationOne?.message}>
        <Input
          id="destination-1"
          {...register("destinationOne", {
            required: {
              message: "Bus number should be provided",
              value: true,
            },
          })}
        />
      </FormRow>
      <FormRow label="Destination 2" error={errors?.destinationTwo?.message}>
        <Input
          id="destination-2"
          {...register("destinationTwo", {
            required: {
              message: "Bus number should be provided",
              value: true,
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Button type="reset" variation="secondary" onClick={reset}>
          Reset
        </Button>
        <Button>Submit</Button>
      </FormRow>
    </form>
  );
}

export default CreateBusForm;
