import HexagonGrid from "../HexagonGrid"
import PortfolioSection from "../PortfolioSection"
import { contacts as contactList } from "../../../data/index"
import { useState } from "react";
import { hexagonContact } from "../../../interfaces";

const Contact = () => {
  const [contacts, ] = useState<hexagonContact[]>(contactList);

  const copyToClipboard = async (url: string) => {
    await navigator.clipboard.writeText(url);
    alert(`Copied ${url} to clipboard`);
  }

  return (
    <PortfolioSection sectionName="contact">
      <h1 className="porfolio-title mb-5">Reach me out</h1>
      <HexagonGrid items={contacts} itemAction={copyToClipboard} hexagonRadius={75} otherClassNames={["my-3"]} />
    </PortfolioSection>
  )
}

export default Contact