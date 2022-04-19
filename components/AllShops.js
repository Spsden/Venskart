import ShopThumb from "./Elements/ShopThumb"
import styles from "../styles/AllShops.module.css"

const all_shops = [
    {
        id:1,
        shopName :'Agrawal General store',
        address : 'Bhopal',
        image : 'https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg'


    },
    {
        id:2,
        shopName :'Pachauri Stationary store',
        address : 'Hathras',
        image : 'https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_1280.jpg'


    },
    {
        id:3,
        shopName :'Pushpkar Vegetable store',
        address : 'Somehwhere in India',
        image : 'https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_1280.jpg'


    },
    {
        id:4,
        shopName :'Rudy Liquior store',
        address : 'Somehwhere in India',
        image : 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_1280.png'


    },
    {
        id:5,
        shopName :'Anandniye Toiletories store',
        address : 'Near Howrah',
        image : 'https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313_1280.jpg'


    },
    {
        id:6,
        shopName :'Singh Weapons',
        address : 'Wasseypur',
        image : 'https://cdn.pixabay.com/photo/2012/12/14/01/45/howitzer-69891_1280.jpg'


    },


]



const AllShops = () => {
    const listOfShops = all_shops.map((shop) => 
    <ShopThumb key = {shop.id}
    id = {shop.id}
    shopName = {shop.shopName}
    address = {shop.address}
    image = {shop.image}/>);

    return (
        <div className={styles.container}>
            {listOfShops}
        </div>
    )
}

export default AllShops;