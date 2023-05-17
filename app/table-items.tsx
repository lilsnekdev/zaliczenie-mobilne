import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface Item {
  id: number;
  email: string;
  quantity: number;
  price:  number;
}

export default async function ItemsTable({ items }: { items: Item[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nazwa</TableHeaderCell>
          <TableHeaderCell>Ilość</TableHeaderCell>
          <TableHeaderCell>Cena</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Text>{item.quantity} szt</Text>
            </TableCell>
            <TableCell>
              <Text>{item.price} zł</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
