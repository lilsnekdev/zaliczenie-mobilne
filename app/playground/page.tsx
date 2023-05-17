import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../../lib/planetscale';
import Search from '../search';
import ItemsTable from '../table-items';

export const dynamic = 'force-dynamic';

export default async function PlaygroundPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const items = await queryBuilder
    .selectFrom('items')
    .select(['id', 'email', 'quantity', 'price'])
    .where('email', 'like', `%${search}%`)
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Tabela przedmiotów</Title>
      <Text>
        Lista przedmiotów pobrana z bazy danych MySQL (z serwera chmurowego PlanetScale).
        Projekt przygotowany na zaliczenie przedmiotu Projektowanie serwisów internetowych dla urządzeń mobilnych.
      </Text>
      <Search />
      <Card className="mt-6">
        {/* @ts-expect-error Server Component */}
        <ItemsTable items={items} />
      </Card>
    </main>
  );
}
