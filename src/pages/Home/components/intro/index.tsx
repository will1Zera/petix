import { useTheme } from "styled-components";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { RegularText } from "../../../../components/Typography";
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import { ShoppingCart, Package, Timer, Star } from "@phosphor-icons/react";


export function Intro(){
    // Hook do styled-comp que pega nossos temas
    const { colors } = useTheme();
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            O seu melhor amigo merece o melhor!        
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            No Petix, não vendemos apenas produtos para animais de estimação, vendemos amor, cuidado e felicidade embalados em cada item que oferecemos.
                        </RegularText>
                    </section>

                    <BenefitsContainer>
                        <InfoWithIcon
                            iconBg={colors["brand-green-dark"]} 
                            icon={<ShoppingCart weight="fill"/>}
                            text="Compra simples e segura"
                        />
                        <InfoWithIcon
                            iconBg={colors["base-text"]} 
                            icon={<Package weight="fill"/>}
                            text="Produtos de confiança"
                        />
                        <InfoWithIcon
                            iconBg={colors["base-label"]} 
                            icon={<Timer weight="fill"/>}
                            text="Entrega rápida e rastreada"
                        />
                        <InfoWithIcon
                            iconBg={colors["brand-purple"]} 
                            icon={<Star weight="fill"/>}
                            text="Qualidade garantida"
                        />
                    </BenefitsContainer>
                </div>

                <img src="/images/Intro_dog.png" alt="Cachorro" />
            </IntroContent>
        </IntroContainer>
    )
}