import { CardData } from "@/types/SharedCard";
import BookIcon from "@/icons/book.svg";
import UserIcon from "@/icons/file.svg";

export const homeCardsData: CardData[] = [
    {
        id: "1",
        icon: BookIcon,
        title: "Junior",
        description: "Manage quarter grades for junior student",
        extraText:"j1 & j3"
    },
    {
        id: "2",
        icon: UserIcon,
        title: "Wheeler",
        description: "Manage quarter grades for Wheeler student",
        extraText:"w1 & w3"
    },
    {
        id: "3",
        icon: UserIcon,
        title: "Senior",
        description: "Manage quarter grades for senior student",
        extraText:"s1 & s3"
    },
];
