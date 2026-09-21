export const dynamic = 'force-dynamic';
import { LaunchesComponent } from '@gitroom/frontend/components/launches/launches.component';
import { Metadata } from 'next';
import { brandName } from '@gitroom/helpers/utils/brand.name';
export const metadata: Metadata = {
  title: `${brandName()} Calendar`,
  description: '',
};
export default async function Index() {
  return <LaunchesComponent />;
}
