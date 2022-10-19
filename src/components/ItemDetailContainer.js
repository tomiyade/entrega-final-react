import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const camisetas = [
    {
        id: 1,
        img: 'https://bocashop.vteximg.com.br/arquivos/ids/168359-1000-1000/HE6323_1.jpg?v=637922173219300000',
        name: "Camiseta Titular Boca Juniors",
    },
    {
        id: 2,
        name: "Camiseta Titular River Plate",
        price: "12500",
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/42f6e0d4f39047e8b476aee60109bc4c_9366/Camiseta_Titular_River_Plate_22-23_Blanco_GB7592_01_laydown.jpg',
        category: "titulares"

    },
    {
        id: 3,
        name: "Camiseta  Independiente de Avellaneda",
        price: "10000",
        img: 'https://sporting.vtexassets.com/arquivos/ids/377655-800-800?v=637692450793900000&width=800&height=800&aspect=true',
        category: "titulares"

    },
    {
        id: 4,
        name: "Camiseta Suplente Boca Juniors",
        price: "9500",
        img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d94fbf4a70884a228009af01016426f0_9366/Camiseta_Alternativa_Boca_Juniors_22-23_Blanco_IB9458_01_laydown.jpg",
        category: "suplentes"
    },
    {
        id: 5,
        name: "Camiseta Suplente River Plate",
        price: "9500",
        img: "http://cdn.shopify.com/s/files/1/0567/2907/5873/products/riversup.png?v=1662571229",
        category: "suplentes"
    },
    {
        id: 6,
        name: "Camiseta Suplente Independiente de Avellaneda",
        price: "8000",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/765590/01/fnd/ARG/fmt/png",
        category: "suplentes"
    },
    {
        id: 7,
        name: "Camiseta Titular Racing Club de Avellaneda",
        price: "10000",
        img: "https://media.tycsports.com/files/2022/04/01/409895/la-nueva-camiseta-titular-de-racing_w416.jpg",
        category: "titulares"
    },
    {
        id: 8,
        name: "Camiseta Suplente Racing Club de Avellaneda",
        price: "8000",
        img: "https://locademia.racingclub.com.ar/Image/0/600_600-K2351D4RW-K005_kombat_away_jersey_slim_black_talle_XL_1.jpg",
        category: "suplentes"
    },
    {
        id: 9,
        name: "Camiseta Titular San Lorenzo de Almagro",
        price: "9000",
        img: "https://www.soycuervo.com/ccstore/v1/images/?source=/file/v5145709778776923657/products/9892_490_1.jpg&height=475&width=475",
        category: "titulares"
    },
    {
        id: 10,
        name: "Camiseta Suplente San Lorenzo de Almagro",
        price: "7500",
        img: "https://newsport.vteximg.com.br/arquivos/ids/9311696-1000-1000/CK9871100-A.jpg?v=637654200086330000",
        category: "suplentes"
    },
    {
        id: 11,
        name: "Camiseta Titular Velez Sarfield",
        price: "9000",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/268/104/products/home-2022-0111-8d35a9bd57598c12d816495271608100-640-0.jpg",
        category: "titulares"
    },
    {
        id: 12,
        name: "Camiseta Suplente Velez Sarfield",
        price: "7500",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/268/104/products/away-20221-d4c1f82b7bb9f11d2916507222822270-480-0.jpg",
        category: "suplentes"
    },
];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { detalleId } = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(camisetas);
            }, 1000);
        });

        getData.then(res => setData(res.find(camisetas => camisetas.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer