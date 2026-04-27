export interface Photo {
  id: string
  url: string
  title: string
}

export const photos: Photo[] = [
  {
    id: '1',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mountain%20landscape%20with%20beautiful%20sky%20photography&image_size=square_hd',
    title: '山间美景'
  },
  {
    id: '2',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=city%20night%20lights%20architecture%20photography&image_size=square_hd',
    title: '城市夜景'
  },
  {
    id: '3',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ocean%20waves%20sunset%20beach%20photography&image_size=square_hd',
    title: '海边日落'
  },
  {
    id: '4',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=forest%20path%20sunlight%20trees%20nature%20photography&image_size=square_hd',
    title: '林间小径'
  },
  {
    id: '5',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=starry%20night%20milky%20way%20astronomy%20photography&image_size=square_hd',
    title: '星空银河'
  },
  {
    id: '6',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cherry%20blossom%20spring%20flowers%20garden%20photography&image_size=square_hd',
    title: '樱花盛开'
  }
]
