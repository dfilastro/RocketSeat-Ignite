import { Image, Link } from '@chakra-ui/react';
import { Header } from './Header';

export default function HeaderSlug() {
  return (
    <>
      <Link href={'/'}>
        <Image
          pt='42'
          pl='140px'
          position='absolute'
          src='https://user-images.githubusercontent.com/90292951/174458185-3aec0928-f567-450a-9761-ece9a71aec30.png'
        />
      </Link>
      <Header />
    </>
  );
}
