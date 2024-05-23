export interface routerlink {
    url: string;
    // id: number;
    // type: number;
}
export interface popularCars1 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars2 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars3 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars4 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars5 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars6 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface warehouse {
    img: string,
    text: string,
    carModel: string,
    heading: string,
    name: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    title: string,
}

export interface movings {
    img: string,
    text: string,
    carModel: string,
    heading: string,
    name: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    title: string,
}
export interface testimonial {
    img: string,
    Name: string,
    rating: string,
    para: string
}

export interface list {
    item: string,
}
export interface carTypes {
    img: string,
    heading: string,
    cars: string,
}
export interface listingDetails {
    img: string
}
export interface thumbnails {
    img: string
}
export interface interestedCars {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface listingGrid {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface header {
    tittle: string,
    icon: string,
    showAsTab: boolean,
    separateRoute?: boolean,
    routes?: string,
    hasSubRoute?: boolean,
    showSubRoute?: boolean,
    menu?: menu[],
}
export interface menu {
    menuValue: string,
    routes?: string,
    hasSubRoute: boolean,
    showSubRoute: boolean,
    subMenus?: submenu[],
}
export interface submenu {
    menuValue: string,
    routes: string,
    hasSubRoute: boolean,
    showSubRoute: boolean,
    subMenus: [],
}
export interface carousel {
    img: string,
    Name: string,
    rating: string,
    para: string
}