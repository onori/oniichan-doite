import { Select, FormControl, FormLabel } from "@chakra-ui/react";

export default function Item() {
  return (
    <FormControl id="item">
      <FormLabel>アイテムを検索</FormLabel>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </FormControl>
  );
}
