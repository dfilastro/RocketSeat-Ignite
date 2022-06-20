import { Center, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <>
      <Center as='header' w='100%' h={['10', '100']}>
        <Image
          src='https://user-images.githubusercontent.com/90292951/169840750-f6cd923f-3473-4ee4-88d7-31868f2c90f0.svg'
          alt='logo'
          w={['16', '32', '46']}
        />
      </Center>
    </>
  );
}
