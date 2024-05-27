import { useState } from "react";
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
  const [status, setStatus] = useState("");
  const { control } = useForm();

  console.log(status);

  return (
    <form>
      <FormRow label="Bus Number">
        <Input id="busNumber" />
      </FormRow>
      <FormRow label="Bus Image">
        <FileInput id="busImage" />
      </FormRow>
      <FormRow label="Select Status">
        <ControlledSelect
          name="cabin"
          message={"cabin is required"}
          control={control}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <Select options={options} />
        </ControlledSelect>
      </FormRow>
      <FormRow label="Select Driver">
        <ControlledSelect
          name="cabin"
          message={"cabin is required"}
          control={control}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <Select options={options} />
        </ControlledSelect>
      </FormRow>
      <FormRow label="Destination 1">
        <Input id="destination-1" />
      </FormRow>
      <FormRow label="Destination 2">
        <Input id="destination-2" />
      </FormRow>

      <FormRow type="horizontal">
        <Button type="reset" variation="secondary">
          Reset
        </Button>
        <Button>Submit</Button>
      </FormRow>
    </form>
  );
}

export default CreateBusForm;
