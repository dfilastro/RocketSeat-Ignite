import { Flex, Grid, Image, Stack } from '@chakra-ui/react';
import CardsInfoCountries from '../../components/CardsInfoCountries';
import CityCards from '../../components/CityCards';

import api from '../../services/api';
import city from '../../services/city-api';
import HeaderSlug from '../../components/HeaderSlug';

interface CityProps {
  cityId: number;
  name: string;
  country: string;
  image: string;
  flag: string;
}

interface ContinentProps {
  uid: number;
  name: string;
  description: string;
  countries: number;
  languages: number;
  cities: number;
  coverImg: string;
}

interface ContinentFullProps {
  continent: ContinentProps;
  cities: CityProps[];
}

export default function Continent({ continent, cities }: ContinentFullProps) {
  return (
    <>
      <HeaderSlug />
      <Stack h={['100px', '200px', '300px', '500px']}>
        <Image
          height={['100px', '200px', '300px', '500px']}
          position='absolute'
          zIndex='-99'
          minW='100%'
          src={continent.coverImg}
          fit='cover'
        />
        <Stack>
          <Flex
            fontSize={['10px', '20px', '30px', '48px']}
            fontWeight='600'
            color='white'
            ml={['28px', '56px', '84px', '140px']}
            display='flex'
            alignItems='flex-end'
            height={['100px', '200px', '300px', '500px']}
            paddingBottom={['12px', '24px', '36px', '59px']}
          >
            {continent.name}
          </Flex>
        </Stack>
      </Stack>

      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        pt={['16px', '32px', '48px', '80px']}
        pb={['16px', '32px', '48px', '80px']}
        pr={['28px', '56px', '84px', '140px']}
        pl={['28px', '56px', '84px', '140px']}
        gap={['14px', '28px', '42px', '70px']}
      >
        <Flex
          w={['100%', '100%', '100%', '50%']}
          fontSize={['10px', '15px', '24px']}
          textAlign='justify'
        >
          {continent.description}
        </Flex>
        <Flex
          m='auto'
          alignItems='center'
          w={['80%', '80%', '80%', '40%']}
          justifyContent='space-between'
        >
          <CardsInfoCountries num={continent.countries} desc='paises' />
          <CardsInfoCountries num={continent.languages} desc='línguas' />
          <CardsInfoCountries num={continent.cities} desc='cidades +100' />
        </Flex>
      </Flex>

      <Stack
        pl={['28px', '56px', '84px', '140px']}
        pr={['28px', '56px', '84px', '140px']}
        pb={['16px', '32px', '48px', '80px']}
      >
        <Flex
          fontSize={['10px', '16px', '24px', '36px']}
          fontWeight='500'
          color='gray.800'
          pb={['9px', '18px', '27px', '44px']}
        >
          Cidades +100
        </Flex>

        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
          gap={['1px', '2px', '3px', '6px']}
          justifyItems='center'
        >
          {cities.map((city) => {
            return (
              <CityCards
                key={city.cityId}
                city={city.name}
                country={city.country}
                img={city.image}
                flag={city.flag}
              />
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { data } = await api.get(`${params.slug}`);
  const cityData = await city.get(`${params.slug}`);

  const cities = [...cityData.data];

  const continent = {
    uid: data[0].continentId,
    name: data[0].name,
    description: data[0].description,
    countries: data[0].countries,
    languages: data[0].languages,
    cities: data[0].cities,
    coverImg: cities[2].image,
  };

  return { props: { continent, cities } };
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: '1' } },
      { params: { slug: '2' } },
      { params: { slug: '3' } },
      { params: { slug: '4' } },
      { params: { slug: '5' } },
    ],
    fallback: false,
  };
};
