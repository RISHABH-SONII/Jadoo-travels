import cardImage1 from "../../../../assets/ServicesSectionImages/OfferServiceImage1.png";
import cardImage2 from "../../../../assets/ServicesSectionImages/OfferServiceImage2.png";
import cardImage3 from "../../../../assets/ServicesSectionImages/OfferServiceImage3.png";
import cardImage4 from "../../../../assets/ServicesSectionImages/OfferServiceImage4.png";
interface ICardData {
  image: string;
  cardHeader: string;
  cardDescription: string;
}
export const CardData: ICardData[] = [
  {
    image: cardImage1,
    cardHeader: "Calculated Weather ",
    cardDescription:
      "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image: cardImage2,
    cardHeader: "Best Flights",
    cardDescription:
      "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: cardImage3,
    cardHeader: "Local Events",
    cardDescription:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    image: cardImage4,
    cardHeader: "Customization",
    cardDescription:
      "We deliver outsourced aviation services for military customers",
  },
];
