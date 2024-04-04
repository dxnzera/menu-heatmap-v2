import {Select} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


export function FilterStore () {

return (
  <Select.Root size={"3"}>
    <Select.Trigger placeholder="Select Store" />
    <Select.Content>
      <Select.Group>
        <Select.Label>Stores</Select.Label>
        <Select.Item value="portao">Portão</Select.Item>
        <Select.Item value="ibipora">Ibiporã</Select.Item>
        <Select.Item value="quintino">Quintino</Select.Item>
        <Select.Item value="joaop">João Paulino</Select.Item>
        <Select.Item value="av.sp">Av.São Paulo</Select.Item>
        <Select.Item value="campo">Campo Comprido</Select.Item>
        <Select.Item value="foz">Foz</Select.Item>
        <Select.Item value="tiradentes">Tiradentes</Select.Item>
      </Select.Group>
      <Select.Separator />
    </Select.Content>
  </Select.Root>
)}