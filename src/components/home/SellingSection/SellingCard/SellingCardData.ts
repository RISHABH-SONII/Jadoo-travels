import sellingcardImage1 from "../../../../assets/SellingSectionImages/SellingSectionImage1(2).png";
import sellingcardImage2 from "../../../../assets/SellingSectionImages/SellingSectionImage2(2).jpeg";
import sellingcardImage3 from "../../../../assets/SellingSectionImages/SellingSectionImage3(1).png";
interface ISellingCardData {
  image: string;
  placeName: string;
  amount: string;
  tripDays: string;
}
export const SellingCardData: ISellingCardData[] = [
  {
    image: sellingcardImage1,
    placeName: "Rome, Italty",
    amount: "$5,42k",
    tripDays: "10 Days Trip",
  },
  {
    image: sellingcardImage2,
    placeName: "London, UK",
    amount: "$4.2k",
    tripDays: "12 Days Trip",
  },
  {
    image: sellingcardImage3,
    placeName: "Full Europe",
    amount: "$15k",
    tripDays: "28 Days Trip",
  },
];
