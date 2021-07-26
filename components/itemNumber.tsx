import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function ItemNumber() {
  return (
    <FormControl id="itemNumber">
      <FormLabel>必要なアイテム個数を入力: 1-10000</FormLabel>
      <NumberInput defaultValue={1} min={1} max={10000}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}
