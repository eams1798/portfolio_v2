import HexagonGrid from "../HexagonGrid"
import PortfolioSection from "../PortfolioSection"
import { contacts as contactList } from "../../../data/index"
import { useState } from "react";
import { hexagonContact } from "../../../interfaces";
import { useTranslation } from "react-i18next"

const Contact = ({windowWidth}: {windowWidth: number}) => {
  const [contacts, ] = useState<hexagonContact[]>(contactList);
  const [tC] = useTranslation("Contact");

  const copyToClipboard = async (url: string) => {
    await navigator.clipboard.writeText(url);
    alert(tC("copied-to-clipboard", {url}));
  }

  return (
    <PortfolioSection sectionName="contact">
      <h1 className="porfolio-title mb-5">{tC("title")}</h1>
      <HexagonGrid
          items={contacts}
          itemAction={copyToClipboard}
          hexagonRadius={75}
          windowWidth={windowWidth}
          otherClassNames={["my-3"]} />
    </PortfolioSection>
  )
}

export default Contact