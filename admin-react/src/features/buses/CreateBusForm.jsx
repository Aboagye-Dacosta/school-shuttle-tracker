import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import ControlledSelect from "../../ui/ControlledSelect";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCreateBus } from "./useCreateBus";
import { useUpdateBus } from "./useUpdateBus";

const options = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

function CreateBusForm({ closeModal, bus }) {
  const { createBus, isCreatingBus } = useCreateBus();
  const { updateBus, isUpdatingBus } = useUpdateBus();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: bus
      ? {
          ...bus,
          busStatus: {
            label:
              bus["busStatus"].substring(0, 1).toUpperCase() +
              bus["busStatus"].substring(1),
            value: bus["busStatus"],
          },
          busImage: "",
          destinationOne: bus["destinationOne"]["destination"],
          destinationTwo: bus["destinationTwo"]["destination"],
          destinationTwoGpsAddress: bus["destinationTwo"]["location"],
          destinationOneGpsAddress: bus["destinationOne"]["location"],
        }
      : {},
  });

  const handleFormSubmit = (value) =>
  {
    const {
      busNumber,
      busStatus,
      destinationOne,
      busImage,
      destinationTwo,
      destinationOneGpsAddress,
      destinationTwoGpsAddress,
    } = value;

    const busObj = {
      busNumber,
      busImage: busImage ? busImage[0] : !busImage && Boolean(bus) ? bus["busImage"] : "",
      busStatus: busStatus.value,
      destinationOne: {
        destination: destinationOne,
        location: destinationOneGpsAddress,
      },
      destinationTwo: {
        destination: destinationTwo,
        location: destinationTwoGpsAddress,
      },
    };

    // apiCreateBus(busObj);
    if (bus) {
      updateBus(
        { ...busObj, id: bus["id"] },
        {
          onSettled: () => {
            closeModal();
          },
        }
      );
    } else {
      createBus(busObj, {
        onSettled: () => {
          closeModal();
        },
      });
    }
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
      <FormRow label="Bus Image">
        <FileInput id="busImage" {...register("busImage")} />
      </FormRow>
      <FormRow label="Select Status" error={errors?.status?.message}>
        <ControlledSelect
          name="busStatus"
          message={"Status is required"}
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
              message: "Destination should be provided",
              value: true,
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Destination 1 gps address"
        error={errors?.destinationOne?.message}
      >
        <Input
          id="destination-1-gps-address"
          {...register("destinationOneGpsAddress", {
            required: {
              message: "Gps address should be provided",
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
              message: "Destination should be provided",
              value: true,
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Destination 2 gps address"
        error={errors?.destinationOne?.message}
      >
        <Input
          id="destination-1-gps-address"
          {...register("destinationTwoGpsAddress", {
            required: {
              message: "Gps address should be provided",
              value: true,
            },
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          onClick={reset}
          disabled={isCreatingBus}
        >
          Reset
        </Button>
        <Button disabled={isCreatingBus}>
          {(isCreatingBus || isUpdatingBus) && <SpinnerMini />}{" "}
          {bus ? "Update" : "Submit"}
        </Button>
      </FormRow>
    </form>
  );
}

CreateBusForm.propTypes = {
  closeModal: PropTypes.func,
  bus: PropTypes.object,
};

export default CreateBusForm;
