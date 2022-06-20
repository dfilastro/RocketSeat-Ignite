import { Box, Flex, Grid, GridItem, Image, Stack } from '@chakra-ui/react';
import CardsCountries from '../../components/CardsInfoCountries';
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
  console.log(cities);

  return (
    <>
      <HeaderSlug />
      <Stack h='500px'>
        <Image
          height='500px'
          position='absolute'
          zIndex='-99'
          minW='100%'
          src={continent.coverImg}
          fit='cover'
        />
        <Stack>
          <Flex
            fontSize='48px'
            fontWeight='600'
            color='white'
            ml='140px'
            display='flex'
            alignItems='flex-end'
            height='500px'
            paddingBottom='59px'
          >
            {continent.name}
          </Flex>
        </Stack>
      </Stack>

      <Flex pt='80px' pb='80px' pr='140px' pl='140px' gap='70px'>
        <Box w='50%' fontSize='24px' textAlign='justify'>
          {continent.description}
        </Box>
        <Flex m='auto' alignItems='center' w='40%' justifyContent='space-between'>
          <CardsCountries num={continent.countries} desc='paises' />
          <CardsCountries num={continent.languages} desc='línguas' />
          <CardsCountries num={continent.cities} desc='cidades +100' />
        </Flex>
      </Flex>

      <Stack pl='140px' pr='140px' pb='80px'>
        <Flex fontSize='36px' fontWeight='500' color='gray.800' pb='44px'>
          Cidades +100
        </Flex>

        <Grid templateColumns='repeat(5, 1fr)' gap='6px' justifyItems='center'>
          {cities.map((city) => {
            return (
              <CityCards
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
