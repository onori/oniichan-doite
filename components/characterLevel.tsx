import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function CharacterLevel() {
  return (
    <FormControl id="level">
      <FormLabel>キャラのレベルを入力: 1-150</FormLabel>
      <NumberInput defaultValue={1} min={1} max={150}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}
