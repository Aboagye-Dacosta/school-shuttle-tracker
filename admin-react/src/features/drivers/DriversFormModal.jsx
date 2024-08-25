import { useForm } from "react-hook-form";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import ControlledSelect from "../../ui/ControlledSelect";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import SpinnerMini from "../../ui/SpinnerMini";
import { useBuses } from "../buses/useBuses";
import { useDriver } from "./useDriver";
import { useUpdateDriver } from "./useUpdateDriver";

const StyledDriversForm = styled.div`
  background-color: var(--color-grey-0);
`;

const StyledForm = styled.form`
  padding: 2rem 3rem;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.7rem;
  /* background-color: var(--color-grey-200); */
  box-shadow: var(--shadow-sm);
  padding: 2rem 3rem;
`;
const StyledSelect = styled(Select)`
  width: 100%;
`;

function DriversFormModal({ closeModal }) {
  const { id } = useParams();
  const { updateDriver, isUpdatingDriver } = useUpdateDriver();
  const { driver } = useDriver(id);

  const { buses, isLoadingBuses } = useBuses();
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: driver });

  const handleFormSubmit = (value) => {
    updateDriver(value, {
      onSettled() {
        reset();
        closeModal();
      },
    });
  };

  return (
    <StyledDriversForm>
      <StyledHeading as="h3">Drivers Form</StyledHeading>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow label="Driver's Name" error={errors?.name?.message}>
          <Input
            disabled={isUpdatingDriver}
            id="driver-name"
            {...register("driverName", {
              required: {
                message: "Drivers name is required",
                value: true,
              },
            })}
          />
        </FormRow>
        <FormRow label="Driver's Email" error={errors?.email?.message}>
          <Input
            disabled={isUpdatingDriver}
            id="driver-email"
            type="email"
            {...register("driverEmail", {
              required: {
                message: "Drivers email is required",
                value: true,
              },
            })}
          />
        </FormRow>
        <FormRow label="Driver's Password" error={errors?.password?.message}>
          <Input
            disabled={isUpdatingDriver}
            id="driver-password"
            type="password"
            {...register("driverPassword", {
              required: {
                message: "Drivers password is required",
                value: true,
              },
            })}
          />
        </FormRow>

        <FormRow label="Drivers Image">
          <FileInput
            id="driver-image"
            {...register("driverImage")}
            disabled={isUpdatingDriver}
          />
        </FormRow>

        <FormRow label="Drivers Phone Number" error={errors?.phone?.message}>
          <Input
            id="driver-tel"
            disabled={isUpdatingDriver}
            {...register("driverPhone", {
              required: {
                message: "Drivers phone is required",
                value: true,
              },
            })}
          />
        </FormRow>
        <FormRow label="Drivers Address" error={errors?.address?.message}>
          <Input
            disabled={isUpdatingDriver}
            id="driver-address"
            {...register("driverAddress", {
              required: {
                message: "Drivers address is required",
                value: true,
              },
            })}
          />
        </FormRow>
        {/* <Row type="horizontal"> */}
        <FormRow label="Select Bus Number" error={errors?.status?.message}>
          <ControlledSelect
            name="busNumber"
            message={"Status is required"}
            control={control}
          >
            <StyledSelect
              options={
                !isLoadingBuses
                  ? buses.map((bus) => ({
                      value: bus?.busNumber,
                      label: bus?.busNumber,
                    }))
                  : { value: "loading", label: "loading" }
              }
            />
          </ControlledSelect>
        </FormRow>
        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            disabled={isUpdatingDriver}
            onClick={() => {
              reset();
            }}
          >
            Reset
          </Button>
          <Button disabled={isUpdatingDriver} type={"submit"}>
            {isUpdatingDriver && <SpinnerMini />} Save
          </Button>
        </FormRow>
        {/* </Row> */}
      </StyledForm>
    </StyledDriversForm>
  );
}

export default DriversFormModal;
