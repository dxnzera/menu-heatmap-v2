import {Select} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


export function FilterKPI () {

return (
  <Select.Root size={"3"}>
    <Select.Trigger placeholder="Select KPI" />
    <Select.Content>
      <Select.Group>
        <Select.Label>KPIS</Select.Label>
        <Select.Item value="catflow">Category Flow</Select.Item>
        <Select.Item value="stppwr">Stopping Power</Select.Item>
        <Select.Item value="avgtime">Average Time</Select.Item>
        <Select.Item value="pmission">Purshase Mission</Select.Item>
      </Select.Group>
      <Select.Separator />
    </Select.Content>
  </Select.Root>
)}