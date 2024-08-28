import { useForm } from "react-hook-form";
import styled from "styled-components";

import { useDriverCont } from "../../context/DriversFormContext";
import Button from "../../ui/Button";
import ControlledSelect from "../../ui/ControlledSelect";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import SpinnerMini from "../../ui/SpinnerMini";
import { useBuses } from "../buses/useBuses";
import { useCreateDriver } from "./useCreateDriver";
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

function DriversForm() {
  const { createDriver, isCreatingDriver } = useCreateDriver();
  const { updateDriver, isUpdatingDriver } = useUpdateDriver();
  const { driver, hasDriver, setDriver, setHasDriver } = useDriverCont();

  const { buses, isLoadingBuses } = useBuses();
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({ values: driver });

  const handleFormSubmit = (value) => {
    if (Object.keys(driver).length && hasDriver) {
      updateDriver(value, {
        onSettled() {
          reset();
        },
      });
    } else {
      createDriver(
        {
          ...value,
          userImage: value["userImage"]?.length ? value["driverImage"][0] : "",
          createdAt: new Date(Date.now()).toISOString(),
        },
        {
          onSettled() {
            setDriver({});
          },
        }
      );
    }
  };

  return (
    <StyledDriversForm>
      <StyledHeading as="h3">Drivers Form</StyledHeading>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRowVertical label="Driver's Name" error={errors?.name?.message}>
          <Input
            disabled={isCreatingDriver || isUpdatingDriver}
            id="driver-name"
            {...register("username", {
              required: {
                message: "Drivers name is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical label="Driver's Email" error={errors?.email?.message}>
          <Input
            disabled={isCreatingDriver || isUpdatingDriver}
            id="driver-email"
            type="email"
            {...register("userEmail", {
              required: {
                message: "Drivers email is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Driver's Password"
          error={errors?.password?.message}
        >
          <Input
            disabled={isCreatingDriver || isUpdatingDriver}
            id="driver-password"
            type="password"
            {...register("driverPassword", {
              required: {
                message: "Drivers password is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>

        <FormRowVertical label="Drivers Image">
          <FileInput
            id="driver-image"
            {...register("userImage")}
            disabled={isCreatingDriver || isUpdatingDriver}
          />
        </FormRowVertical>

        <FormRowVertical
          label="Drivers Phone Number"
          error={errors?.phone?.message}
        >
          <Input
            id="driver-tel"
            disabled={isCreatingDriver || isUpdatingDriver}
            {...register("driverPhone", {
              required: {
                message: "Drivers phone is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Drivers Address"
          error={errors?.address?.message}
        >
          <Input
            disabled={isCreatingDriver || isUpdatingDriver}
            id="driver-address"
            {...register("driverAddress", {
              required: {
                message: "Drivers address is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        {/* <Row type="horizontal"> */}
        <FormRowVertical
          label="Select Bus Number"
          error={errors?.status?.message}
        >
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
        </FormRowVertical>
        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            disabled={isCreatingDriver || isUpdatingDriver}
            onClick={() => {
              setHasDriver(false);
              setDriver(null);
              reset({
                driverName: undefined,
                userImage: undefined,
                driverEmail: undefined,
                driverPassword: undefined,
                busNumber: undefined,
                driverAddress: undefined,
                driverPhone: undefined,
              });
            }}
          >
            Reset
          </Button>
          <Button
            disabled={isCreatingDriver || isUpdatingDriver}
            type={"submit"}
          >
            {(isCreatingDriver || isUpdatingDriver) && <SpinnerMini />} Save
          </Button>
        </FormRow>
        {/* </Row> */}
      </StyledForm>
    </StyledDriversForm>
  );
}

export default DriversForm;
