import { icons, logos } from "@/utils/icons";
import S from "./styles";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <S.Header>
      <S.HeaderRow $variant="primary">
        <Image id="nike" src={logos.nike} alt="Nike"></Image>
        <div>
          <Image src={icons.bag} alt="Sacola de compras"></Image>
          <Image src={icons.menu} alt="Nike"></Image>
        </div>
      </S.HeaderRow>
      <S.HeaderCarousel $variant="secondary">
        <button>
          <Image src={icons.leftArrow} alt="Seta esquera"></Image>
        </button>
        <div>
          <Image src={logos.nikeSnkrs} alt="Nike SNKRS"></Image>
          <p>
            Fique por dentro dos lançamentos <Link href="#">SNKRS</Link>
          </p>
        </div>
        <button>
          <Image src={icons.rightArrow} alt="Seta direita"></Image>
        </button>
      </S.HeaderCarousel>
    </S.Header>
  );
}
