export const dynamic = 'force-dynamic';
import { Login } from '@gitroom/frontend/components/auth/login';
import { Metadata } from 'next';
import { brandName } from '@gitroom/helpers/utils/brand.name';
export const metadata: Metadata = {
  title: `${brandName()} Login`,
  description: '',
};
export default async function Auth() {
  return <Login />;
}
